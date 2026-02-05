import React from "react"
import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const dmSerif = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif'
})

export const metadata: Metadata = {
  title: 'PureCompound Pharmacy | Personalized Compounding Solutions',
  description: 'Custom compounded medications tailored to your unique health needs. Specializing in hormone therapy, dermatology, pain management, and wellness.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
