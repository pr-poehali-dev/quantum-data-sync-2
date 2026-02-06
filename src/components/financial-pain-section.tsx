export function FinancialPainSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Проблема не в трафике.
            <br />
            <span className="text-red-500">Проблема — в невидимом намерении.</span>
          </h2>
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="text-3xl mt-1">✔️</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Покупатели изучают сайт анонимно</h3>
              <p className="text-gray-400 leading-relaxed">
                Они смотрят цены, читают кейсы, сравнивают функции — но вы не видите этого процесса.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="text-3xl mt-1">✔️</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Решение формируется до разговора с продажами</h3>
              <p className="text-gray-400 leading-relaxed">
                В 67% B2B-сделок клиент уже принял решение, прежде чем связался с менеджером.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="text-3xl mt-1">✔️</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Намерение угасает за минуты</h3>
              <p className="text-gray-400 leading-relaxed">
                Горячий лид остывает, пока вы не знаете о нём. Конкуренты быстрее — и забирают сделку.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-red-400">
            Пока вы отвечаете — они уже выбрали других.
          </p>
        </div>
      </div>
    </section>
  )
}
