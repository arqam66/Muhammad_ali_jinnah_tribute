"use client"

import { Facebook, Github, Linkedin, LinkIcon, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-900 text-white py-10 relative">
      {/* Scroll to top button */}
      <a
        href="#top"
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 inline-flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-4">Muhammad Ali Jinnah</h3>
            <p className="text-emerald-200 mb-4">A tribute to the founder of Pakistan and his enduring legacy.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/arqam66"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors p-2"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arqam-hussain-%D8%A7%D8%B1%D9%82%D9%85-%D8%AD%D8%B3%DB%8C%D9%86-1a541a28a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors p-2"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/arqam.tahir.921/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors p-2"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://linktr.ee/arqam4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors p-2"
              >
                <LinkIcon className="h-5 w-5" />
                <span className="sr-only">Linktree</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                About Jinnah
              </a>
              <a
                href="#timeline"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                Historical Timeline
              </a>
              <a
                href="#legacy"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                Jinnah's Legacy
              </a>
              <a
                href="#quotes"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                Quotes & Speeches
              </a>
              <a
                href="#facts"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                Lesser-Known Facts
              </a>
            </nav>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://www.pakistan.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                Government of Pakistan
              </a>
              <a
                href="https://www.na.gov.pk/en/content.php?id=74"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                National Assembly of Pakistan
              </a>
              <a
                href="https://www.dawn.com/news/1437285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                Dawn Archives: Jinnah
              </a>
              <a
                href="https://www.britannica.com/biography/Mohammed-Ali-Jinnah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-200 hover:text-white transition-colors py-2 text-center md:text-left"
              >
                Britannica: Muhammad Ali Jinnah
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-300 text-sm">
          <p>&copy; Muhammad Ali Jinnah Tribute. All rights reserved to Arqam Hussain.</p>
          <p className="mt-2">
            This website is created for educational purposes to honor the legacy of Muhammad Ali Jinnah.
          </p>
        </div>
      </div>
    </footer>
  )
}

