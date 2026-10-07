import type React from "react"
import type { Metadata } from "next"
import { Public_Sans } from "next/font/google"
import "./globals.css"

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "AxellaCoin - Fund Life-Saving Medical Research With Cryptocurrency",
  description: "Fund medical research one trial at a time. Capital is released only as milestones are verified, and ecosera runs the trials.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>{children}</body>
    </html>
  )
}
