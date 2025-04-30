import Link from "next/link";
import { ShoppingCart, Heart, Search, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PromoBar from "@/components/promo-bar";
import CategoryGrid from "@/components/category-grid";
import HeroBanner from "@/components/hero-banner";
import BrandStatement from "@/components/brand-statement";
import FeaturedCollections from "@/components/featured-collections";
import ProductCategories from "@/components/product-categories";
import FabricShowcase from "@/components/fabric-showcase";
import NewsletterSignup from "@/components/newsletter-signup";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <PromoBar />

            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        href="#"
                                        className="hover:text-foreground/80 transition-colors"
                                    >
                                        New Arrivals
                                    </Link>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground/80 transition-colors"
                                    >
                                        Collections
                                    </Link>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground/80 transition-colors"
                                    >
                                        Shirts
                                    </Link>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground/80 transition-colors"
                                    >
                                        Pants
                                    </Link>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground/80 transition-colors"
                                    >
                                        Accessories
                                    </Link>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground/80 transition-colors"
                                    >
                                        Sale
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <nav className="hidden md:flex items-center gap-6">
                            <Link
                                href="#"
                                className="text-sm font-medium hover:text-foreground/80 transition-colors"
                            >
                                New Arrivals
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium hover:text-foreground/80 transition-colors"
                            >
                                Collections
                            </Link>
                        </nav>

                        <div className="relative hidden md:flex items-center">
                            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-[200px] lg:w-[300px] pl-8 rounded-full bg-background"
                            />
                        </div>
                    </div>

                    <Link href="/" className="flex items-center justify-center">
                        <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">
                            RAJEEV FABRICS
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hidden md:flex"
                        >
                            <Search className="h-5 w-5 md:hidden" />
                            <span className="hidden md:block text-sm font-medium">
                                Stores
                            </span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5 md:hidden" />
                            <span className="hidden md:block text-sm font-medium">
                                Wishlist
                            </span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <span className="hidden md:block text-sm font-medium">
                                Account
                            </span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                                0
                            </span>
                            <span className="sr-only">Cart</span>
                        </Button>
                    </div>
                </div>
            </header>

            <CategoryGrid />
            <HeroBanner />
            <BrandStatement />
            <FeaturedCollections />
            <ProductCategories />
            <FabricShowcase />
            <NewsletterSignup />
            <Footer />
        </main>
    );
}
