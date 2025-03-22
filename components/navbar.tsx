"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Simple toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

    // Toggle body scroll
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // Close menu only
  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <>
      {/* Fixed navbar */}
      <header className="fixed top-0 left-0 w-full bg-emerald-800 z-40 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Title */}
            <a href="#top" className="text-white font-serif text-xl md:text-2xl font-bold" onClick={closeMenu}>
              Jinnah Tribute
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-white hover:text-emerald-300 px-3 py-2">
                About
              </a>
              <a href="#timeline" className="text-white hover:text-emerald-300 px-3 py-2">
                Timeline
              </a>
              <a href="#legacy" className="text-white hover:text-emerald-300 px-3 py-2">
                Legacy
              </a>
              <a href="#quotes" className="text-white hover:text-emerald-300 px-3 py-2">
                Quotes
              </a>
              <a href="#facts" className="text-white hover:text-emerald-300 px-3 py-2">
                Facts
              </a>
              <a href="#guestbook" className="text-white hover:text-emerald-300 px-3 py-2">
                Tributes
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-emerald-800 z-50 flex flex-col items-center justify-center md:hidden">
          {/* Close button */}
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white p-2" aria-label="Close menu">
            <X size={24} />
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 w-full px-6">
            <a
              href="#about"
              className="w-full text-white text-xl py-4 px-6 rounded-md hover:bg-emerald-700 active:bg-emerald-600 text-center"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#timeline"
              className="w-full text-white text-xl py-4 px-6 rounded-md hover:bg-emerald-700 active:bg-emerald-600 text-center"
              onClick={closeMenu}
            >
              Timeline
            </a>
            <a
              href="#legacy"
              className="w-full text-white text-xl py-4 px-6 rounded-md hover:bg-emerald-700 active:bg-emerald-600 text-center"
              onClick={closeMenu}
            >
              Legacy
            </a>
            <a
              href="#quotes"
              className="w-full text-white text-xl py-4 px-6 rounded-md hover:bg-emerald-700 active:bg-emerald-600 text-center"
              onClick={closeMenu}
            >
              Quotes
            </a>
            <a
              href="#facts"
              className="w-full text-white text-xl py-4 px-6 rounded-md hover:bg-emerald-700 active:bg-emerald-600 text-center"
              onClick={closeMenu}
            >
              Facts
            </a>
            <a
              href="#guestbook"
              className="w-full text-white text-xl py-4 px-6 rounded-md hover:bg-emerald-700 active:bg-emerald-600 text-center"
              onClick={closeMenu}
            >
              Tributes
            </a>
          </nav>
        </div>
      )}

      {/* Spacer to push content below fixed navbar */}
      <div className="h-16" id="top"></div>
    </>
  )
}

