"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BrandStatement() {
    return (
        <section className="py-24 md:py-32 overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
                        Reinventing classics for the modern woman.
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Luxurious Fabrics. Expert Craftsmanship. Made To
                        Measure.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            variant="outline"
                            className="min-w-[180px] border-black hover:bg-black hover:text-white transition-all duration-300"
                        >
                            LEARN MORE
                        </Button>
                        <div className="hidden sm:block w-2 h-2 rounded-full bg-black/20"></div>
                        <Button
                            variant="link"
                            className="text-black underline-offset-8 decoration-2 hover:underline"
                        >
                            TALK TO A STYLIST
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
