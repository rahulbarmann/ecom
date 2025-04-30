import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
    return (
        <section className="relative w-full h-[80vh] bg-neutral-900 overflow-hidden">
            <div className="container h-full flex flex-col md:flex-row items-end md:items-center">
                <div className="relative z-10 mb-12 md:mb-0 md:w-1/2 text-white p-6 md:p-12">
                    <div className="mb-8">
                        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                            M/S
                            <br />
                            RAJEEV
                            <br />
                            FABRICS
                        </h1>
                        <div className="w-16 h-0.5 bg-white mb-4"></div>
                        <p className="text-lg md:text-xl font-light">
                            Premium tailored clothing for the modern individual
                        </p>
                    </div>

                    <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8">
                        DISCOVER THE COLLECTION
                    </Button>
                </div>

                <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
                    <Image
                        src="/placeholder.svg?height=1200&width=800"
                        alt="Model wearing formal attire"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    );
}
