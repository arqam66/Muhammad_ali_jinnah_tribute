import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TimelineSection from "@/components/timeline-section"
import LegacySection from "@/components/legacy-section"
import QuotesSection from "@/components/quotes-section"
import FactsSection from "@/components/facts-section"
import GuestbookSection from "@/components/guestbook-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <LegacySection />
      <QuotesSection />
      <FactsSection />
      <GuestbookSection />
      <Footer />
    </main>
  )
}

