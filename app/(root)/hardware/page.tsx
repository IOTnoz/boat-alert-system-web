import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const listComponent = [
    {
        title: "ESP32",
        desc: "ESP32 adalah mikrokontroler dari Espressif System dengan dukungan WiFi, GPIO, dan USB, yang digunakan sebagai otak sistem untuk mendeteksi kemiringan perahu dan mengirim data melalui LoRa ke darat, lalu diteruskan ke basis data.",
        image: "/alat/esp32.png",
    },
    {
        title: "Lora Ra-02",
        desc: "LoRa merupakan teknologi komunikasi nirkabel berbasis Chirp Spread Spectrum (CSS) yang hemat daya, tahan interferensi, dan mampu mengirim data jarak jauh hingga 15 km, seperti dari perahu ke darat.",
        image: "/alat/lora2.png",
    },
    {
        title: "MPU 9250",
        desc: "Sensor kemiringan digunakan untuk mendeteksi sudut kemiringan perahu terhadap gravitasi dengan memanfaatkan sensor akselerometer dan gyroscope, yang bekerja berdasarkan perubahan percepatan dan orientasi.",
        image: "/alat/mpu.png",
    },
    {
        title: "GPS Neo 6M",
        desc: "GPS (Global Positioning System) adalah sistem navigasi satelit yang bekerja 24 jam tanpa biaya, dan dalam sistem, modul GPS Neo-6M digunakan untuk memperoleh data koordinat perahu yang akan dikirimkan ke darat.",
        image: "/alat/gps.png",
    },
    {
        title: "Buzzer KY-021",
        desc: "Buzzer adalah komponen suara yang dikendalikan melalui GPIO dan digunakan dalam sistem sebagai alarm yang diaktifkan oleh ESP32 untuk memberikan peringatan kondisi tertentu.",
        image: "/alat/buzzer.png",
    },
    {
        title: "LED",
        desc: "LED adalah komponen output visual yang umum digunakan sebagai indikator dalam berbagai sistem elektronik. Dalam sistem, LED merah dan hijau berfungsi sebagai indikator kondisi perahu",
        image: "/alat/led.png",
    },
];

export default function Hardware() {
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl text-center md:mx-auto mt-2 lg:mt-8">
                Sistem Alat
            </h2>
            <div className="mt-8 md:mt-16 w-full mx-auto space-y-20 px-4 lg:px-0">
                <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
                    <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 flex justify-center items-center">
                        <Image
                            src="/alat/alat-darat.png"
                            alt="Alat Darat IOTNOZ"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="basis-1/2 shrink-0">
                        <h4 className="my-3 text-3xl font-semibold tracking-tight">
                            Sistem Darat
                        </h4>
                        <p className="text-muted-foreground text-[17px]">
                            Sistem ini membaca data lokasi dan mengukur
                            kemiringan perahu ketika sedang melaut menggunakan
                            modul GPS Neo 6M dan sensor MPU9250 kemudian
                            mengirimkan data tersebut ke sistem yang ada di
                            darat melalui LoRa.
                        </p>
                        <Button
                            asChild
                            className="mt-6 rounded-full min-w-40 text-[15px]"
                        >
                            <Link href="https://drive.google.com/file/d/1FarJc6g7RamV_NwShMK-apekhTIeZ5qf/view?usp=sharing">
                                Lihat Detail <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
                    <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 flex justify-center items-center">
                        <Image
                            src="/alat/alat-laut.png"
                            alt="Alat Laut IOTNOZ"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="basis-1/2 shrink-0">
                        {/* <span className="uppercase font-semibold text-sm text-muted-foreground">
                                            Alat Darat
                                        </span> */}
                        <h4 className="my-3 text-3xl font-semibold tracking-tight">
                            Sistem Laut
                        </h4>
                        <p className="text-muted-foreground text-[17px]">
                            Sistem ini membaca data lokasi dan mengukur
                            kemiringan perahu ketika sedang melaut menggunakan
                            modul GPS Neo 6M dan sensor MPU9250 kemudian
                            mengirimkan data tersebut ke sistem yang ada di
                            darat melalui LoRa.
                        </p>
                        <Button
                            asChild
                            className="mt-6 rounded-full min-w-40 text-[15px]"
                        >
                            <Link href="https://drive.google.com/file/d/1FarJc6g7RamV_NwShMK-apekhTIeZ5qf/view?usp=sharing">
                                Lihat Detail <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mt-12">
                    Detail Komponen
                </h2>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 w-full mx-auto px-6">
                    {listComponent.map((feature, idx) => (
                        <div key={idx} className="flex flex-col text-start">
                            <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl lg:p-24 flex items-center justify-center">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={250}
                                    height={250}
                                    className="w-full"
                                />
                            </div>
                            <span className="text-2xl font-semibold tracking-tight">
                                {feature.title}
                            </span>
                            <p className="mt-2 text-muted-foreground text-[17px] text-justify">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
