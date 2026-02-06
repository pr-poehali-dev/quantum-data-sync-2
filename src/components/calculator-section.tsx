import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CalculatorSection() {
  const [visitors, setVisitors] = useState(10000)
  const [avgCheck, setAvgCheck] = useState(500000)
  const [conversion, setConversion] = useState(2)

  const potentialDeals = Math.round((visitors * 0.15 * (conversion / 100)))
  const currentRevenue = potentialDeals * avgCheck
  const lostMin = Math.round(currentRevenue * 0.35)
  const lostMax = Math.round(currentRevenue * 0.65)

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num)
  }

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            А сколько теряете <span className="text-red-500">вы</span>?
          </h2>
          <p className="text-xl text-gray-400">
            Даже приблизительная цифра меняет психологию
          </p>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Калькулятор потерянного pipeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="visitors" className="text-gray-300 text-base">
                  Посетителей в месяц
                </Label>
                <Input
                  id="visitors"
                  type="number"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="text-lg h-12 bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avgCheck" className="text-gray-300 text-base">
                  Средний чек (₽)
                </Label>
                <Input
                  id="avgCheck"
                  type="number"
                  value={avgCheck}
                  onChange={(e) => setAvgCheck(Number(e.target.value))}
                  className="text-lg h-12 bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversion" className="text-gray-300 text-base">
                  Конверсия в сделку (%)
                </Label>
                <Input
                  id="conversion"
                  type="number"
                  step="0.1"
                  value={conversion}
                  onChange={(e) => setConversion(Number(e.target.value))}
                  className="text-lg h-12 bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="bg-gradient-to-r from-red-950/50 to-red-900/30 border-2 border-red-800 rounded-xl p-8">
                <p className="text-gray-300 text-lg mb-4">
                  Потенциально теряемый pipeline:
                </p>
                <p className="text-4xl md:text-5xl font-bold text-red-400">
                  {formatNumber(lostMin)} – {formatNumber(lostMax)} ₽
                </p>
                <p className="text-xl text-gray-400 mt-2">в год</p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-6">
                  Revenue Layer может вернуть 40-60% этих потерь в первые 90 дней
                </p>
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-lg">
                  Запустить пилот
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
