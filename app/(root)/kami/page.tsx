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
            <section>
                <h3 className="font-bold text-4xl pt-8 pb-4 mx-auto text-center">
                    IOTNOZ 09
                </h3>
                <h4 className="text-center font-semibold text-2xl">
                    Keep you informed, Keeping them safe.
                </h4>
            </section>
        </div>
    );
}
