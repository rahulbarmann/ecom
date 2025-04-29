"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const collections = [
    {
        id: 1,
        title: "A Night At The Opera",
        description:
            "An iconic Mumbai venue; and some stunning looks to match. Go behind the scenes.",
        image: "/placeholder.svg?height=600&width=500",
        link: "/collections/opera",
        cta: "Go Behind The Scenes",
    },
    {
        id: 2,
        title: "BSC x Tilak Varma",
        description:
            "He's great with the bat in hand for Mumbai & India, and just as good in front of the camera.",
        image: "/placeholder.svg?height=600&width=500",
        link: "/collections/tilak-varma",
        cta: "Discover The Campaign",
    },
    {
        id: 3,
        title: "Just Launched: New 100% Linen Shirts",
        description:
            "The ultimate summer fabric in laid-back designs ideal for the season.",
        image: "/placeholder.svg?height=600&width=500",
        link: "/collections/linen-shirts",
        cta: "Explore",
    },
    {
        id: 4,
        title: "We're now open in Khan Market",
        description:
            "The legendary Delhi neighbourhood now has a Company store. Get in where you fit in.",
        image: "/placeholder.svg?height=600&width=500",
        link: "/stores/khan-market",
        cta: "Visit Us",
    },
];

export default function FeaturedCollections() {
    return (
        <section className="py-16 md:py-24 bg-neutral-50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 inline-flex items-center">
                        <span className="w-8 h-[2px] bg-black mr-3"></span>
                        New At BSC
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={collection.link} className="block">
                                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
                                    <Image
                                        src={
                                            collection.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={collection.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <h3 className="text-lg font-medium mb-2">
                                    {collection.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-3">
                                    {collection.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-medium">
                                    {collection.cta}{" "}
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
