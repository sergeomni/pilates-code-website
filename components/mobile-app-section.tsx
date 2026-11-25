import Link from "next/link"
import {
  Smartphone,
  CalendarCheck,
  BellRing,
  WalletCards,
  ArrowUpRight,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const APP_STORE_URL = "https://apps.apple.com/ru/app/id6788005995"
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=io.fitbase.pilatescodenew&hl=ru"
const RUSTORE_URL =
  "https://www.rustore.ru/catalog/app/io.fitbase.pilatescode"
const WEB_LK_URL = "https://pilatescode.fitbase.io/lk"

export function MobileAppSection() {
  const features = [
    {
      icon: <CalendarCheck className="w-5 h-5" />,
      title: "Запись 24/7 в пару касаний",
      description:
        "Выбирайте свободные окна в мини-группах и отслеживайте актуальное расписание без звонков и переписок.",
    },
    {
      icon: <WalletCards className="w-5 h-5" />,
      title: "Абонементы и остаток занятий",
      description:
        "Вся история посещений, срок действия карты и количество оставшихся тренировок всегда под рукой.",
    },
    {
      icon: <BellRing className="w-5 h-5" />,
      title: "Напоминания и быстрые переносы",
      description:
        "Уведомления о предстоящих визитах в студии и удобное управление записью в едином личном кабинете.",
    },
  ]

  return (
    <section
      id="app"
      className="py-20 sm:py-28 bg-background border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-3xl bg-muted/40 border border-border/80 p-7 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-[0.16em] font-medium mb-5">
                <Smartphone className="w-3.5 h-3.5" />
                Мобильное приложение PILATES CODE
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
                Вся студия PILATES CODE в вашем смартфоне
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl">
                Фирменное приложение студии создано для удобного ритма тренировок: смотрите расписание, контролируйте абонемент и управляйте записями в любое время.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal h-auto py-3.5 px-4 rounded-xl shadow-sm justify-between"
                >
                  <Link
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-left">
                      <span className="block text-[11px] opacity-80 font-light">
                        Скачать в
                      </span>
                      <span className="block text-sm font-medium">
                        App Store
                      </span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/35 bg-background hover:bg-primary/5 text-foreground font-normal h-auto py-3.5 px-4 rounded-xl justify-between"
                >
                  <Link
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-left">
                      <span className="block text-[11px] text-muted-foreground font-light">
                        Доступно в
                      </span>
                      <span className="block text-sm font-medium">
                        Google Play
                      </span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-primary flex-shrink-0" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/35 bg-background hover:bg-primary/5 text-foreground font-normal h-auto py-3.5 px-4 rounded-xl justify-between"
                >
                  <Link
                    href={RUSTORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-left">
                      <span className="block text-[11px] text-muted-foreground font-light">
                        Установить из
                      </span>
                      <span className="block text-sm font-medium">
                        RuStore
                      </span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-primary flex-shrink-0" />
                  </Link>
                </Button>
              </div>

              <div className="pt-5 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-muted-foreground font-light">
                <span>
                  Предпочитаете открыть в браузере без установки?
                </span>
                <Link
                  href={WEB_LK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline underline-offset-4"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Войти в веб-кабинет
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-background border border-border/80 p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-medium text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection