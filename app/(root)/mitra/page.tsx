import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Settings2 } from "lucide-react";
import Image from "next/image";

export default function Mitra() {
    return (
        <div className="container mx-auto px-4">
            <div className="relative w-full h-full">
                <Image
                    src="/mitra/ykl-bg.jpg"
                    alt="Yayasan Konservasi Laut"
                    width={1900}
                    height={600}
                    className="rounded-lg aspect-video"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
                    <div className="mb-2 lg:mb-8 bg-white/40 backdrop-blur-lg p-1 lg:p-2">
                        <h5 className="font-bold text-sm lg:text-4xl text-blue-900">
                            Yayasan Konservasi Laut (YKL)
                        </h5>
                    </div>
                </div>
            </div>
            <section className="pt-8">
                <h6 className="font-bold text-2xl lg:text-4xl tracking-wide mb-4">
                    Dosen Pembimbing
                </h6>
                <p className="text-justify from-slate-400">
                    Pertama-tama, kami mengucapkan terima kasih kepada Ibu Ir.
                    Anugrayani Bustamin, S.T., M.T. selaku pembimbing proyek
                    ini. Merupakan suatu kehormatan bagi tim kami dapat
                    mewujudkan ide yang telah beliau berikan. Kami juga
                    menyampaikan apresiasi yang sebesar-besarnya atas segala
                    bantuan materiil, dukungan dalam menghadapi berbagai
                    tantangan, serta peran beliau sebagai penghubung antara tim
                    kami dan mitra.
                </p>
            </section>

            <div className="w-full mx-auto pt-8">
                <h2 className="text-2xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
                    Yayasan Konservasi Laut Indonesia
                </h2>
                <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                        {/* Media 1 Mobile */}
                        <div className="overflow-clip md:hidden mb-6 aspect-video w-full bg-background border rounded-xl">
                            <Image
                                src="/mitra/ykl-beach.jpg"
                                alt="Pesisir Laut Indonesia"
                                width={800}
                                height={450}
                                className="w-full aspect-video overflow-hidden"
                            />
                        </div>

                        <span className="text-2xl font-semibold tracking-tight">
                            Program Utama
                        </span>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <div className="flex items-start gap-3">
                                    <Settings2 className="shrink-0" />
                                    <p className="-mt-0.5">
                                        Konservasi Ekosistem Pesisir dan Laut
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <Blocks className="shrink-0" />
                                    <p className="-mt-0.5">
                                        Pemberdayaan Masyarakat Pesisir dan
                                        Pulau-pulau Kecil
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <Blocks className="shrink-0" />
                                    <p className="-mt-0.5">
                                        Penerapan Teknologi Alternatif Ramah
                                        Lingkungan
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <a
                            href="https://yklindonesia.org/"
                            target="_blank"
                            rel="noopener noferer"
                        >
                            <Button className="mt-12 w-full">
                                Lihat lebih banyak
                                <ArrowRight />
                            </Button>
                        </a>
                    </div>
                    {/* Media 1 Desktop */}
                    <div className="hidden md:block border border-border/80 overflow-clip bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2">
                        <Image
                            src="/mitra/ykl-beach.jpg"
                            alt="Pesisir Laut Indonesia"
                            width={800}
                            height={450}
                            className="w-full aspect-video overflow-hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
