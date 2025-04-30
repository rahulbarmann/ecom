import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Shirts",
        image: "/placeholder.svg?height=200&width=200",
        href: "#shirts",
    },
    {
        name: "Formal Pants",
        image: "/placeholder.svg?height=200&width=200",
        href: "#formal-pants",
    },
    {
        name: "Jeans",
        image: "/placeholder.svg?height=200&width=200",
        href: "#jeans",
    },
    {
        name: "Casual Pants",
        image: "/placeholder.svg?height=200&width=200",
        href: "#casual-pants",
    },
    {
        name: "Jackets",
        image: "/placeholder.svg?height=200&width=200",
        href: "#jackets",
    },
    {
        name: "T-Shirts",
        image: "/placeholder.svg?height=200&width=200",
        href: "#t-shirts",
    },
    {
        name: "Loungewear",
        image: "/placeholder.svg?height=200&width=200",
        href: "#loungewear",
    },
];

export default function CategoryGrid() {
    return (
        <section className="py-12 px-4 md:py-16">
            <div className="container">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group flex flex-col items-center text-center gap-3"
                        >
                            <div className="relative w-full aspect-square overflow-hidden rounded-full border bg-muted/20 transition-all group-hover:scale-105">
                                <Image
                                    src={category.image || "/placeholder.svg"}
                                    alt={category.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                                />
                            </div>
                            <span className="text-sm font-medium">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
