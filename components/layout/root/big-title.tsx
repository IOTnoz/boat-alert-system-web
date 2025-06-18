"use client";

import { motion } from "framer-motion";
import { Anchor, Radio, Waves } from "lucide-react";

export default function BigTitle() {
    return (
        <div className="relative overflow-hidden py-20 md:py-28">
            {/* Background waves decoration */}
            <div className="absolute inset-0 opacity-10">
                <Waves className="absolute -bottom-10 left-0 w-full h-40 text-blue-500" />
                <Waves className="absolute -bottom-5 left-0 w-full h-32 text-blue-400 opacity-70" />
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <motion.div
                                className="absolute -inset-1 rounded-full blur-md bg-blue-200 dark:bg-blue-700 opacity-70"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                            />
                            <div className="relative bg-background dark:bg-background/80 rounded-full p-3">
                                <Anchor className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Monitoring kapal dilaut
                        <span className="block mt-2">
                            secara
                            <span className="relative inline-block mx-2">
                                realtime.
                                <motion.span
                                    className="absolute bottom-1 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
                                    animate={{
                                        width: ["0%", "100%", "0%"],
                                        left: ["0%", "0%", "100%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                    }}
                                />
                            </span>
                        </span>
                    </h1>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Teknologi realtime untuk mengawasi kecelakaan pada kapal
                        di laut dan memberikan posisi pergerakan kapal, membantu
                        tindakan yang lebih sigap ketika diperlukan.
                    </motion.p>

                    <motion.div
                        className="mt-8 flex justify-center items-center space-x-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Radio className="h-4 w-4 text-blue-500 animate-pulse" />
                        <span>Pemantauan langsung 24/7</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
