import { Check, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const TELEGRAM_CONSULT_URL = `https://t.me/pilatescode_spb?text=${encodeURIComponent(
  "Здравствуйте! Подскажите, пожалуйста, с какого формата лучше начать занятия в PILATES CODE?"
)}`

export function BenefitsSection() {
  const outcomes = [
    {
      title: "Свобода в спине, шее и плечах",
      description:
        "Проходит привычное чувство тяжести к концу рабочего дня. Позвоночник получает необходимую подвижность и поддержку за счёт глубоких мышц-стабилизаторов.",
    },
    {
      title: "Выстроенная осанка и лёгкая походка",
      description:
        "Плечи расправляются естественно, без необходимости постоянно «контролировать спину». Движения становятся собранными, плавными и экономичными.",
    },
    {
      title: "Подтянутый силуэт без перегрузки суставов",
      description:
        "Мышцы кора, спины и ног приходят в устойчивый тонус без ударной нагрузки, изматывающего кардио и риска травм.",
    },
    {
      title: "Ясная голова и восстановление ресурса",
      description:
        "Концентрация на дыхании и точности каждого движения переключает нервную систему — после тренировки остаётся ощущение энергии, а не усталости.",
    },
  ]

  return (
    <section
      id="benefits"
      className="py-20 sm:py-28 bg-background border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Левая колонка */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
              Эффект системности
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
              Что меняется после регулярных занятий
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Пилатес на реформерах работает накопительно: вы начинаете чувствовать опору и контроль не только в зале, но и в каждом движении дня.
            </p>

            <div className="p-6 rounded-2xl bg-muted/40 border border-border/70 space-y-4">
              <p className="text-sm sm:text-base text-foreground/90 font-light leading-relaxed">
                Оптимальный ритм для заметной перестройки осанки и мышечного тонуса —{" "}
                <span className="font-medium text-foreground">
                  2–3 тренировки в неделю
                </span>{" "}
                в стабильном графике.
              </p>

              <div className="pt-4 border-t border-border/60">
                <p className="text-xs sm:text-sm text-muted-foreground font-light mb-2">
                  Не уверены, с чего начать — с персональной диагностики или мини-группы?
                </p>
                <Link
                  href={TELEGRAM_CONSULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Спросить администратора в Telegram
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="lg:col-span-7 divide-y divide-border/70 border-t border-b border-border/70">
            {outcomes.map((item) => (
              <div
                key={item.title}
                className="py-7 sm:py-8 flex items-start gap-4 sm:gap-5"
              >
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}