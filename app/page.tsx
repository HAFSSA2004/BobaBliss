"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Menu from "@/components/menu"
import AboutUs from "@/components/about-us"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Menu />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
