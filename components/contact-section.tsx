// ---> Вставьте этот код в components/contact-section.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const contactDetails = {
    address: "Санкт-Петербург, ул. Кораблестроителей, д. 30, пом. 175",
    studioName: 'Студия пилатеса "КОД ПИЛАТЕСА" (Pilates Code)',
    email: "pilatescodespb@gmail.com",
    phone: "+7 900 626 90 40",
    phoneLink: "tel:+79006269040",
    emailLink: "mailto:pilatescodespb@gmail.com",
  }

  return (
    <section id="contacts" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">Контакты</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Мы всегда готовы ответить на ваши вопросы.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-8">{contactDetails.studioName}</h3>
              {/* ---> ИЗМЕНЕНИЕ ЗДЕСЬ: Возвращен недостающий div */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground/80">{contactDetails.address}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <a href={contactDetails.phoneLink} className="text-lg text-foreground/80 hover:text-primary transition-colors">
                    {contactDetails.phone}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <a href={contactDetails.emailLink} className="text-lg text-foreground/80 hover:text-primary transition-colors">
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-muted min-h-[400px] lg:min-h-0 w-full h-full">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=151849222797"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                title="Карта проезда к студии PILATES CODE"
                className="border-none"
              ></iframe>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}