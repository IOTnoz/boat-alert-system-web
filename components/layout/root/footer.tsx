import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 mt-16 py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-medium">
                            Boat Safe System
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Monitoring kapal di laut secara realtime.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col space-y-4 md:items-center">
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                            <Link
                                href="/produk"
                                className="text-sm hover:text-primary transition-colors"
                            >
                                Produk
                            </Link>
                            <Link
                                href="/iotnoz"
                                className="text-sm hover:text-primary transition-colors"
                            >
                                IOTNOZ
                            </Link>
                            <Link
                                href="/mitra"
                                className="text-sm hover:text-primary transition-colors"
                            >
                                Mitra
                            </Link>
                            <Link
                                href="/hardware"
                                className="text-sm hover:text-primary transition-colors"
                            >
                                Hardware
                            </Link>
                            <Link
                                href="/software"
                                className="text-sm hover:text-primary transition-colors"
                            >
                                Software
                            </Link>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col space-y-4 md:items-end">
                        <div className="flex space-x-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                            >
                                <Github className="h-4 w-4" />
                                Github
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center mt-12 pt-8 border-t border-border/40">
                    <p className="text-xs text-muted-foreground">
                        Created By IOTNOZ © {currentYear}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
