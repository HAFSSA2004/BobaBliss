"use client"

import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { CartProvider } from "@/hooks/use-cart" // ✅ Make sure path is correct

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* ✅ Wrap the entire app with CartProvider */}
        <CartProvider>
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
