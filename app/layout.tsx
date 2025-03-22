import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jinnah Tribute",
  description: "A tribute website dedicated to Muhammad Ali Jinnah, the founder of Pakistan.",
  keywords: "Muhammad Ali Jinnah, Quaid-e-Azam, Pakistan, founder of Pakistan, Pakistan Movement, Jinnah legacy",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saj-shafique-OAQ9Ss5mAz8-unsplash.jpg-f8Srf8k0rtaAJEdZOZprrS9DKLAyAz.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saj-shafique-OAQ9Ss5mAz8-unsplash.jpg-f8Srf8k0rtaAJEdZOZprrS9DKLAyAz.jpeg",
        type: "image/jpeg",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Jinnah Tribute</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'