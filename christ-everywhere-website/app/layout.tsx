import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Christ Everywhere - AI-First Christian Community Platform",
  description:
    "Christ Everywhere: Your private ecosystem for faith, fellowship, and growth. AI-powered Christian community platform for churches, families, and organizations. Secure, accessible, and built on biblical foundations.",
  keywords:
    "Christian community platform, faith-based social network, church management software, AI-powered moderation, Bible study tools, prayer wall, video meetings, secure messaging, Christ Everywhere",
  generator: "v0.app",
  openGraph: {
    title: "Christ Everywhere - AI-First Christian Community Platform",
    description:
      "Build vibrant faith communities with Christ Everywhere - the secure, AI-powered platform for churches, families, and Christian organizations.",
    type: "website",
    url: "https://christeverywhere.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christ Everywhere - Christian Community Platform",
    description: "Your private ecosystem for faith, fellowship, and growth. AI-powered Christian community platform.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
