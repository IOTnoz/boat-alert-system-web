"use client";

import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const iotnozTeam = [
    {
        name: "Leonardo Nifinluri",
        alias: "leo",
        tagline: "Anak Rajin",
    },
    {
        name: "Resal Finanda",
        alias: "resal",
        tagline: "Anak Soleh",
    },
    {
        name: "Alexander Mario Lefta",
        alias: "alex",
        tagline: "Anak Baik Hati",
    },
    {
        name: "Perdi",
        alias: "perdi",
        tagline: "Rajin Menabung",
    },
];

export default function WeAre() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().catch((e) => console.log("Gagal memutar:", e));
            setIsPlaying(true);
        }
    };
    return (
        <div className="container mx-auto  px-4">
            <div className="relative w-full h-full">
                <Image
                    src="/iotnoz/big4.png"
                    alt="4 berkawan dari unhas teknik zod"
                    width={1900}
                    height={600}
                    className="rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full flex justify-center">
                    <Button
                        onClick={toggleMusic}
                        className="mx-auto mt-4 rounded-full"
                    >
                        {isPlaying ? (
                            <>
                                <Pause />
                                Hentikan musik
                            </>
                        ) : (
                            <>
                                <Play />
                                Mulai musik
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div className="flex justify-items-center">
                <audio
                    ref={audioRef}
                    src="/music/champions.mp3"
                    autoPlay
                    preload="auto"
                />
            </div>

            <section>
                <div className="mb-8">
                    <h3 className="font-bold text-2xl lg:text-4xl pt-4 pb-2 lg:pt-8 lg:pb-4 mx-auto text-center">
                        IOTNOZ 09
                    </h3>
                    <h4 className="text-center font-semibold lg:text-2xl">
                        We are the Champions.
                    </h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {iotnozTeam.map((iotnoz, idx) => (
                        <div
                            key={idx}
                            className="w-full p-2 lg:p-4 rounded-lg border"
                        >
                            <Image
                                src={`/iotnoz/${iotnoz.alias}.png`}
                                alt={`${iotnoz.alias} - IOTNOZ`}
                                width={500}
                                height={500}
                                className="w-full aspect-square rounded-md mb-4"
                            />
                            <h6 className="font-bold text-xl text-center">
                                {iotnoz.name}
                            </h6>
                            <p className="text-center italic">
                                &quot;{iotnoz.tagline}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
