"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 text-white p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-neutral-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-neutral-800 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join Our Community</h2>
              <p className="text-neutral-300 mb-8">
                Subscribe to receive updates on new collections, exclusive offers, and styling tips.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400"
                  />
                  <Button type="submit" className="bg-white text-black hover:bg-white/90">
                    Subscribe
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 bg-white/10 py-3 px-4 rounded-md max-w-md mx-auto"
                >
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Thank you for subscribing!</span>
                </motion.div>
              )}

              <p className="text-xs text-neutral-400 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
