"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

type QuoteItem = {
  text: string
  context?: string
  year?: string
}

const quotes: QuoteItem[] = [
  {
    text: "With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.",
    context: "Address to the nation",
    year: "1947",
  },
  {
    text: "No nation can rise to the height of glory unless your women are side by side with you.",
    context: "Speech at Muslim University Union, Aligarh",
    year: "1944",
  },
  {
    text: "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.",
    context: "Advice to political workers",
    year: "1943",
  },
  {
    text: "Failure is a word unknown to me.",
    context: "Personal motto",
  },
  {
    text: "There are two powers in the world; one is the sword and the other is the pen. There is a great competition and rivalry between the two. There is a third power stronger than both, that of the women.",
    context: "Speech at Islamia College for Women",
    year: "1940",
  },
  {
    text: "You have to stand guard over the development and maintenance of Islamic democracy, Islamic social justice and the equality of manhood in your own native soil.",
    context: "Address to the officers",
    year: "1948",
  },
]

export default function QuotesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Auto-rotate quotes
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length)
    }, 8000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    // Reset the interval when manually changing quotes
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length)
    }, 8000)
  }

  return (
    <section id="quotes" ref={sectionRef} className="py-20 bg-emerald-800 w-full text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-16 relative">
          <span className="relative z-10">Quotes & Speeches</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-400"></span>
        </h2>

        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          <div className="relative">
            <Quote className="absolute -top-10 -left-10 h-20 w-20 text-emerald-600 opacity-20" />

            <div className="min-h-[300px] flex items-center justify-center">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute w-full transition-all duration-1000",
                    activeIndex === index
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-10 pointer-events-none",
                  )}
                >
                  <p className="text-2xl md:text-3xl font-serif text-center italic mb-8">"{quote.text}"</p>
                  <div className="text-center">
                    {quote.context && (
                      <p className="text-emerald-300 text-lg">
                        {quote.context}
                        {quote.year && ` (${quote.year})`}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12 space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-white scale-125" : "bg-emerald-400 opacity-50 hover:opacity-75",
                  )}
                  aria-label={`View quote ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

