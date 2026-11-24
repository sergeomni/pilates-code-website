export function ProblemSection() {
  const requests = [
    {
      number: "01",
      title: "Напряжение в спине, шее и пояснице",
      description:
        "Сидячая работа, долгие поездки за рулём и накопленный стресс перегружают позвоночник. Убираем хронические зажимы через декомпрессию и мягкое вытяжение.",
    },
    {
      number: "02",
      title: "Нарушение осанки и асимметрия",
      description:
        "Сутулость, перекос плеч или таза меняют механику каждого шага. Возвращаем телу правильную ось, лёгкость походки и естественную грацию.",
    },
    {
      number: "03",
      title: "Бережное восстановление без риска",
      description:
        "Реабилитация после травм, операций или родов требует ювелирной точности. Пружины реформера позволяют дозировать нагрузку без давления на суставы.",
    },
    {
      number: "04",
      title: "Сила, рельеф и выносливость без износа",
      description:
        "Когда классический тренажёрный зал не подходит или утомляет. Включаем глубокую мускулатуру кора, формируем подтянутый силуэт и стабильный тонус.",
    },
  ]

  return (
    <section id="problem" className="py-20 sm:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Точка входа
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
            С какими задачами приходят в PILATES CODE
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Работаем с первопричиной дискомфорта и выстраиваем устойчивую биомеханику тела — независимо от вашего уровня подготовки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {requests.map((item) => (
            <div
              key={item.number}
              className="group bg-background border border-border/80 rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-sm font-serif tracking-widest text-primary/80">
                  {item.number}
                </span>
                <span className="h-px w-12 bg-border group-hover:bg-primary/40 transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}