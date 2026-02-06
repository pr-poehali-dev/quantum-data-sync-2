import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const suitableFor = [
  { text: "высокий чек", icon: "DollarSign" },
  { text: "длинный цикл сделки", icon: "Calendar" },
  { text: "сложный выбор", icon: "Brain" },
  { text: "sales-assisted модель", icon: "Users" },
]

const notSuitableFor = [
  { text: "импульсный ecommerce", icon: "X" },
  { text: "микрочеки", icon: "X" },
  { text: "pure self-service", icon: "X" },
]

export function TechnologySection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Кому нельзя ставить
          </h2>
          <p className="text-xl text-gray-400">
            Фильтрация повышает perceived value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-950/30 to-emerald-900/20 border-green-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Подходит</h3>
              </div>
              <ul className="space-y-4">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon name={item.icon} size={20} className="text-green-400" />
                    <span className="text-white text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-950/30 to-red-900/20 border-red-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                  <Icon name="XCircle" size={24} className="text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Не подходит</h3>
              </div>
              <ul className="space-y-4">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon name={item.icon} size={20} className="text-red-400" />
                    <span className="text-white text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Не каждому бизнесу нужен Revenue Layer. Но если вы управляете сложными B2B-сделками — это обязательная часть вашей revenue-архитектуры.
          </p>
        </div>
      </div>
    </section>
  )
}