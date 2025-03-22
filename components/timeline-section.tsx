"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type TimelineEvent = {
  year: string
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1906",
    title: "Joined Indian National Congress",
    description:
      "Began his political career by joining the Indian National Congress, advocating for Hindu-Muslim unity.",
  },
  {
    year: "1913",
    title: "Joined Muslim League",
    description:
      "Became a member of the All-India Muslim League while still working with the Congress, hoping to bring the two parties closer.",
  },
  {
    year: "1916",
    title: "Lucknow Pact",
    description:
      "Instrumental in the Lucknow Pact between the Congress and the Muslim League, earning him the title 'Ambassador of Hindu-Muslim Unity'.",
  },
  {
    year: "1920",
    title: "Left Congress",
    description: "Resigned from the Congress due to growing differences with Gandhi's non-cooperation movement.",
  },
  {
    year: "1934",
    title: "Return to Muslim League",
    description: "Returned to active politics as the president of the Muslim League after a period in England.",
  },
  {
    year: "1940",
    title: "Lahore Resolution",
    description:
      "Presided over the historic session where the Lahore Resolution (Pakistan Resolution) was passed, formally demanding a separate Muslim state.",
  },
  {
    year: "1947",
    title: "Creation of Pakistan",
    description:
      "Led the Muslim League to success in creating Pakistan and became its first Governor-General on August 14, 1947.",
  },
  {
    year: "1948",
    title: "Passing",
    description:
      "Passed away on September 11, 1948, just thirteen months after Pakistan's independence, leaving behind a lasting legacy.",
  },
]

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
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
    <section id="timeline" ref={sectionRef} className="py-16 md:py-20 bg-emerald-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-emerald-800 text-center mb-10 md:mb-16 relative">
          <span className="relative z-10">Historical Timeline</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-emerald-500"></span>
        </h2>

        {/* Mobile Timeline (vertical) */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-emerald-300"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={cn(
                  "pl-12 relative transition-all duration-500",
                  isVisible ? "opacity-100" : "opacity-0",
                  isVisible ? `delay-${index * 100}` : "",
                )}
              >
                {/* Year bubble */}
                <div className="absolute left-0 w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  {event.year}
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-serif font-bold text-emerald-700">{event.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline (alternating) */}
        <div
          className={cn(
            "relative hidden md:block transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-300"></div>

          {/* Timeline events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={cn(
                  "mb-12 flex items-center transition-all duration-500",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                  isVisible ? "opacity-100" : "opacity-0",
                  isVisible ? `delay-${index * 100}` : "",
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Content */}
                <div
                  className={cn(
                    "w-5/12 px-4 py-6 bg-white rounded-lg shadow-lg transition-all duration-300",
                    activeIndex === index ? "transform scale-105" : "",
                  )}
                >
                  <h3 className="text-xl font-serif font-bold text-emerald-700">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>

                {/* Year bubble */}
                <div className="w-2/12 flex justify-center">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold transition-all duration-300",
                      activeIndex === index ? "transform scale-110 bg-emerald-700" : "",
                    )}
                  >
                    {event.year}
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

