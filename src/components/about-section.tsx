import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "1",
    title: "Detect",
    subtitle: "Обнаружение",
    description: "Система анализирует поведение и находит посетителей, близких к решению.",
    icon: "Eye",
  },
  {
    number: "2",
    title: "Engage",
    subtitle: "Вовлечение",
    description: "Запускает уместный диалог — без скриптов и допросов.",
    icon: "MessageCircle",
  },
  {
    number: "3",
    title: "Route",
    subtitle: "Маршрутизация",
    description: "Незаметно подключает менеджера, пока окно сделки открыто.",
    icon: "Users",
  },
]

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Начинает приносить сигналы
            <br />
            <span className="text-green-400">в день установки</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Никаких рассказов про модели, AI, LLM. Вы получаете деньги, не магию.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-green-700 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-green-600/20 flex items-center justify-center border-2 border-green-600">
                  <Icon name={step.icon} size={28} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold">ШАГ {step.number}</div>
                  <div className="text-2xl font-bold text-white">{step.title}</div>
                  <div className="text-sm text-gray-400">{step.subtitle}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Быстрее, чем запуск рекламной кампании
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center border-2 border-blue-600 mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <p className="text-white font-semibold">Вставьте один тег</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center border-2 border-purple-600 mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <p className="text-white font-semibold">Система просканирует сайт</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center border-2 border-green-600 mx-auto mb-3">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <p className="text-white font-semibold">Начнёт фиксировать intent</p>
            </div>
          </div>

          <p className="text-center text-gray-400 text-lg">
            Без сценариев. Без обучения команды. Без интеграторов.
          </p>
        </div>
      </div>
    </section>
  )
}