import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function MapTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute top-4 right-4 z-[999] flex justify-between items-center pointer-events-none">
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
    );
}
