import type { Metadata } from "next"
import { Jost, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const jost = Jost({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans",
})

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "PILATES CODE",
  description: "Расшифруй Код Своего Тела",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${jost.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}