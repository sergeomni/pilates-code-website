import { Compass, Layers, ShieldCheck } from "lucide-react"

export function SolutionSection() {
  const pillars = [
    {
      icon: Compass,
      label: "К — Контроль и диагностика",
      title: "Индивидуальная биомеханика",
      description:
        "Начинаем не с шаблонных упражнений, а с анализа вашей осанки, подвижности суставов и паттернов движения. Программа собирается строго под особенности вашего тела.",
    },
    {
      icon: Layers,
      label: "О — Оборудование",
      title: "Точность большого оборудования",
      description:
        "Реформеры и профессиональные тренажёры работают с сопротивлением пружин: они одновременно поддерживают тело в сложной амплитуде и глубоко включают мышцы-стабилизаторы.",
    },
    {
      icon: ShieldCheck,
      label: "Д — Движение и дыхание",
      title: "Осознанный и устойчивый результат",
      description:
        "Синхронизация дыхания с каждым движением снимает лишнее напряжение с шеи и поясницы. Вы не просто «отрабатываете час», а переучиваете тело двигаться легко в обычной жизни.",
    },
  ]

  return (
    <section id="system" className="py-20 sm:py-28 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Система «КОД»
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
            Бюро архитектуры вашего тела
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Вместо хаотичных нагрузок — выверенная методика на стыке классического пилатеса и современной биомеханики.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.label}
                className="flex flex-col p-7 sm:p-8 rounded-2xl bg-muted/30 border border-border/60"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-wider text-primary font-medium mb-2">
                  {pillar.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-border/60 text-center">
          <p className="text-base sm:text-lg text-foreground/80 font-light">
            Камерный формат студии: максимум внимания тренера,{" "}
            <span className="font-normal text-foreground">
              без потоковых групп и случайных нагрузок
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  )
}