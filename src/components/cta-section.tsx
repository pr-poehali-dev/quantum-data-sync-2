import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <>
      {/* Блок неизбежности */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Скоро сайты разделятся на два типа
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="p-8 bg-green-950/30 border-2 border-green-700 rounded-xl">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-3">Те, что видят намерение</h3>
              <p className="text-gray-300">
                Превращают анонимный трафик в управляемый pipeline
              </p>
            </div>
            
            <div className="p-8 bg-gray-900 border-2 border-gray-700 rounded-xl opacity-60">
              <div className="text-5xl mb-4">✕</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-3">Те, что просто показывают страницы</h3>
              <p className="text-gray-500">
                Теряют сделки и не знают почему
              </p>
            </div>
          </div>

          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Управлять выручкой, не видя покупательских сигналов,
            <br />
            <span className="text-red-400 font-bold">
              скоро будет так же странно, как работать без CRM.
            </span>
          </p>
        </div>
      </section>

      {/* Risk Reversal CTA */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Превратите анонимный трафик
              <br />
              <span className="text-green-400">в управляемый pipeline</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Главный риск — не установка. А незнание, сколько сделок вы уже теряете.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white pulse-button text-lg px-10 py-6 text-xl font-semibold"
            >
              Подключить Revenue Layer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-600 hover:border-gray-400 text-white hover:bg-gray-900 text-lg px-10 py-6 text-xl font-semibold bg-transparent"
            >
              Запустить пилот
            </Button>
          </div>

          <p className="text-gray-500 text-sm">
            Первые сигналы — сегодня
          </p>
        </div>
      </section>
    </>
  )
}