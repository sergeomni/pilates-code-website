import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm backdrop-brightness-75 backdrop-sepia-[.25]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-medium text-white mb-6 leading-tight drop-shadow-md">
          Расшифруйте Код
          <br />
          Своего Тела
        </h1>

        {/* ---> ИЗМЕНЕНИЕ ЗДЕСЬ: Увеличен нижний отступ у этого параграфа */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-5xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 drop-shadow-sm">
          PILATES CODE — это не просто пилатес. Это точная, осознанная система для достижения силы, баланса и жизни без
          боли в Санкт-Петербурге.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-light px-10 py-5 text-xl sm:text-2xl mb-12 sm:mb-16 rounded-lg"
        >
          <Link href="https://dikidi.net/1632097" target="_blank" rel="noopener noreferrer">
            Записаться онлайн
          </Link>
        </Button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 px-4">
          <div className="flex items-center space-x-3">
            <Check className="w-6 h-6 text-primary flex-shrink-0" />
            <span className="text-white/90 font-light text-lg sm:text-xl">Системный подход</span>
          </div>
          <div className="flex items-center space-x-3">
            <Check className="w-6 h-6 text-primary flex-shrink-0" />
            <span className="text-white/90 font-light text-lg sm:text-xl">Измеримый результат</span>
          </div>
          <div className="flex items-center space-x-3">
            <Check className="w-6 h-6 text-primary flex-shrink-0" />
            <span className="text-white/90 font-light text-lg sm:text-xl">Безопасность</span>
          </div>
        </div>
      </div>
    </section>
  )
}