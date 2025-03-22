"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type GuestbookEntry = {
  id: number
  name: string
  message: string
  date: string
}

// Sample entries
const initialEntries: GuestbookEntry[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    message:
      "Jinnah's vision for Pakistan continues to inspire generations. This tribute beautifully captures his legacy.",
    date: "2023-05-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    message:
      "As a history student, I find Jinnah's leadership during the partition fascinating. Thank you for this informative tribute.",
    date: "2023-06-22",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    message:
      "A great statesman whose contributions to South Asian history cannot be overstated. This website does justice to his memory.",
    date: "2023-07-10",
  },
]

export default function GuestbookSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="guestbook" ref={sectionRef} className="py-20 bg-emerald-800 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-16 relative">
          <span className="relative z-10">Tributes</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-400"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div
            className={cn(
              "space-y-4 transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            {initialEntries.map((entry) => (
              <div key={entry.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-l-4 border-emerald-400">
                <p className="text-white/90 italic mb-2">"{entry.message}"</p>
                <div className="flex justify-between items-center">
                  <p className="text-emerald-300 font-semibold">{entry.name}</p>
                  <p className="text-white/60 text-sm">{entry.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

