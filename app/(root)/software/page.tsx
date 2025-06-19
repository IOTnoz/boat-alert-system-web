import Image from "next/image";
import Link from "next/link";

const features = [
    {
        product: "Next JS",
        desc: "Next.js adalah kerangka kerja React untuk membangun aplikasi web full-stack. Kamu menggunakan Komponen React untuk membuat antarmuka pengguna, dan Next.js untuk fitur tambahan serta optimalisasi.",
        link: "https://nextjs.org",
        img: "/software/nextjs.png",
    },
    {
        product: "Firebase",
        desc: "Firebase adalah suatu layanan dari Google yang digunakan untuk mempermudah para pengembang aplikasi dalam mengembangkan aplikasi. ",
        link: "https://firebase.google.com/",
        img: "/software/firebase.png",
    },
    {
        product: "React Leaflet Js",
        desc: "React Leaflet menyediakan penghubung antara React dan Leaflet. React Leaflet tidak menggantikan Leaflet, tetapi memanfaatkannya untuk mengabstraksikan layer-layer Leaflet sebagai komponen React.",
        link: "https://react-leaflet.js.org",
        img: "/software/leaflet.png",
    },
];

export default function Software() {
    return (
        <div className="container mt-8 mx-auto min-h-[70vh] flex flex-col items-center justify-center px-4 lg:px-0">
            <h2 className="text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
                Software dan Library
            </h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                    <Link key={feature.product} href="#">
                        <div className="flex gap-6 hover:ring rounded-lg p-2 -mx-2 sm:mx-0 max-w-lg">
                            <div className="h-24 aspect-square shrink-0 p-2 lg:p-0 rounded-lg bg-muted items-center flex justify-center">
                                <Image
                                    src={feature.img}
                                    alt={feature.product}
                                    width={50}
                                    height={50}
                                    className="w-full"
                                />
                            </div>
                            <div className="">
                                <span className="font-semibold tracking-tight text-lg">
                                    {feature.product}
                                </span>
                                <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
