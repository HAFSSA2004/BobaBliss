"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} text-center mb-16`}>
          <p className="text-accent text-lg font-medium mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Visit Boba Bliss Today</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map and Address */}
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} space-y-6`}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601!3d40.7127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3855555%3A0xe80efd3ca2e1b90!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="bg-card rounded-2xl shadow-md p-8 space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Pearl Street, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground">(212) 555-0123</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@bobabliss.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links and Hours */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} space-y-8`}>
            <div className="bg-card rounded-2xl shadow-md p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Follow Our Journey</h3>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all text-accent"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all text-accent"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all text-accent"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Hours of Operation</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-foreground">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}
