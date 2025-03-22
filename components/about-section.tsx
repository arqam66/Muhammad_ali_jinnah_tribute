"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 text-center mb-16 relative">
          <span className="relative z-10">About Jinnah</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
            )}
          >
            {/* Using the provided young Jinnah photo from 1910 */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohammad_Ali_Jinnah%2C_1910.jpg-gU0O14wu2HMebrkKda6a19sehb6fhw.jpeg"
              alt="Young Muhammad Ali Jinnah, 1910"
              width={500}
              height={600}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div
            className={cn(
              "space-y-6 transition-all duration-1000 delay-300 transform",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
            )}
          >
            <h3 className="text-2xl font-serif font-semibold text-emerald-700">Early Life & Education</h3>
            <p className="text-gray-700 leading-relaxed">
              Born on December 25, 1876, in Karachi, Muhammad Ali Jinnah came from a prosperous merchant family. He
              received his early education in Karachi and later went to London to study law at Lincoln's Inn, becoming
              the youngest Indian to be called to the bar in England at age 18.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-emerald-700 pt-4">Legal & Political Career</h3>
            <p className="text-gray-700 leading-relaxed">
              Returning to India in 1896, Jinnah established himself as a brilliant lawyer. His political journey began
              when he joined the Indian National Congress in 1906. Initially an advocate for Hindu-Muslim unity, his
              political philosophy evolved as he recognized the need for a separate Muslim state.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-emerald-700 pt-4">The Pakistan Movement</h3>
            <p className="text-gray-700 leading-relaxed">
              As the leader of the All-India Muslim League, Jinnah articulated the Two-Nation Theory, which became the
              foundation of the Pakistan Movement. His determined leadership and political acumen led to the creation of
              Pakistan on August 14, 1947, earning him the title "Quaid-e-Azam" (Great Leader).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

