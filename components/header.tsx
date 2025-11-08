"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">🧋 Boba Bliss</h1>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Order Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a
              href="#menu"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#testimonials"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Order Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
