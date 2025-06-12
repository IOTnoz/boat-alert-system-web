"use client";

import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Navigation } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DataSnapshot, off, onValue, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import ShipMarker from "./ship-marker";
import {
    NavigationLog,
    ShipWithLatestLog,
    ShipWitNavigationLog,
} from "@/types";
import MapTime from "./map-time";

function getLatestLog(
    navigationLog: Record<string, NavigationLog> | undefined,
): NavigationLog | null {
    if (!navigationLog) return null;

    let latestLog: NavigationLog | null = null;
    let maxTimeStamp = 0;

    for (const logData of Object.values(navigationLog)) {
        if (logData.timestamp > maxTimeStamp) {
            maxTimeStamp = logData.timestamp;
            latestLog = logData;
        }
    }

    return latestLog;
}

function useRealTimeShipWithLatestLog() {
    const [rawShipData, setRawShipData] = useState<Record<
        string,
        ShipWitNavigationLog
    > | null>(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<
        "connecting" | "connected" | "disconnected"
    >("connecting");

    const ships: ShipWithLatestLog[] = useMemo(() => {
        if (!rawShipData) return [];
        return Object.entries(rawShipData).map(([shipId, shipData]) => ({
            code: shipId,
            name: shipData.name,
            status: shipData.status,
            latest_log: getLatestLog(shipData.navigation_log),
            created_at: shipData.created_at,
        }));
    }, [rawShipData]);

    const handleDataChange = useCallback((snapshot: DataSnapshot) => {
        try {
            if (!snapshot.exists()) {
                setRawShipData(null);
            } else {
                setRawShipData(snapshot.val());
            }

            setInitialLoading(false);
            setConnectionStatus("connected");
            setError(null);
        } catch (err) {
            console.log("Error precessing data: ", err);
            setError(err instanceof Error ? err.message : "Unknown error");
            setInitialLoading(false);
            setConnectionStatus("disconnected");
        }
    }, []);

    const handleError = useCallback((error: Error) => {
        console.log("Firebase connection error: ", error);
        setError(error.message);
        setConnectionStatus("disconnected");
        setInitialLoading(false);
    }, []);

    useEffect(() => {
        const shipRef = ref(database, "boats");

        setInitialLoading(true);
        setConnectionStatus("connecting");

        const unsubscribe = onValue(shipRef, handleDataChange, handleError);

        return () => {
            off(shipRef, "value", handleDataChange);
            unsubscribe();
        };
    }, [handleDataChange, handleError]);

    return {
        ships,
        loading: initialLoading,
        error,
        connectionStatus,
        isRealTime: true,
    };
}

export default function MapLeaflet() {
    const { ships, loading } = useRealTimeShipWithLatestLog();
    const centerShip = ships[0] ?? [];

    if (loading) {
        return (
            <div className="relative w-full h-full bg-gray-100">
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-blue-200">
                    <div className="flex flex-col items-center">
                        <div className="animate-spin mb-2">
                            <Navigation className="h-8 w-8 text-blue-500" />
                        </div>
                        <p className="text-sm mt-4 text-white">
                            Loading map...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full bg-gray-100">
            <MapContainer
                center={[
                    centerShip.latest_log?.lat ?? 0,
                    centerShip.latest_log?.lon ?? 0,
                ]}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {ships.map((ship) => {
                    return (
                        <div key={ship.code}>
                            <ShipMarker data={ship} />
                        </div>
                    );
                })}
            </MapContainer>
            <MapTime />
        </div>
    );
}
