"use client" // <--- ВОТ ЭТА СТРОКА, КОТОРОЙ НЕ ХВАТАЛО

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault()
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: "#system", label: "О системе «КОД»" },
    { href: "#programs", label: "Программы и цены" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacts", label: "Контакты" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          <div className="flex items-center">
            <Link href="/" aria-label="PILATES CODE - На главную">
              <img src="/logo.svg" alt="PILATES CODE Logo" className="h-16 w-auto" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-light text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 text-lg text-foreground">
              <Phone className="w-5 h-5" />
              <a href="tel:+79006269040" className="font-light hover:text-primary transition-colors">
                +7 900 626 90 40
              </a>
            </div>
            <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-light px-8 text-lg">
              <Link href="https://dikidi.net/1632097" target="_blank" rel="noopener noreferrer">
                Записаться онлайн
              </Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-light text-xl"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-border">
                <div className="flex items-center space-x-2 text-foreground mb-3 text-xl">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+79006269040" className="font-light">
                    +7 900 626 90 40
                  </a>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-light text-xl py-6">
                  <Link href="https://dikidi.net/1632097" target="_blank" rel="noopener noreferrer">
                    Записаться онлайн
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}