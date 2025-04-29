import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4">
                            Shop
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Shirts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Pants
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Jackets
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Sale
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4">
                            About
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Craftsmanship
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4">
                            Customer Service
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Size Guide
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    Store Locator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4">
                            Connect
                        </h3>
                        <div className="flex gap-4 mb-6">
                            <Link
                                href="#"
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>

                        <h3 className="font-serif text-lg font-bold mb-4">
                            Payment Methods
                        </h3>
                        <div className="flex gap-2 flex-wrap">
                            <div className="w-10 h-6 bg-white/10 rounded"></div>
                            <div className="w-10 h-6 bg-white/10 rounded"></div>
                            <div className="w-10 h-6 bg-white/10 rounded"></div>
                            <div className="w-10 h-6 bg-white/10 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-400 text-sm">
                        © 2023 Company. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-neutral-400 hover:text-white text-sm transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-neutral-400 hover:text-white text-sm transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-neutral-400 hover:text-white text-sm transition-colors"
                        >
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
