import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Libra Growth Labs",
  description: "Built for entrepreneurs, by an entrepreneur",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-mont">{children}</body>
    </html>
  )
}
