import { ArrowUpRight, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const YANDEX_REVIEWS_URL =
  "https://yandex.ru/maps/org/151849222797/reviews/"

const YANDEX_REVIEWS_WIDGET_SRC =
  "https://yandex.ru/maps-reviews-widget/151849222797?comments"

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-muted/40 border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Отзывы клиентов
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
            Впечатления тех, кто уже занимается в PILATES CODE
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Реальные отзывы гостей нашей студии на Васильевском острове в Яндекс Картах — о тренерах, работе на реформерах и изменениях в самочувствии.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl bg-background border border-border/80 p-3 sm:p-6 shadow-sm">
          <div className="w-full overflow-hidden rounded-xl">
            <iframe
              src={YANDEX_REVIEWS_WIDGET_SRC}
              title="Отзывы о студии PILATES CODE на Яндекс Картах"
              loading="lazy"
              className="w-full h-[560px] sm:h-[600px] border-0 block"
            />
          </div>

          <div className="mt-5 pt-5 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-light">
              <Star className="w-4 h-4 text-primary fill-primary flex-shrink-0" />
              <span>
                Отзывы подтягиваются напрямую из карточки студии на Яндекс Картах
              </span>
            </div>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full sm:w-auto border-primary/35 text-foreground hover:bg-primary/5 font-normal px-4 rounded-lg"
            >
              <Link
                href={YANDEX_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5"
              >
                Открыть все отзывы на Яндекс Картах
                <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection