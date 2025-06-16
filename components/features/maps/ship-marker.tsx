import { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import { divIcon, LatLngTuple } from "leaflet";
import ReactDomServer from "react-dom/server";
import { Sailboat } from "lucide-react";
import { ShipWithLatestLog } from "@/types";
import { Polyline, Popup } from "react-leaflet";
import { Badge } from "@/components/ui/badge";
import NavigationDetails from "./navigation-details";

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

    const bearing = calculateBearing(prev, [lat, lon]);
    const fakePrev = getPointBehind([lat, lon], bearing, 50); // 300 meter ekor

    return (
        <>
            <LeafletTrackingMarker
                icon={shipIcon}
                position={[lat, lon]}
                previousPosition={prev}
                duration={1000}
            >
                <Popup className="w-fit font-sans">
                    <h3 className="text-xl font-bold">{data.name}</h3>
                    <Badge
                        className={
                            data.latest_log?.flag
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                        }
                    >
                        {data.latest_log?.flag ? "Peringatan" : "Normal"}
                    </Badge>
                    <div className="py-2 flex gap-2 items-stretch">
                        <div className="w-32">
                            <p className="font-bold text-2xl !my-1">
                                {Math.floor(data.latest_log?.roll ?? 0)}&#176;
                            </p>
                            <span className="text-sm">
                                Kemiringan
                                <br /> Samping
                            </span>
                        </div>
                        <div className="w-32">
                            <p className="font-bold text-2xl !my-1">
                                {Math.floor(data.latest_log?.pitch ?? 0)}&#176;
                            </p>
                            <span className="text-sm">
                                Kemiringan
                                <br /> Depan/Belakang
                            </span>
                        </div>
                    </div>
                    <NavigationDetails shipId={data.code} name={data.name} />
                </Popup>
            </LeafletTrackingMarker>
            <Polyline
                positions={[fakePrev, [lat, lon]]}
                pathOptions={{ color: "blue", dashArray: "5, 10" }}
            />
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

function calculateBearing(from: LatLngTuple, to: LatLngTuple): number {
    const [lat1, lon1] = from.map((d) => (d! * Math.PI) / 180);
    const [lat2, lon2] = to.map((d) => (d! * Math.PI) / 180);

    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    const bearing = (Math.atan2(y, x) * 180) / Math.PI;

    return (bearing + 360) % 360; // in degrees
}

function getPointBehind(
    current: LatLngTuple,
    bearing: number,
    distanceMeters: number,
): LatLngTuple {
    const R = 6371000; // Earth radius in meters
    const δ = distanceMeters / R; // angular distance
    const θ = ((bearing + 180) % 360) * (Math.PI / 180); // reverse direction in radians

    const [lat1, lon1] = current.map((d) => (d! * Math.PI) / 180);

    const lat2 = Math.asin(
        Math.sin(lat1) * Math.cos(δ) +
            Math.cos(lat1) * Math.sin(δ) * Math.cos(θ),
    );
    const lon2 =
        lon1 +
        Math.atan2(
            Math.sin(θ) * Math.sin(δ) * Math.cos(lat1),
            Math.cos(δ) - Math.sin(lat1) * Math.sin(lat2),
        );

    return [(lat2 * 180) / Math.PI, (lon2 * 180) / Math.PI];
}
