import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Iotnoz() {
    return (
        <div className="container mx-auto px-4 mt-8">
            <div className="flex flex-col lg:flex-row w-full lg:h-[80vh] p-4 lg:p-16 bg-gradient-to-br from-pink-700/30 to-blue-700/25 rounded-lg">
                <div className="lg:h-full flex flex-col justify-end w-full lg:w-1/2 py-8 lg:pt-0">
                    <Image
                        src="/alat-darat.png"
                        alt="Alat Darat IOTNOZ"
                        width={300}
                        height={300}
                        className="mb-8 lg:mb-12"
                    />
                    <h2 className="font-bold lg:font-extrabold text-3xl lg:text-6xl mb-2 text-blue-800">
                        Boat Safe System
                    </h2>
                    <p className="font-medium lg:font-semibold text-base lg:text-2xl text-blue-700">
                        Keep you informed, Keeping them safe.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-end">
                    <div className="flex gap-2">
                        <div className="size-8 bg-blue-500 rounded-md"></div>
                        <div className="size-8 bg-blue-500 rounded-md"></div>
                        <div className="size-8 bg-blue-500 rounded-md"></div>
                    </div>
                    <div className="mt-4 lg:mt-8 mb-4">
                        <h6 className="text-lg font-bold text-blue-900 mb-2 tracking-wide">
                            Latar Belakang
                        </h6>
                        <p className="text-lg text-justify text-blue-700">
                            Yayasan Konservasi Laut (YKL) Indonesia berkomitmen
                            terhadap pelestarian ekosistem pesisir dan
                            pemberdayaan masyarakat pesisir. Sebagai bentuk
                            perhatian terhadap keselamatan kerja nelayan,
                            khususnya nelayan kecil, dirancanglah sistem deteksi
                            dini keadaan darurat di laut. Sistem ini mendeteksi
                            potensi perahu terbalik melalui sensor kemiringan
                            dan GPS, lalu mengirimkan sinyal darurat secara
                            otomatis ke darat menggunakan teknologi LoRa. Data
                            lokasi dan kemiringan perahu diteruskan ke server
                            dan ditampilkan melalui aplikasi berbasis web untuk
                            mempermudah pemantauan dan penanganan cepat.
                        </p>
                    </div>
                    <Separator />
                    <div className="mt-4 lg:mt-8 mb-4 lg:mb-8">
                        <h6 className="text-lg font-bold text-blue-900 mb-2 tracking-wide">
                            Produk Akhir
                        </h6>
                        <p className="text-lg text-justify text-blue-700">
                            Sistem perahu dapat melakukan pengukuran kemiringan
                            dan lokasi dari perahu serta dapat mengirimkan data
                            melalui module LoRa. Namun, salah satu tantangan
                            dalam alat ini adalah modul GPS yang digunakan
                            membutuhkan waktu dalam melakukan kalibrasi sinyal
                            satelit. Jika sistem di perahu ini ditempatkan di
                            rungan tertutup sinyal satelit akan susah dideteksi
                            oleh modul GPS. Sistem darat juga bekerja dengan
                            baik dalam menerima sinyal RF yang dikirim oleh LoRa
                            pada sistem perahu.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
