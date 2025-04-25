"use client";

import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "lucide-react";

// Simulated ship data in Makassar Strait
const ships = [
    {
        id: 1,
        name: "Garuda Nusantara",
        lat: -5.0406,
        lng: 119.325,
        heading: 45,
        speed: 12.5,
        type: "Nelayan Kecil",
    },
    {
        id: 2,
        name: "Samudra Jaya",
        lat: -5.045,
        lng: 119.33,
        heading: 270,
        speed: 8.3,
        type: "Kapal Penumpang",
    },
    {
        id: 3,
        name: "Bahari Express",
        lat: -5.035,
        lng: 119.32,
        heading: 180,
        speed: 15.7,
        type: "Kapal Penumpang",
    },
    {
        id: 4,
        name: "Nusa Bahari",
        lat: -5.038,
        lng: 119.315,
        heading: 315,
        speed: 10.2,
        type: "Nelayan Besar",
    },
];

export default function MapLeaflet() {
    const mapRef = useRef(null);
    const leafletMap = useRef(null);
    const [time, setTime] = useState(new Date());
    const [mapLoaded, setMapLoaded] = useState(false);

    // Update time every second to simulate real-time
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Initialize Leaflet map
    useEffect(() => {
        // Dynamic import of Leaflet since it requires browser APIs
        async function initializeMap() {
            if (
                typeof window !== "undefined" &&
                mapRef.current &&
                !leafletMap.current
            ) {
                // Import Leaflet dynamically
                const L = (await import("leaflet")).default;

                // Import Leaflet CSS
                await import("leaflet/dist/leaflet.css");

                // Create map instance
                const map = L.map(mapRef.current).setView(
                    [-5.0406, 119.325],
                    15,
                );

                // Add tile layer (OpenStreetMap)
                L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    },
                ).addTo(map);

                // Custom ship icon
                const shipIcon = L.divIcon({
                    html: `<div class="flex items-center justify-center w-8 h-8">
                  <div class="absolute w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div class="absolute w-6 h-6 bg-blue-500 rounded-full opacity-30 animate-ping"></div>
                </div>`,
                    className: "",
                    iconSize: [32, 32],
                    iconAnchor: [16, 16],
                });

                // Add markers for ships
                ships.forEach((ship) => {
                    L.marker([ship.lat, ship.lng], { icon: shipIcon }).addTo(
                        map,
                    ).bindPopup(`
              <div class="p-2">
                <h4 class="font-medium">${ship.name}</h4>
                <div class="mt-2 space-y-1 text-xs">
                  <div class="flex justify-between">
                    <span>Type:</span>
                    <span class="font-medium capitalize">${ship.type}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Speed:</span>
                    <span class="font-medium">${ship.speed} knots</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Heading:</span>
                    <span class="font-medium">${ship.heading}°</span>
                  </div>
                </div>
              </div>
            `);

                    // Add a line showing the ship's heading
                    L.polyline(
                        [
                            [ship.lat, ship.lng],
                            [
                                ship.lat +
                                    0.01 *
                                        Math.sin(
                                            (ship.heading * Math.PI) / 180,
                                        ),
                                ship.lng +
                                    0.01 *
                                        Math.cos(
                                            (ship.heading * Math.PI) / 180,
                                        ),
                            ],
                        ],
                        {
                            color: "#3b82f6",
                            weight: 2,
                            opacity: 0.6,
                            dashArray: "5, 5",
                        },
                    ).addTo(map);
                });

                leafletMap.current = map;
                setMapLoaded(true);
            }
        }

        initializeMap();

        // Cleanup function
        return () => {
            if (leafletMap.current) {
                leafletMap.current.remove();
                leafletMap.current = null;
            }
        };
    }, []);

    return (
        <div className="relative w-full h-full bg-gray-100">
            {/* Map container */}
            <div ref={mapRef} className="absolute inset-0 z-10" />

            {/* Overlay UI elements */}
            <div className="absolute top-4 right-4 z-20 flex justify-between items-center pointer-events-none">
                <div className="bg-background/80 backdrop-blur-sm p-2 rounded-md flex items-center space-x-2 pointer-events-auto">
                    <Badge
                        variant="outline"
                        className="bg-blue-500/10 text-blue-500 border-blue-500/20"
                    >
                        Live Tracking
                    </Badge>
                    <span className="text-xs text-foreground">
                        {time.toLocaleTimeString()} WIB
                    </span>
                </div>
            </div>

            {/* Legend */}
            {/* <div className="absolute bottom-4 left-4 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-md pointer-events-auto">
        <div className="text-xs font-medium mb-1">Tipe Kapal</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs">Nelayan Kecil</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-xs">Kapal Pengangkut Barang</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs">Kapal Penumpang</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-xs">Nelaya Besar</span>
          </div>
        </div>
      </div> */}

            {/* Loading state */}
            {!mapLoaded && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-background/50">
                    <div className="flex flex-col items-center">
                        <div className="animate-spin mb-2">
                            <Navigation className="h-8 w-8 text-blue-500" />
                        </div>
                        <p className="text-sm">Loading map...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
