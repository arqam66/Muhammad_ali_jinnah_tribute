"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800 pt-16">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div
        className={cn(
          "container mx-auto px-4 z-20 text-center transition-all duration-1000 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        <div className="mb-6 md:mb-8 relative w-36 h-36 sm:w-40 sm:h-40 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl mt-0">
          {/* Using the provided Jinnah portrait */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jinnah1945c.jpg-mWtiE6uD8BOdoP50UhEudukoYIzcTT.jpeg"
            alt="Muhammad Ali Jinnah"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6">
          Muhammad Ali Jinnah
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white font-serif italic max-w-3xl mx-auto mb-6 md:mb-8 px-2">
          "With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white/80 font-serif mb-8 md:mb-12">
          Founder of Pakistan | 1876 - 1948
        </p>
        <a
          href="#about"
          className="inline-flex items-center justify-center animate-bounce bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
          aria-label="Scroll down to learn more"
        >
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </a>
      </div>
    </section>
  )
}

