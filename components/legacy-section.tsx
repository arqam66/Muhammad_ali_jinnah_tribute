"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Award, BookOpen, Scale } from "lucide-react"
import { cn } from "@/lib/utils"

type LegacyItem = {
  icon: React.ReactNode
  title: string
  description: string
  quote?: {
    text: string
    author: string
    role: string
  }
}

const legacyItems: LegacyItem[] = [
  {
    icon: <Scale className="h-10 w-10 text-emerald-600" />,
    title: "Constitutional Legacy",
    description:
      "Jinnah's commitment to constitutionalism and rule of law shaped Pakistan's early governance. His vision was for Pakistan to be a democratic state with equal rights for all citizens regardless of faith, caste, or creed.",
    quote: {
      text: "Jinnah's constitutional ideals remain a guiding light for Pakistan.",
      author: "Lord Mountbatten",
      role: "Last Viceroy of India",
    },
  },
  {
    icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
    title: "Advocacy for Education",
    description:
      "Jinnah emphasized the importance of education, particularly for women. He believed that education was essential for the progress and development of the new nation.",
    quote: {
      text: "Education is a matter of life and death to our nation.",
      author: "Muhammad Ali Jinnah",
      role: "In his speech at Islamia College",
    },
  },
  {
    icon: <Award className="h-10 w-10 text-emerald-600" />,
    title: "Minority Rights",
    description:
      "Jinnah advocated strongly for the protection of minority rights. In his first presidential address to the Constituent Assembly of Pakistan, he emphasized that people of all religions would be equal citizens in the new state.",
    quote: {
      text: "Jinnah's vision of a secular state with equal rights for minorities was revolutionary for its time.",
      author: "Stanley Wolpert",
      role: "American historian",
    },
  },
]

export default function LegacySection() {
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
    <section id="legacy" ref={sectionRef} className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 text-center mb-16 relative">
          <span className="relative z-10">Jinnah's Legacy</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {legacyItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-lg shadow-lg p-6 border-t-4 border-emerald-500 transition-all duration-1000 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                isVisible ? `delay-${index * 200}` : "",
              )}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold text-emerald-700 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>

              {item.quote && (
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                  <p className="italic text-gray-700 mb-2">"{item.quote.text}"</p>
                  <p className="text-sm text-emerald-700 font-semibold">{item.quote.author}</p>
                  <p className="text-xs text-gray-500">{item.quote.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

