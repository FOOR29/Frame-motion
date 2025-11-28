import { Metadata } from 'next'
import React from "react"
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Frame motion",
  },
  description: ""
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  )
}