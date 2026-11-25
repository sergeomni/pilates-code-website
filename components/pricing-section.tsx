"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Send, Sparkles, User, Users, Layers } from "lucide-react"
import Link from "next/link"

const FITBASE_GROUP_URL =
  "https://pilatescode.fitbase.io/schedule-fitbase-widget?club=1"

const buildTelegramUrl = (message: string) =>
  `https://t.me/pilatescode_spb?text=${encodeURIComponent(message)}`

type SpecialistTier = "trainer" | "master" | "expert"

const START_PACK_TIERS: Record<
  SpecialistTier,
  {
    label: string
    specialists: string
    price: string
    perSession: string
  }
> = {
  trainer: {
    label: "Тренер",
    specialists: "Наталья Е., Екатерина Г.",
    price: "10 000 ₽",
    perSession: "3 333 ₽ / занятие",
  },
  master: {
    label: "Мастер",
    specialists: "Евгения К.",
    price: "12 000 ₽",
    perSession: "4 000 ₽ / занятие",
  },
  expert: {
    label: "Эксперт",
    specialists: "Алан М.",
    price: "14 000 ₽",
    perSession: "4 667 ₽ / занятие",
  },
}

const PERSONAL_TIERS: Record<
  SpecialistTier,
  {
    label: string
    specialists: string
    single: string
    pack4: string
    pack4Per: string
    pack8: string
    pack8Per: string
  }
> = {
  trainer: {
    label: "Тренер",
    specialists: "Наталья Е., Екатерина Г.",
    single: "4 200 ₽",
    pack4: "16 000 ₽",
    pack4Per: "4 000 ₽ / занятие",
    pack8: "30 400 ₽",
    pack8Per: "3 800 ₽ / занятие",
  },
  master: {
    label: "Мастер",
    specialists: "Евгения К.",
    single: "4 500 ₽",
    pack4: "17 200 ₽",
    pack4Per: "4 300 ₽ / занятие",
    pack8: "32 800 ₽",
    pack8Per: "4 100 ₽ / занятие",
  },
  expert: {
    label: "Эксперт",
    specialists: "Алан М.",
    single: "5 200 ₽",
    pack4: "20 000 ₽",
    pack4Per: "5 000 ₽ / занятие",
    pack8: "38 400 ₽",
    pack8Per: "4 800 ₽ / занятие",
  },
}

const SPLIT_TIERS: Record<
  SpecialistTier,
  {
    label: string
    specialists: string
    single: string
    singlePerPerson: string
    pack4: string
    pack4Per: string
    pack8: string
    pack8Per: string
  }
> = {
  trainer: {
    label: "Тренер",
    specialists: "Наталья Е., Екатерина Г.",
    single: "6 000 ₽",
    singlePerPerson: "3 000 ₽ с человека",
    pack4: "23 200 ₽",
    pack4Per: "5 800 ₽ / занятие",
    pack8: "44 800 ₽",
    pack8Per: "5 600 ₽ / занятие",
  },
  master: {
    label: "Мастер",
    specialists: "Евгения К.",
    single: "6 500 ₽",
    singlePerPerson: "3 250 ₽ с человека",
    pack4: "25 200 ₽",
    pack4Per: "6 300 ₽ / занятие",
    pack8: "48 800 ₽",
    pack8Per: "6 100 ₽ / занятие",
  },
  expert: {
    label: "Эксперт",
    specialists: "Алан М.",
    single: "7 000 ₽",
    singlePerPerson: "3 500 ₽ с человека",
    pack4: "27 200 ₽",
    pack4Per: "6 800 ₽ / занятие",
    pack8: "52 800 ₽",
    pack8Per: "6 600 ₽ / занятие",
  },
}

const TIER_KEYS: SpecialistTier[] = ["trainer", "master", "expert"]

