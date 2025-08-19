// ---> Вставьте этот код в components/faq-section.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      id: "what-is-pilates-code",
      question: "Что такое система PILATES CODE?",
      answer:
        "PILATES CODE — это структурированная методика, основанная на классическом пилатесе, но адаптированная для современного человека. Мы используем научный подход к движению, анализируем индивидуальные особенности тела и создаем персональную программу развития.",
    },
    {
      id: "beginner-friendly",
      question: "Подходит ли PILATES CODE новичкам?",
      answer:
        "Абсолютно! Система разработана так, чтобы быть доступной для людей любого уровня подготовки. Стартовый пакет специально создан для безопасного введения в методику и изучения основных принципов.",
    },
    {
      id: "results-timeline",
      question: "Через какое время будут видны результаты?",
      answer:
        "Первые изменения в самочувствии и осанке вы заметите уже после стартового пакета (3 занятия). Устойчивые результаты формируются через 2-3 месяца регулярных занятий. Каждый организм индивидуален, поэтому сроки могут варьироваться.",
    },
    {
      id: "medical-conditions",
      question: "Можно ли заниматься при проблемах со спиной?",
      answer:
        "PILATES CODE особенно эффективен при проблемах с позвоночником. Однако перед началом занятий рекомендуем проконсультироваться с врачом. Наши тренеры имеют опыт работы с различными ограничениями и адаптируют программу под ваши потребности.",
    },
    {
      id: "reformer-vs-mat",
      question: "Чем занятия на реформере отличаются от занятий на коврике (мате)?",
      answer:
        "Мат — это основа пилатеса, где вы работаете с весом собственного тела. Реформер добавляет два ключевых элемента: поддержку и сопротивление за счет системы пружин. Он помогает глубже и точнее проработать мышцы, быстрее освоить сложные движения и является незаменимым инструментом для реабилитации и построения сильного, выровненного тела. В нашей студии мы используем оба направления для достижения наилучшего результата.",
    },
    {
      id: "group-vs-personal",
      question: "Что лучше: персональные или групповые занятия?",
      answer:
        "Рекомендуем начать с персональных занятий (стартовый пакет) для изучения основ и выявления индивидуальных особенностей. После этого можно переходить к групповым занятиям или продолжать персональные тренировки для более быстрого прогресса.",
    },
  ]

  return (
    // 1. Добавлен фоновый цвет для секции
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Ответы на ваши вопросы</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                // 2. Улучшен дизайн каждого элемента аккордеона
                className="border border-border rounded-lg bg-background shadow-sm data-[state=open]:border-primary transition-all"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-serif font-medium text-foreground hover:no-underline px-6 py-5">
                  {/* 3. Увеличен шрифт заголовка */}
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground font-light leading-relaxed px-6 pb-5">
                  {/* 4. Увеличен шрифт ответа */}
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}