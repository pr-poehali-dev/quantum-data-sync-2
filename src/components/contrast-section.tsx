import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const comparisons = [
  {
    aspect: "Подход",
    regular: "ждёт сообщения",
    revenue: "видит намерение",
  },
  {
    aspect: "Действия",
    regular: "реагирует",
    revenue: "предвосхищает",
  },
  {
    aspect: "Персонализация",
    regular: "одинаков для всех",
    revenue: "контекстный",
  },
  {
    aspect: "Результат",
    regular: "создаёт шум",
    revenue: "выводит покупателей",
  },
  {
    aspect: "Метрика",
    regular: "количество диалогов",
    revenue: "оценка pipeline",
  },
]

export function ContrastSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Контраст очевиден
          </h2>
          <p className="text-xl text-gray-400">
            Это совершенно другой уровень управления выручкой
          </p>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-6 text-gray-400 font-semibold text-lg w-1/3">
                      Параметр
                    </th>
                    <th className="text-left p-6 text-gray-400 font-semibold text-lg w-1/3">
                      <div className="flex items-center gap-2">
                        <Icon name="MessageSquare" size={20} />
                        Обычный чат
                      </div>
                    </th>
                    <th className="text-left p-6 text-green-400 font-semibold text-lg w-1/3">
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" size={20} />
                        Revenue Layer
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors"
                    >
                      <td className="p-6 font-semibold text-white">
                        {item.aspect}
                      </td>
                      <td className="p-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Icon name="X" size={16} className="text-red-500" />
                          {item.regular}
                        </div>
                      </td>
                      <td className="p-6 text-white">
                        <div className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-green-500" />
                          {item.revenue}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-gradient-to-r from-green-950/30 to-emerald-900/20 border-t border-green-900/50">
              <p className="text-center text-xl text-gray-300">
                <span className="font-bold text-green-400">Контраст ускоряет принятие решения.</span>
                <br />
                Теперь это не инструмент — это обязательный слой управления выручкой.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
