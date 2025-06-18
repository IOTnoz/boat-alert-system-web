import Image from "next/image";

export default function Mitra() {
    return (
        <div className="container mx-auto">
            <div className="w-full h-full px-4">
                <Image
                    src="/mitra.png"
                    alt="Yayasan Konservasi Laut"
                    width={1900}
                    height={600}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
