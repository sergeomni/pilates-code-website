import Link from "next/link"

export function Footer() {
  const navLinks = [
    { href: "#system", label: "О системе «КОД»" },
    { href: "#programs", label: "Программы" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacts", label: "Контакты" },
  ]
  const socialLinks = {
    telegram: "https://t.me/pilatescodespb",
    vk: "https://vk.com/pilatescodespb",
  }
  const legalLinks = [
    { href: "/privacy-policy", label: "Политика конфиденциальности" },
    { href: "/oferta", label: "Договор оферты" },
    { href: "/cookie-policy", label: "Политика Cookie" },
  ]

  return (
    <footer id="footer" className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Левая колонка: Лого и Копирайт */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" aria-label="PILATES CODE - На главную">
              <img src="/logo.svg" alt="PILATES CODE Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-foreground/60 pt-4">
              &copy; {new Date().getFullYear()} PILATES CODE. <br />
              Все права защищены.
            </p>
          </div>

          {/* Центральная колонка: Навигация */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Правая колонка: Соцсети */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Мы в соцсетях</h3>
            <div className="flex items-center space-x-4">
              {/* ---> ИЗМЕНЕНИЕ 1: Иконка Telegram заменена на <img> */}
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center text-foreground hover:opacity-80 transition-opacity">
                <img src="/telegram.png" alt="Telegram Icon" className="w-6 h-6" />
              </a>
              {/* ---> ИЗМЕНЕНИЕ 2: Иконка VK заменена на <img> */}
              <a href={socialLinks.vk} target="_blank" rel="noopener noreferrer" aria-label="VKontakte" className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center text-foreground hover:opacity-80 transition-opacity">
                <img src="/vk.png" alt="VKontakte Icon" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Разделитель и юридические ссылки */}
        <hr className="border-foreground/10 my-10" />
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-foreground/60 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* ---> ИЗМЕНЕНИЕ 3: Добавлена необходимая атрибуция для иконок */}
        <div className="text-center text-xs text-foreground/40 mt-8 space-x-4">
          <a href="https://www.flaticon.com/free-icons/vk" title="VK icons" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            VK icon by Fathema Khanom
          </a>
          <a href="https://www.flaticon.com/free-icons/telegram" title="telegram icons" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Telegram icon by Fathema Khanom
          </a>
        </div>
      </div>
    </footer>
  )
}