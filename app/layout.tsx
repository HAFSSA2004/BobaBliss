import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boba Bliss', // your website name
  description: 'Bubble tea shop website',
  generator: undefined, // remove V0 reference
  applicationName: 'Boba Bliss', // optional
  icons: undefined, // remove all icons completely
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
