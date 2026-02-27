import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Coffee",
    title: "Кружки с фото",
    description:
      "Кружки с вашим любимым фото — идеальный подарок для родных, коллег и друзей. Яркая печать, которая не выцветает даже после сотен стирок. Доступны кружки разного объёма и цвета.",
  },
  {
    icon: "Frame",
    title: "Фото на холсте",
    description:
      "Превратите любимый снимок в настоящее произведение искусства. Холсты на деревянном подрамнике смотрятся элегантно в любом интерьере — от семейного портрета до пейзажа.",
  },
  {
    icon: "Shirt",
    title: "Футболки и текстиль",
    description:
      "Уникальные футболки, худи и толстовки с вашим дизайном или фотографией. Отличный вариант для корпоративных сувениров, командной формы или личного подарка.",
  },
  {
    icon: "Heart",
    title: "Подушки с фото",
    description:
      "Мягкие декоративные подушки с памятными снимками — уютный и трогательный подарок. Пары, семьи, домашние питомцы — любой образ смотрится тепло и по-домашнему.",
  },
  {
    icon: "BookOpen",
    title: "Фотокниги и альбомы",
    description:
      "Профессиональные фотокниги и альбомы для хранения лучших воспоминаний. Идеально для свадьбы, путешествия, детских фото или корпоративных событий.",
  },
  {
    icon: "Building2",
    title: "Корпоративные сувениры",
    description:
      "Брендированные сувениры для бизнеса: кружки, футболки, календари с логотипом и фото сотрудников. Укрепляйте командный дух и создавайте запоминающиеся подарки партнёрам.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша продукция
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">создаём</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Фотография — это не просто снимок. Это эмоция, момент, история. Мы помогаем сохранить их в красивой и практичной форме.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
