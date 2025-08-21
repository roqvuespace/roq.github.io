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
  keywords: [
    "space technology",
    "rockets",
    "satellites",
    "drone ships",
    "space ISP",
    "aerospace",
    "space exploration",
    "Roqvue",
  ],
  authors: [{ name: "Roqvue Team", url: "https://roqvue.space" }],
  creator: "Roqvue",
  publisher: "Roqvue",
  openGraph: {
    title: "Roqvue.space - Advanced Space Technology",
    description:
      "Explore how Roqvue is transforming space with rockets, satellites, and cutting-edge ISP services.",
    url: "https://roqvue.space",
    siteName: "Roqvue.space",
    images: [
      {
        url: "/img.png",
        width: 1200,
        height: 630,
        alt: "Roqvue advanced space technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://roqvue.space"),
};


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
