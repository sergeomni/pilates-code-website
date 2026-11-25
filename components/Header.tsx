"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Calendar, Send } from "lucide-react"
import Link from "next/link"

const FITBASE_GROUP_URL =
  "https://pilatescode.fitbase.io/schedule-fitbase-widget?club=1"

const TELEGRAM_DIAGNOSTIC_URL = `https://t.me/pilatescode_spb?text=${encodeURIComponent(
  "Здравствуйте! Хочу записаться на персональную вводную диагностику в PILATES CODE."
)}`

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
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
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-md border-b border-black/5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" aria-label="PILATES CODE - На главную">
              <img
                src="/logo.svg"
                alt="PILATES CODE Logo"
                className="h-11 md:h-14 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-light text-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 xl:space-x-5">
            <div className="hidden 2xl:flex items-center space-x-1.5 text-sm text-foreground whitespace-nowrap">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="tel:+79006269040"
                className="font-light hover:text-primary transition-colors"
              >
                +7 900 626 90 40
              </a>
            </div>

            <Link
              href={FITBASE_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-normal text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-primary" />
              Мини-группы
            </Link>

            <Button
              asChild
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-normal px-5 text-sm whitespace-nowrap"
            >
              <Link
                href={TELEGRAM_DIAGNOSTIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Записаться на диагностику
              </Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-light text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 pb-2 border-t border-border space-y-3">
                <div className="flex items-center space-x-2 text-foreground mb-2 text-lg">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+79006269040" className="font-light">
                    +7 900 626 90 40
                  </a>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-normal text-base py-6"
                >
                  <Link
                    href={TELEGRAM_DIAGNOSTIC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Записаться на диагностику
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/40 text-foreground hover:bg-primary/5 font-normal text-base py-6"
                >
                  <Link
                    href={FITBASE_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-primary" />
                    Расписание мини-групп
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