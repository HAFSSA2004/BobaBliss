"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Student",
    content: "The best bubble tea I've ever had! The brown sugar boba is perfectly chewy and the tea is so smooth.",
    rating: 5,
    image: "/smiling-woman-avatar.png",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Coffee Enthusiast",
    content: "Boba Bliss completely changed my perspective on bubble tea. Highly recommend their matcha latte!",
    rating: 5,
    image: "/smiling-man-avatar.png",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Foodie",
    content: "The ambiance is so calming and the staff is incredibly friendly. It's my go-to spot now!",
    rating: 5,
    image: "/smiling-woman-with-glasses-avatar.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Regular Customer",
    content: "Fresh ingredients really make a difference. This is the only place I order my bubble tea from.",
    rating: 5,
    image: "/smiling-man-with-beard-avatar.jpg",
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} text-center mb-16`}>
          <p className="text-accent text-lg font-medium mb-2">What Our Customers Say</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Love from Our Boba Bliss Family
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl shadow-md hover:shadow-lg transition-all p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
