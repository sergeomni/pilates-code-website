import { Code, Settings } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="system" className="relative py-20 sm:py-28 bg-secondary/20 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-10">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-foreground mb-4 sm:mb-6">
            Решение — в Системе, а не в хаотичных усилиях
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-3xl mx-auto px-4">
            Мы не даем вам случайный набор упражнений. <br></br>Мы даем вам{" "}
            <strong className="font-medium text-foreground">инструкцию к вашему телу</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Блок 1: КОД ТЕЛА */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background/50 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground">КОД ТЕЛА</h3>
            <p className="text-muted-foreground font-light leading-relaxed px-4">
              Это основа основ. Мы учим вас не просто двигаться, а понимать глубинную логику каждого упражнения. Вы научитесь чувствовать свое тело, слышать его сигналы и использовать это знание для достижения максимальных результатов без травм.
            </p>
          </div>
          
          {/* Блок 2: КОД КАК СИСТЕМА */}
          <div className="text-center space-y-6">
             <div className="flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background/50 rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground">КОД КАК СИСТЕМА</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Продуманная методика основана на биомеханике и медицинских знаниях. Это не "еще один фитнес", а:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light text-left inline-block">
              <li>точные упражнения на матах и оборудовании</li>
              <li>выверенные последовательности движений</li>
              <li>работа с дыханием</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}