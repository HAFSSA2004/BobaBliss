"use client"

import { useEffect, useState } from "react"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/bubble-tea-shop-interior-with-warm-cozy-lighting.jpg"
                alt="Boba Bliss shop interior"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} space-y-6`}>
            <div className="space-y-3">
              <p className="text-accent text-lg font-medium">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Crafted with Passion and Fresh Ingredients
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, Boba Bliss was born from a simple passion: to create the perfect bubble tea experience.
                We believe that every cup should be a moment of pure joy.
              </p>
              <p>
                Our commitment to quality means sourcing only the finest ingredients from trusted suppliers. Each pearl,
                each flavor, each drop of milk is carefully selected to ensure you get the best.
              </p>
              <p>
                We're not just serving drinks; we're creating memories. Whether you're studying, meeting friends, or
                taking a moment for yourself, Boba Bliss is your sanctuary of calm and comfort.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-accent/10 to-transparent p-4 rounded-2xl">
                <p className="text-3xl font-bold text-primary mb-1">5+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-transparent p-4 rounded-2xl">
                <p className="text-3xl font-bold text-primary mb-1">10K+</p>
                <p className="text-sm text-muted-foreground">Cups Served Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
