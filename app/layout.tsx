import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Roqvue.space - Advanced Space Technology",
  description:
    "Developing cutting-edge rockets, drone ships, and satellites for ISP services. Join us in pioneering the future of space exploration.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
