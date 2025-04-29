"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-black text-white py-2 px-4 text-center text-sm">
      <p>Use WELCOME10 to get 10% off on your 1st order</p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
        aria-label="Close promotion"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
