import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })
const ibmPlexMono = IBM_Plex_Mono({ weight: ["400", "500", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ALTRUS | Building the Open-Source Stack for Assistive Robotics",
  description: "We're a deep-tech startup building four open-source software frameworks that power the next generation of intelligent assistive robots.",
  generator: "v0.app",
  icons: {
    icon: "/logoo.png",
    apple: "/logoo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} font-mono antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
