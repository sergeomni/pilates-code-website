import { Button } from "@/components/ui/button"
import { Calendar, Send } from "lucide-react"
import Link from "next/link"

const FITBASE_GROUP_URL =
  "https://pilatescode.fitbase.io/schedule-fitbase-widget?club=1"

const TELEGRAM_CONCIERGE_URL = `https://t.me/pilatescode_spb?text=${encodeURIComponent(
  "Здравствуйте! Изучил(а) программы на сайте PILATES CODE — помогите подобрать подходящий формат и специалиста."
)}`

export function MainOfferSection() {
  return (
    <section className="py-20 sm:py-28 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-muted/40 border border-border/80 px-6 py-12 sm:px-12 sm:py-16 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Персональный подбор
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight max-w-3xl mx-auto">
            Не уверены, какой формат или специалиста выбрать?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Напишите нам в Telegram — администратор за пару минут уточнит ваши цели, порекомендует оптимальный старт и подберёт удобное окно на ближайшую неделю.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal px-8 py-6 text-base rounded-lg shadow-sm"
            >
              <Link
                href={TELEGRAM_CONCIERGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5"
              >
                <Send className="w-4 h-4" />
                Подобрать программу в Telegram
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 text-foreground hover:bg-primary/5 font-normal px-8 py-6 text-base rounded-lg bg-background"
            >
              <Link
                href={FITBASE_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-primary" />
                Открыть расписание мини-групп
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}