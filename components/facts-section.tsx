"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

type FactItem = {
  title: string
  description: string
}

const factItems: FactItem[] = [
  {
    title: "Multilingual Abilities",
    description:
      "Jinnah was fluent in several languages including English, Urdu, Gujarati, and could understand Hindi. His speeches were primarily delivered in English.",
  },
  {
    title: "Sartorial Elegance",
    description:
      "Known for his impeccable dress sense, Jinnah owned over 200 suits, which were mostly tailored in London. He was often referred to as one of the best-dressed men in the British Empire.",
  },
  {
    title: "Legal Brilliance",
    description:
      "As a lawyer, Jinnah never lost a case in the early years of his practice, earning him the reputation of being a brilliant legal mind.",
  },
  {
    title: "Personal Library",
    description:
      "Jinnah maintained an extensive personal library with thousands of books, reflecting his love for literature and knowledge.",
  },
  {
    title: "Interfaith Marriage",
    description:
      "Jinnah married Rattanbai 'Ruttie' Petit, a Parsi woman who was 24 years younger than him. Their interfaith marriage was quite controversial at the time.",
  },
  {
    title: "Reluctant Politician",
    description:
      "Initially, Jinnah was reluctant to enter politics and preferred his legal career. He was persuaded to join the political movement by senior leaders who recognized his potential.",
  },
]

export default function FactsSection() {
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
    <section id="facts" ref={sectionRef} className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 text-center mb-16 relative">
          <span className="relative z-10">Lesser-Known Facts</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factItems.map((fact, index) => (
            <div
              key={index}
              className={cn(
                "bg-emerald-50 rounded-lg p-6 border-b-4 border-emerald-500 transition-all duration-1000 transform hover:shadow-lg",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                isVisible ? `delay-${index * 100}` : "",
              )}
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-emerald-600 mr-2" />
                <h3 className="text-xl font-serif font-bold text-emerald-700">{fact.title}</h3>
              </div>
              <p className="text-gray-700">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

