import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Семейный портрет на холсте",
    category: "Фото на холсте",
    image: "/placeholder.jpg",
    description:
      "Большой холст 60×80 см с семейной фотографией. Насыщенные цвета, деревянный подрамник — украшение гостиной, которое объединяет близких.",
    tags: ["Холст", "Семья", "Интерьер"],
  },
  {
    title: "Именные кружки для команды",
    category: "Корпоративные сувениры",
    image: "/placeholder.jpg",
    description:
      "Серия из 30 кружек с фото каждого сотрудника и логотипом компании. Отличный подарок на корпоратив, укрепляющий командный дух.",
    tags: ["Кружки", "Корпоратив", "Брендинг"],
  },
  {
    title: "Свадебная фотокнига",
    category: "Фотокниги",
    image: "/placeholder.jpg",
    description:
      "Премиальная фотокнига на 60 страниц с профессиональной вёрсткой. Твёрдая обложка, плотные листы — хранитель самого важного дня.",
    tags: ["Фотокнига", "Свадьба", "Пара"],
  },
  {
    title: "Подушки с питомцами",
    category: "Подушки с фото",
    image: "/placeholder.jpg",
    description:
      "Мягкие декоративные подушки с портретами любимых котов и собак. Сделали серию из 5 подушек — разошлись как горячие пирожки в подарок друзьям!",
    tags: ["Подушки", "Питомцы", "Подарок"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Примеры наших работ</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждый заказ — это история. Вот несколько примеров того, как мы помогаем клиентам сохранять воспоминания в красивой форме.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
