import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function BenefitsSection() {
  const benefits = [
    {
      id: "productivity",
      title: "Повысить продуктивность",
      quote:
        "«После курса PILATES CODE, особенно занятий на реформере, я забыла о болях в спине. Теперь могу работать по 8 часов без дискомфорта и чувствую себя энергичной весь день.»",
    },
    {
      id: "grace",
      title: "Обрести грацию",
      quote:
        "«Движения стали более плавными и уверенными. Я чувствую гармонию между телом и разумом, которой не было раньше.»",
    },
    {
      id: "safety",
      title: "Найти безопасный путь",
      quote:
        "«Наконец-то нашла систему тренировок, которая укрепляет тело без риска травм. Каждое упражнение продумано и безопасно.»",
    },
  ]

  return (
    // 1. Добавлен фоновый цвет для секции
    <section className="py-20 sm:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            Расшифруйте код для ваших целей
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {benefits.map((benefit) => (
              <AccordionItem 
                key={benefit.id} 
                value={benefit.id} 
                // 2. Улучшен дизайн каждого элемента аккордеона
                className="border border-border rounded-lg bg-background shadow-sm data-[state=open]:border-primary transition-all"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-serif font-medium text-foreground hover:no-underline px-6 py-5">
                  {/* 3. Увеличен шрифт заголовка */}
                  {benefit.title.toUpperCase()}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground font-light italic leading-relaxed px-6 pb-5">
                  {/* 4. Увеличен шрифт цитаты */}
                  {benefit.quote}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}