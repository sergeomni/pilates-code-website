import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const TELEGRAM_QUESTION_URL = `https://t.me/pilatescode_spb?text=${encodeURIComponent(
  "Здравствуйте! У меня есть вопрос по занятиям в PILATES CODE."
)}`

export function FAQSection() {
  const faqs = [
    {
      id: "how-to-book",
      question: "Как записаться на персональную тренировку или в мини-группу?",
      answer:
        "В мини-группы можно записаться мгновенно в любое время через онлайн-расписание на сайте. Для персональных, сплит-тренировок и Стартового пакета напишите администратору в Telegram — мы подберём специалиста и удобное окно. Постоянным клиентам также доступна самостоятельная запись на все форматы через наше мобильное приложение.",
    },
    {
      id: "beginner-friendly",
      question: "Подходит ли PILATES CODE новичкам без подготовки?",
      answer:
        "Да. Оборудование настраивается под ваши параметры с помощью системы пружин — оно может как облегчать движение и поддерживать суставы, так и добавлять нагрузку. Для максимально бережного старта рекомендуем Стартовый пакет «Первый КОД» из 3 персональных занятий с диагностикой.",
    },
    {
      id: "what-to-bring",
      question: "Что нужно взять с собой на первую тренировку?",
      answer:
        "Удобную облегающую спортивную одежду без молний и металлических элементов (чтобы не повредить обивку реформеров и тренер видел точность выравнивания корпуса) и чистые носки — лучше с противоскользящим покрытием. Вода, чай, кофе и всё оборудование уже есть в студии.",
    },
    {
      id: "medical-conditions",
      question: "Можно ли заниматься при болях в спине или ограничениях?",
      answer:
        "Пилатес на большом оборудовании — один из самых безопасных и эффективных методов работы с позвоночником и суставами. При наличии грыж, протрузий или после травм важно начинать именно с персональной диагностики и иметь допуск врача. Тренер адаптирует амплитуду и нагрузку под ваше состояние.",
    },
    {
      id: "reformer-vs-mat",
      question: "Чем занятия на реформере отличаются от пилатеса на коврике?",
      answer:
        "На мате вы работаете только с весом собственного тела. Реформер и большое студийное оборудование добавляют пружинное сопротивление и векторную поддержку: это позволяет точнее включать глубокие мышцы-стабилизаторы, разгружать перенапряжённые зоны и быстрее выстраивать правильную биомеханику.",
    },
    {
      id: "results-timeline",
      question: "Через какое время будут заметны результаты?",
      answer:
        "Лёгкость в спине и лучшее ощущение осанки большинство клиентов замечают уже после первых 2–3 занятий. Устойчивая перестройка мышечного тонуса и привычки движения формируется за 2–3 месяца при регулярном графике 2–3 раза в неделю.",
    },
    {
      id: "group-vs-personal",
      question: "С чего лучше начать: с персональных тренировок или мини-группы?",
      answer:
        "Если есть конкретные запросы по спине, восстановлению или вы впервые на реформере — оптимальнее пройти Стартовый пакет (3 персональных занятия). Освоив базовые принципы дыхания и настройки оборудования, вы сможете комфортно заниматься как в мини-группах, так и продолжать персональный маршрут.",
    },
  ]

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-muted/40 border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Частые вопросы
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
            Ответы перед первым визитом
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Собрали главное о записи, подготовке к тренировке и работе на оборудовании.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3.5">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-border/80 rounded-2xl bg-background px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg sm:text-xl font-serif font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground font-light leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-sm sm:text-base text-muted-foreground font-light">
              Не нашли ответ на свой вопрос?{" "}
              <Link
                href={TELEGRAM_QUESTION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline underline-offset-4"
              >
                Напишите администратору в Telegram
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}