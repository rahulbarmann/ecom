"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCategories() {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {/* Casual Pants */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden bg-neutral-50 rounded-xl"
                    >
                        <Link
                            href="/collections/casual-pants"
                            className="block"
                        >
                            <div className="p-8 md:p-12">
                                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden mb-6">
                                    <Image
                                        src="/placeholder.svg?height=800&width=800"
                                        alt="Casual Pants Collection"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-medium mb-2 flex items-center">
                                            Ethnic Wear{" "}
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Comfort flex. Elevate everyday life.
                                        </p>
                                    </div>
                                    <div className="hidden md:block relative w-24 h-24 overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                        <Image
                                            src="/placeholder.svg?height=200&width=200"
                                            alt="Casual Pants Detail"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Jeans */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden bg-neutral-900 text-white rounded-xl"
                    >
                        <Link href="/collections/jeans" className="block">
                            <div className="p-8 md:p-12">
                                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden mb-6">
                                    <Image
                                        src="/placeholder.svg?height=800&width=800"
                                        alt="Jeans Collection"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-medium mb-2 flex items-center">
                                            Indo Western Wear{" "}
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </h3>
                                        <p className="text-neutral-400">
                                            Quality denim fabrics in unique
                                            fades.
                                        </p>
                                    </div>
                                    <div className="hidden md:block relative w-24 h-24 overflow-hidden rounded-full border-4 border-neutral-800 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                        <Image
                                            src="/placeholder.svg?height=200&width=200"
                                            alt="Jeans Detail"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
