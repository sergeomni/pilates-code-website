import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Users, Group, Star } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const programs = [
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Персональные тренировки",
      description: "Максимальная концентрация на ваших целях. Программа строится исключительно под вас, с учетом всех особенностей тела.",
      price: "от 5 000 ₽",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Сплит-тренировки",
      description: "Занятия в паре с партнером. Отличный способ сохранить мотивацию и получить преимущества персонального подхода по более выгодной цене.",
      price: "от 3 400 ₽",
    },
    {
      icon: <Group className="w-8 h-8 text-primary" />,
      title: "Мини-группы",
      // ---> ИЗМЕНЕНИЕ 1: "до 4 человек" заменено на "от 3 человек"
      description: "Занятия на матах или реформерах (от 3 человек). Динамика группы в сочетании с вниманием тренера, невозможным в больших клубах.",
      price: "от 2 000 ₽",
    },
  ]

  return (
    <section id="programs" className="py-20 sm:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">Программы и Цены</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Выберите формат, который идеально подходит для ваших целей и образа жизни.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-secondary/30 border-secondary/50 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground">Стартовый пакет «Первый КОД»</h3>
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Ваш обязательный первый шаг. 3 персональные тренировки для диагностики, освоения базовых принципов
                    системы и безопасного старта.
                  </p>
                </div>
                <div className="text-left md:text-right flex-shrink-0">
                  <div className="text-3xl md:text-4xl font-medium text-primary mb-4">12 000 ₽</div>
                  {/* ---> ИЗМЕНЕНИЕ 2: Ссылка на кнопке заменена на WhatsApp */}
                  <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-light px-8 py-3 text-lg">
                    <Link href="https://wa.me/79006269040" target="_blank" rel="noopener noreferrer">
                      Начать с диагностики
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="flex flex-col bg-background/80 border-border">
              <CardHeader>
                <div className="mb-4">{program.icon}</div>
                <CardTitle className="text-2xl font-medium">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-base text-foreground/70 leading-relaxed flex-grow mb-6">
                  {program.description}
                </CardDescription>
                <div className="text-2xl font-medium text-foreground mb-6">{program.price}</div>
                <Button asChild variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                  <Link href="https://dikidi.net/1632097" target="_blank" rel="noopener noreferrer">
                    Записаться
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}