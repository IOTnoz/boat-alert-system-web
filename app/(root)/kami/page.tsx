import Image from "next/image";

export default function WeAre() {
    return (
        <div className="container mx-auto">
            <div className="w-full h-full px-4">
                <Image
                    src="/big4.png"
                    alt="4 berkawan dari unhas teknik zod"
                    width={1900}
                    height={600}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
