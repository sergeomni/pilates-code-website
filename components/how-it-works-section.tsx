import { Button } from "@/components/ui/button"
import { Calendar, Send } from "lucide-react"
import Link from "next/link"

const FITBASE_GROUP_URL =
  "https://pilatescode.fitbase.io/schedule-fitbase-widget?club=1"

const TELEGRAM_PERSONAL_URL = `https://t.me/pilatescode_spb?text=${encodeURIComponent(
  "Здравствуйте! Хочу подобрать удобное время для вводного персонального занятия в PILATES CODE."
)}`

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      tag: "Выбор формата",
      title: "Старт под вашу задачу",
      description:
        "Начните с персональной вводной диагностики (если есть боли, травмы или хочется 100% внимания тренера) либо запишитесь напрямую на пробную тренировку в камерной мини-группе на реформерах.",
    },
    {
      number: "02",
      tag: "Первая практика",
      title: "Знакомство с оборудованием",
      description:
        "Оцениваем осанку, подвижность суставов и паттерны дыхания. Тренер настраивает пружины реформера под ваши параметры, чтобы первое занятие прошло точно, бережно и без перегрузок.",
    },
    {
      number: "03",
      tag: "Прогрессия",
      title: "Системный маршрут",
      description:
        "Выстраиваем комфортный график тренировок с постепенным усложнением нагрузки. Отслеживаем изменения в самочувствии и закрепляем лёгкость движения в обычной жизни.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-muted/40 border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Маршрут в студии
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
            Как начинается работа с вашим телом
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Понятный и безопасный вход в практику — даже если вы никогда раньше не занимались на большом оборудовании.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col bg-background border border-border/80 rounded-2xl p-7 sm:p-8"
            >
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-border/60">
                <span className="text-3xl sm:text-4xl font-serif font-medium text-primary">
                  {step.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {step.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Двухпоточный CTA */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal px-7 py-6 text-base rounded-lg shadow-sm"
            >
              <Link
                href={TELEGRAM_PERSONAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5"
              >
                <Send className="w-4 h-4" />
                Подобрать персональную в Telegram
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 text-foreground hover:bg-primary/5 font-normal px-7 py-6 text-base rounded-lg bg-background"
            >
              <Link
                href={FITBASE_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-primary" />
                Расписание мини-групп онлайн
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-light">
            Мини-группы бронируются мгновенно в расписании · Персональные слоты подбирает администратор в чате (или онлайн через наше приложение)
          </p>
        </div>
      </div>
    </section>
  )
}