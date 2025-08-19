import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MainOfferSection() {
  return (
    <section className="py-20 sm:py-28 bg-primary/10 relative overflow-hidden">
      {/* 1. Возвращен фоновый паттерн */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 to-background blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-gradient-to-tr from-secondary/30 to-background blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-8">
            Ваш первый шаг к управлению телом
          </h2>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            «Стартовый Пакет» — это не просто тренировки, а фундаментальный вводный курс в систему PILATES CODE. Мы
            гарантируем, что после этих 3-х персональных занятий вы будете понимать свое тело как никогда раньше.
          </p>

          <Button asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-light px-12 py-4 text-lg"
          >
            <Link href="https://wa.me/79006269040" target="_blank" rel="noopener noreferrer">
              Записаться на Стартовый Пакет
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}