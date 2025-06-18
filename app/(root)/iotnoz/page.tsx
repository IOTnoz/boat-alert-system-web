import Image from "next/image";

export default function Iotnoz() {
    return (
        <div className="container mx-auto">
            <div className="w-full h-full px-4">
                <Image
                    src="/ship-image.png"
                    alt="Iotnoz Broo 09"
                    width={1900}
                    height={600}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
