"use client";

import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function TimerClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            const clock = new Date();

            function withZero(num: number): string {
                if (num < 10) {
                    return "0" + num;
                }
                return "" + num;
            }

            const hour = clock.getHours();
            const minute = clock.getMinutes();
            const second = clock.getSeconds();

            const currentTime =
                withZero(hour) +
                ":" +
                withZero(minute) +
                ":" +
                withZero(second);

            setTime(currentTime);
        });
    }, []);

    return (
        <div className="flex gap-2 items-center justify-center border bg-muted text-muted-foreground text-sm py-2 w-44 rounded-lg">
            <Clock />
            {time}
            <span> WITA</span>
        </div>
    );
}
