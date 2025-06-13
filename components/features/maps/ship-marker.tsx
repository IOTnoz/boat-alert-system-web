import { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import { divIcon, LatLngTuple } from "leaflet";
import ReactDomServer from "react-dom/server";
import { Sailboat } from "lucide-react";
import { ShipWithLatestLog } from "@/types";
import { Polyline, Popup } from "react-leaflet";

export default function ShipMarker({ data }: { data: ShipWithLatestLog }) {
    const { latest_log } = data;
    const lat = latest_log?.lat ?? 0;
    const lon = latest_log?.lon ?? 0;
    const flag = latest_log?.flag ?? false;
    const [prev, setPrev] = useState<LatLngTuple>([lat, lon]);

    useEffect(() => {
        if (prev[1] !== lon && prev[0] !== lon) setPrev([lat, lon]);
    }, [lat, lon, prev]);

    const shipIcon = getShipIcon(flag);
    console.log(
        data.name,
        ": ",
        data.latest_log?.lat,
        data.latest_log?.lon,
        prev,
    );

    return (
        <>
            <LeafletTrackingMarker
                icon={shipIcon}
                position={[lat, lon]}
                previousPosition={prev}
                duration={1000}
            >
                <Popup>
                    <strong>{data.name}</strong> <br />
                    Status: {data.latest_log?.flag ? "Peringatan" : "Normal"}
                    <br />
                    Kemiringan Depan: {Math.floor(
                        data.latest_log?.pitch ?? 0,
                    )}{" "}
                    <br />
                    Kemiringan Samping: {Math.floor(
                        data.latest_log?.roll ?? 0,
                    )}{" "}
                    <br />
                </Popup>
            </LeafletTrackingMarker>
            <Polyline positions={[prev, [lat, lon]]} />
        </>
    );
}

function getShipIcon(flag: boolean) {
    const bgColor = flag ? "bg-yellow-500" : "bg-blue-500";

    return divIcon({
        html: ReactDomServer.renderToString(
            <div className="flex items-center justify-center w-8 h-8 relative">
                <div
                    className={`absolute w-8 h-8 ${bgColor} rounded-full z-10`}
                />
                <div
                    className={`absolute w-8 h-8 ${bgColor} rounded-full opacity-30 animate-ping z-0`}
                />
                <Sailboat className="w-6 h-6 text-white z-20" />
            </div>,
        ),
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    });
}
