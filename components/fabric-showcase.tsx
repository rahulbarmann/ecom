"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fabrics = [
  {
    id: "cotton",
    name: "Premium Cotton",
    description:
      "Breathable, soft, and perfect for everyday wear. Our premium cotton is sourced from the finest mills.",
    image: "/placeholder.svg?height=600&width=800",
    colors: ["#FFFFFF", "#B7C4CF", "#E8D2A0", "#86A789", "#4F709C"],
  },
  {
    id: "linen",
    name: "Pure Linen",
    description: "Lightweight and airy, our linen fabrics are perfect for warm weather and casual elegance.",
    image: "/placeholder.svg?height=600&width=800",
    colors: ["#F5F5DC", "#D7C0AE", "#967E76", "#EEE3CB", "#B7C4CF"],
  },
  {
    id: "silk",
    name: "Luxury Silk",
    description:
      "Smooth, lustrous, and exceptionally comfortable. Our silk fabrics add a touch of luxury to any outfit.",
    image: "/placeholder.svg?height=600&width=800",
    colors: ["#F0EAD6", "#DCD7C9", "#2C3639", "#3F4E4F", "#A27B5C"],
  },
]

export default function FabricShowcase() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Exceptional Fabrics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We source the finest materials from around the world to create garments that look and feel extraordinary.
          </p>
        </motion.div>

        <Tabs defaultValue="cotton" className="w-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="md:w-1/2">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {fabrics.map((fabric) => (
                  <TabsTrigger
                    key={fabric.id}
                    value={fabric.id}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none"
                  >
                    {fabric.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {fabrics.map((fabric) => (
                <TabsContent key={fabric.id} value={fabric.id} className="mt-0">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <h3 className="text-2xl font-medium mb-3">{fabric.name}</h3>
                    <p className="text-muted-foreground mb-6">{fabric.description}</p>

                    <div className="mb-8">
                      <h4 className="text-sm font-medium mb-3">Available Colors</h4>
                      <div className="flex gap-3">
                        {fabric.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full transition-all ${
                              selectedColor === color ? "ring-2 ring-offset-2 ring-black" : "hover:scale-110"
                            }`}
                            style={{ backgroundColor: color }}
                            aria-label={`Select ${color} color`}
                          />
                        ))}
                      </div>
                    </div>

                    <Button className="bg-black hover:bg-black/80">Explore {fabric.name} Collection</Button>
                  </motion.div>
                </TabsContent>
              ))}
            </div>

            <div className="md:w-1/2">
              {fabrics.map((fabric) => (
                <TabsContent key={fabric.id} value={fabric.id} className="mt-0 h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl"
                  >
                    <Image
                      src={fabric.image || "/placeholder.svg"}
                      alt={fabric.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
