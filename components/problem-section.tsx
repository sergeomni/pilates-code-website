import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Activity, Zap, ShieldOff } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Боль и скованность",
      description: "Постоянные боли в спине, шее или суставах, которые мешают вам жить и работать продуктивно.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Усталость и стресс",
      description: "Недостаток энергии, быстрая утомляемость и ощущение, что тело не справляется с нагрузками.",
    },
    {
      icon: <ShieldOff className="w-8 h-8 text-primary" />,
      title: "Потеря гибкости и тонуса",
      description: "Чувство, что тело стало “деревянным”, а мышцы ослабли, что влияет на вашу осанку и грацию.",
    },
  ]

  return (
    <section id="problem" className="py-20 sm:py-28 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
          Ваше тело подает сигналы...
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-20">
          ...но в суете современной жизни мы часто игнорируем их, пока они не превратятся в хроническую проблему. Узнаете себя?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-background border-border text-left p-6 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="mb-5">{problem.icon}</div>
                <CardTitle className="text-2xl font-medium text-foreground mb-3">{problem.title}</CardTitle>
                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                  {problem.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}