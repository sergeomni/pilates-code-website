import { Search, Target, Trophy } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Диагностика и Обучение",
      description: "Анализируем ваше тело, выявляем дисбалансы и обучаем основным принципам нашей авторской системы PILATES CODE.",
    },
    {
      number: "02",
      icon: Target,
      title: "Практика и Интеграция",
      description: "Вы начинаете заниматься в мини-группах или персонально, используя мат и реформеры для глубокой и точной проработки тела под контролем тренеров.",
    },
    {
      number: "03",
      icon: Trophy,
      title: "Результат и Трансформация",
      description: "Достигаем поставленных целей и получаем инструменты для непрерывного самостоятельного развития.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            Ваш путь к управлению телом в 3 простых шага
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-center space-y-6">
                <div className="flex justify-center mb-8">
                  <div className="relative flex items-center justify-center w-24 h-24">
                    {/* 1. Цифры стали больше и служат фоном */}
                    <div className="absolute text-8xl md:text-9xl font-serif font-medium text-primary/20">{step.number}</div>
                    
                    {/* 2. Круг с иконкой теперь находится на переднем плане */}
                    <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-medium text-foreground">{step.title}</h3>
                <p className="text-base text-foreground/80 font-light leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}