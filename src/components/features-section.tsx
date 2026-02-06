import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Обнаружение намерения",
    description: "Система автоматически анализирует поведение посетителей и выявляет тех, кто близок к принятию решения о покупке.",
    icon: "target",
    badge: "Intent AI",
  },
  {
    title: "Контекстное вовлечение",
    description: "Запускает уместный диалог без скриптов и давления — только когда клиент действительно готов.",
    icon: "zap",
    badge: "Smart",
  },
  {
    title: "Приоритизация горячих",
    description: "Автоматически ранжирует посетителей по степени готовности к покупке и направляет их в отдел продаж.",
    icon: "brain",
    badge: "Priority",
  },
  {
    title: "Подключение менеджера",
    description: "Незаметно передаёт беседу живому менеджеру в момент максимальной вероятности закрытия сделки.",
    icon: "link",
    badge: "Handoff",
  },
  {
    title: "Pipeline-метрики",
    description: "Отслеживает не просто диалоги, а реальную оценку потенциальных сделок и упущенных возможностей.",
    icon: "globe",
    badge: "Revenue",
  },
  {
    title: "Установка за 15 минут",
    description: "Один тег — и система начинает работать. Без интеграторов, сценариев и обучения команды.",
    icon: "lock",
    badge: "Plug & Play",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Это не чат и не бот. Это слой управления выручкой.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revenue Layer — система, которая видит сигналы готовности купить, приоритизирует горячих посетителей и подключает менеджера в момент максимальной вероятности сделки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}