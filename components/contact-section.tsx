import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send, Calendar, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const FITBASE_GROUP_URL =
  "https://pilatescode.fitbase.io/schedule-fitbase-widget?club=1"

const TELEGRAM_CHAT_URL = `https://t.me/pilatescode_spb?text=${encodeURIComponent(
  "Здравствуйте! Хочу уточнить детали и записаться на тренировку в PILATES CODE."
)}`

const YANDEX_MAPS_ROUTE_URL =
  "https://yandex.ru/maps/org/151849222797/"

export function ContactSection() {
  return (
    <section
      id="contacts"
      className="py-20 sm:py-28 bg-background border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Локация и связь
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
            Контакты студии
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Будем рады видеть вас в PILATES CODE на Васильевском острове.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl border border-border/80 bg-background overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Левая колонка: контактные данные и действия */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-muted/20">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-foreground mb-2">
                  PILATES CODE
                </h3>
                <p className="text-sm text-muted-foreground font-light mb-8">
                  Студия пилатеса «КОД ПИЛАТЕСА»
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base text-foreground font-normal leading-snug">
                        Санкт-Петербург, ул. Кораблестроителей, д. 30, пом. 175
                      </div>
                      <div className="text-sm text-muted-foreground font-light mt-0.5">
                        Васильевский остров · м. Приморская
                      </div>
                      <Link
                        href={YANDEX_MAPS_ROUTE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline underline-offset-4 mt-2"
                      >
                        Построить маршрут в Яндекс Картах
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-0.5">
                        Telegram (быстрая связь и запись)
                      </div>
                      <Link
                        href={TELEGRAM_CHAT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-foreground hover:text-primary transition-colors font-normal"
                      >
                        @pilatescode_spb
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-0.5">
                        Телефон
                      </div>
                      <a
                        href="tel:+79006269040"
                        className="text-base text-foreground hover:text-primary transition-colors font-normal"
                      >
                        +7 900 626 90 40
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-0.5">
                        Почта
                      </div>
                      <a
                        href="mailto:pilatescodespb@gmail.com"
                        className="text-base text-foreground hover:text-primary transition-colors font-normal"
                      >
                        pilatescodespb@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-border/60 space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-normal py-6 text-sm sm:text-base rounded-lg"
                >
                  <Link
                    href={TELEGRAM_CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Написать в Telegram
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/40 text-foreground hover:bg-primary/5 font-normal py-6 text-sm sm:text-base rounded-lg bg-background"
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
            </div>

            {/* Правая колонка: карта */}
            <div className="lg:col-span-7 bg-muted min-h-[380px] lg:min-h-[540px] w-full">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=15&ol=biz&oid=151849222797"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                loading="lazy"
                title="Карта проезда к студии PILATES CODE"
                className="border-none w-full h-full min-h-[380px] lg:min-h-[540px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}