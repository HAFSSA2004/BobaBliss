"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/aesthetic-bubble-tea-drink-with-boba-pearls-in-gla.jpg"
                alt="Premium bubble tea with boba pearls"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} space-y-6`}>
            <div className="space-y-3">
              <p className="text-accent text-lg font-medium">Welcome to Boba Bliss</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Experience Pure Bubble Tea Bliss
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Handcrafted bubble tea made with premium ingredients and love. Each sip is a journey of flavor and
                comfort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToMenu}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Order Now
              </button>
              
            </div>

            <div className="flex gap-8 pt-6">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Customers Daily</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Fresh Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