export function PricingSection() {
  const [startTier, setStartTier] = useState<SpecialistTier>("trainer")
  const [personalTier, setPersonalTier] = useState<SpecialistTier>("trainer")
  const [splitTier, setSplitTier] = useState<SpecialistTier>("trainer")

  const activeStart = START_PACK_TIERS[startTier]
  const activePersonal = PERSONAL_TIERS[personalTier]
  const activeSplit = SPLIT_TIERS[splitTier]

  return (
    <section
      id="programs"
      className="py-20 sm:py-28 bg-muted/40 border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Форматы и стоимость
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
            Программы и цены
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Прозрачная стоимость без скрытых условий. Выберите комфортный формат тренировок и уровень специалиста.
          </p>
        </div>

        {/* Стартовый пакет — главный акцент с выбором категории */}
        <div className="max-w-6xl mx-auto mb-10 sm:mb-12">
          <div className="relative rounded-2xl bg-background border border-primary/35 p-7 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-wider font-medium mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Рекомендуем для старта
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-foreground mb-3">
                  Стартовый пакет «Первый КОД»
                </h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
                  3 персональные тренировки на большом оборудовании: диагностика осанки и подвижности, постановка дыхания и безопасный вход в систему.
                </p>

                {/* Переключатель категорий стартового пакета */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TIER_KEYS.map((tier) => {
                    const item = START_PACK_TIERS[tier]
                    const isActive = startTier === tier
                    return (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setStartTier(tier)}
                        className={`text-left px-4 py-3 rounded-xl border transition-all ${
                          isActive
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border/80 bg-muted/25 hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span
                            className={`text-sm ${
                              isActive
                                ? "font-medium text-foreground"
                                : "font-normal text-muted-foreground"
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className="text-sm font-medium text-primary">
                            {item.price}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground font-light mt-1 truncate">
                          {item.specialists}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 pt-6 lg:pt-0 border-t lg:border-t-0 border-border/60 flex-shrink-0 lg:min-w-[260px]">
                <div className="lg:text-right">
                  <div className="text-3xl sm:text-4xl font-serif font-medium text-foreground">
                    {activeStart.price}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-light mt-1">
                    3 занятия · {activeStart.perSession}
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto lg:w-full bg-primary hover:bg-primary/90 text-primary-foreground font-normal px-7 py-6 text-base rounded-lg shadow-sm"
                >
                  <Link
                    href={buildTelegramUrl(
                      `Здравствуйте! Хочу записаться на Стартовый пакет «Первый КОД» (3 занятия, категория: ${activeStart.label} — ${activeStart.price}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Начать с диагностики
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 основные карточки форматов */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Карточка 1: Персональные */}
          <div className="flex flex-col bg-background border border-border/80 rounded-2xl p-7 sm:p-8">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                1 на 1 с тренером
              </span>
            </div>

            <h3 className="text-2xl font-serif font-medium text-foreground mb-2">
              Персональные
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-5">
              Индивидуальная программа на реформере и большом оборудовании под ваши задачи, осанку и восстановление.
            </p>

            {/* Переключатель категории специалиста */}
            <div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-muted/60 mb-2">
              {TIER_KEYS.map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setPersonalTier(tier)}
                  className={`py-2 px-2 rounded-md text-xs sm:text-sm transition-all ${
                    personalTier === tier
                      ? "bg-background text-foreground font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground font-light"
                  }`}
                >
                  {PERSONAL_TIERS[tier].label}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-light text-center mb-5 min-h-[1rem]">
              {activePersonal.specialists}
            </p>

            {/* Прайс-строки */}
            <div className="space-y-4 py-5 border-y border-border/60 mb-6 flex-grow">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-foreground/80 font-light">
                  Разовое занятие
                </span>
                <span className="text-lg font-medium text-foreground">
                  {activePersonal.single}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm text-foreground/80 font-light">
                    Абонемент на 4 занятия
                  </div>
                  <div className="text-xs text-muted-foreground font-light">
                    {activePersonal.pack4Per}
                  </div>
                </div>
                <span className="text-lg font-medium text-foreground">
                  {activePersonal.pack4}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm text-foreground/80 font-light">
                    Абонемент на 8 занятий
                  </div>
                  <div className="text-xs text-primary font-normal">
                    {activePersonal.pack8Per}
                  </div>
                </div>
                <span className="text-lg font-medium text-foreground">
                  {activePersonal.pack8}
                </span>
              </div>
            </div>

            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-normal py-6 text-sm sm:text-base rounded-lg"
            >
              <Link
                href={buildTelegramUrl(
                  `Здравствуйте! Хочу подобрать время для персональной тренировки (категория: ${activePersonal.label}) в PILATES CODE.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Подобрать слот в Telegram
              </Link>
            </Button>
            <p className="mt-2.5 text-center text-xs text-muted-foreground font-light">
              Подбор времени с администратором или в приложении
            </p>
          </div>

          {/* Карточка 2: Сплит-тренировки */}
          <div className="flex flex-col bg-background border border-border/80 rounded-2xl p-7 sm:p-8">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Для двоих
              </span>
            </div>

            <h3 className="text-2xl font-serif font-medium text-foreground mb-2">
              Сплит-тренировки
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-5">
              Занятия в паре с партнёром или подругой. Персональное внимание тренера в более выгодном формате.
            </p>

            {/* Переключатель категории специалиста */}
            <div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-muted/60 mb-2">
              {TIER_KEYS.map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setSplitTier(tier)}
                  className={`py-2 px-2 rounded-md text-xs sm:text-sm transition-all ${
                    splitTier === tier
                      ? "bg-background text-foreground font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground font-light"
                  }`}
                >
                  {SPLIT_TIERS[tier].label}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-light text-center mb-5 min-h-[1rem]">
              {activeSplit.specialists}
            </p>

            {/* Прайс-строки */}
            <div className="space-y-4 py-5 border-y border-border/60 mb-6 flex-grow">
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm text-foreground/80 font-light">
                    Разовое (за двоих)
                  </div>
                  <div className="text-xs text-muted-foreground font-light">
                    {activeSplit.singlePerPerson}
                  </div>
                </div>
                <span className="text-lg font-medium text-foreground">
                  {activeSplit.single}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm text-foreground/80 font-light">
                    Абонемент на 4 занятия
                  </div>
                  <div className="text-xs text-muted-foreground font-light">
                    {activeSplit.pack4Per}
                  </div>
                </div>
                <span className="text-lg font-medium text-foreground">
                  {activeSplit.pack4}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm text-foreground/80 font-light">
                    Абонемент на 8 занятий
                  </div>
                  <div className="text-xs text-primary font-normal">
                    {activeSplit.pack8Per}
                  </div>
                </div>
                <span className="text-lg font-medium text-foreground">
                  {activeSplit.pack8}
                </span>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full border-primary/40 text-foreground hover:bg-primary/5 font-normal py-6 text-sm sm:text-base rounded-lg"
            >
              <Link
                href={buildTelegramUrl(
                  `Здравствуйте! Интересует сплит-тренировка для двоих (категория: ${activeSplit.label}) в PILATES CODE.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-primary" />
                Записаться в Telegram
              </Link>
            </Button>
            <p className="mt-2.5 text-center text-xs text-muted-foreground font-light">
              Стоимость указана за двоих участников
            </p>
          </div>

          {/* Карточка 3: Мини-группы (Fitbase) */}
          <div className="flex flex-col bg-background border border-border/80 rounded-2xl p-7 sm:p-8">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                От 3 человек
              </span>
            </div>

            <h3 className="text-2xl font-serif font-medium text-foreground mb-2">
              Мини-группы
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-5">
              Камерные тренировки на реформерах и матах. Энергия группы при сохранении контроля техники каждого участника.
            </p>

            {/* Плашка формата для выравнивания с переключателями */}
            <div className="py-2.5 px-3 rounded-lg bg-muted/60 text-center text-xs sm:text-sm text-foreground/80 font-light mb-2">
              Онлайн-запись открыта 24/7
            </div>
            <p className="text-xs text-muted-foreground font-light text-center mb-5 min-h-[1rem]">
              Расписание в Fitbase
            </p>

            {/* Прайс-строки */}
            <div className="space-y-4 py-5 border-y border-border/60 mb-6 flex-grow">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-foreground/80 font-light">
                  Разовое занятие
                </span>
                <span className="text-lg font-medium text-foreground">
                  2 200 ₽
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm text-foreground/80 font-light">
                    Абонемент на 4 занятия
                  </div>
                  <div className="text-xs text-muted-foreground font-light">
                    2 000 ₽ / занятие
                  </div>
                </div>
                <span className="text-lg font-medium text-foreground">
                  8 000 ₽
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm text-foreground/80 font-light">
                    Абонемент на 8 занятий
                  </div>
                  <div className="text-xs text-primary font-normal">
                    1 800 ₽ / занятие
                  </div>
                </div>
                <span className="text-lg font-medium text-foreground">
                  14 400 ₽
                </span>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full border-primary/40 text-foreground hover:bg-primary/5 font-normal py-6 text-sm sm:text-base rounded-lg"
            >
              <Link
                href={FITBASE_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-primary" />
                Выбрать время онлайн
              </Link>
            </Button>
            <p className="mt-2.5 text-center text-xs text-muted-foreground font-light">
              Мгновенное бронирование без звонков
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}