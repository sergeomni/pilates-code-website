import Link from "next/link"
import { Calendar, Send } from "lucide-react"

const FITBASE_GROUP_URL =
  "https://pilatescode.fitbase.io/schedule-fitbase-widget?club=1"

const TELEGRAM_ADMIN_URL = "https://t.me/pilatescode_spb"
const TELEGRAM_CHANNEL_URL = "https://t.me/pilatescodespb"
const VK_URL = "https://vk.com/pilatescodespb"

export function Footer() {
  const navLinks = [
    { href: "/#system", label: "О системе «КОД»" },
    { href: "/#how-it-works", label: "Как мы работаем" },
    { href: "/#programs", label: "Программы и цены" },
    { href: "/#faq", label: "Частые вопросы" },
    { href: "/#contacts", label: "Контакты" },
  ]

  const legalLinks = [
    { href: "/privacy-policy", label: "Политика конфиденциальности" },
    { href: "/oferta", label: "Договор оферты" },
    { href: "/cookie-policy", label: "Политика Cookie" },
  ]

  return (
    <footer
      id="footer"
      className="bg-secondary/50 text-foreground border-t border-border/70"
    >
      <div className="container mx-auto px-4 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Колонка 1: Бренд */}
          <div className="space-y-4">
            <Link href="/" aria-label="PILATES CODE - На главную" className="inline-block">
              <img
                src="/logo.svg"
                alt="PILATES CODE Logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground/70 font-light leading-relaxed max-w-xs">
              Студия интеллектуального движения и пилатеса на большом оборудовании. Васильевский остров, Санкт-Петербург.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-foreground/60 font-medium mb-4">
              Навигация
            </h3>
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors font-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Колонка 3: Запись */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-foreground/60 font-medium mb-4">
              Запись в студию
            </h3>
            <div className="flex flex-col space-y-3 text-sm font-light">
              <Link
                href={TELEGRAM_ADMIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors"
              >
                <Send className="w-4 h-4 text-primary" />
                Персональные (Telegram)
              </Link>
              <Link
                href={FITBASE_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors"
              >
                <Calendar className="w-4 h-4 text-primary" />
                Мини-группы (онлайн)
              </Link>
              <a
                href="tel:+79006269040"
                className="text-foreground/80 hover:text-primary transition-colors pt-1"
              >
                +7 900 626 90 40
              </a>
              <p className="text-xs text-foreground/60">
                ул. Кораблестроителей, д. 30, пом. 175
              </p>
            </div>
          </div>

          {/* Колонка 4: Соцсети */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-foreground/60 font-medium mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram PILATES CODE"
                className="w-11 h-11 rounded-full bg-background/80 border border-border/80 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21.94 4.66c.29-1.22-.44-1.7-1.24-1.4L2.95 10.1c-1.21.48-1.19 1.17-.22 1.47l4.54 1.42 10.54-6.65c.5-.3.95-.13.58.19l-8.54 7.71-.33 4.7c.47 0 .68-.22.95-.47l2.27-2.2 4.72 3.49c.87.48 1.5.23 1.72-.81l2.76-13.29Z" />
                </svg>
              </a>
              <a
                href={VK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте PILATES CODE"
                className="w-11 h-11 rounded-full bg-background/80 border border-border/80 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708Z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-foreground/60 font-light mt-4 leading-relaxed">
              Новости студии, разборы упражнений и свободные окна на неделю.
            </p>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/60 font-light">
            &copy; {new Date().getFullYear()} PILATES CODE. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-foreground/60 hover:text-primary transition-colors font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}