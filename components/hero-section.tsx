import { Button } from "@/components/ui/button"
import { Check, MapPin, Send } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-16"
      style={{
        backgroundImage: "url('/images/hero-background.jpg')",
      }}
    >
      {/* Плотный градиент для высокого контраста текста */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Надзаголовок с позиционированием и локацией */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-sm sm:text-base font-light mb-6">
          <span>Студия интеллектуального движения</span>
          <span className="text-primary">•</span>
          <span>Васильевский остров, м. Приморская</span>
        </div>

        {/* Главный заголовок */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium text-white mb-6 leading-tight drop-shadow-md max-w-5xl mx-auto">
          Пилатес на реформерах:
          <br />
          архитектура вашего тела
        </h1>

        {/* Подзаголовок */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2 drop-shadow-sm">
          Персональные и мини-групповые тренировки на большом оборудовании.
          Диагностика осанки, работа с глубокими мышцами и безопасное восстановление без боли.
        </p>

        {/* Блок кнопок */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 sm:mb-16">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-normal px-8 py-6 text-lg sm:text-xl rounded-lg shadow-lg"
          >
            <Link
              href="https://pilatescode.fitbase.io/schedule-fitbase-widget?club=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Записаться в группу
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-light px-8 py-6 text-lg sm:text-xl rounded-lg"
          >
            <Link
              href="https://t.me/pilatescode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Задать вопрос в Telegram
            </Link>
          </Button>
        </div>

        {/* Акцентные карточки доверия внизу */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
  <div className="flex items-center justify-center md:justify-start gap-3.5 px-5 py-4 rounded-xl bg-black/25 backdrop-blur-md border border-white/15 shadow-lg">
    <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
      <Check className="w-5 h-5" />
    </div>
    <span className="text-white font-normal text-base text-left">
      Оборудование премиум-класса
    </span>
  </div>

  <div className="flex items-center justify-center md:justify-start gap-3.5 px-5 py-4 rounded-xl bg-black/25 backdrop-blur-md border border-white/15 shadow-lg">
    <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
      <Check className="w-5 h-5" />
    </div>
    <span className="text-white font-normal text-base text-left">
      Сертифицированные тренеры
    </span>
  </div>

  <div className="flex items-center justify-center md:justify-start gap-3.5 px-5 py-4 rounded-xl bg-black/25 backdrop-blur-md border border-white/15 shadow-lg">
    <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
      <MapPin className="w-5 h-5" />
    </div>
    <span className="text-white font-normal text-base text-left">
      ул. Кораблестроителей, 30
    </span>
  </div>
</div>
      </div>
    </section>
  )
}