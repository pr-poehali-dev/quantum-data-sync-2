import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Чем Revenue Layer отличается от обычного чат-бота?",
      answer:
        "Чат-боты ждут сообщений и отвечают на вопросы. Revenue Layer анализирует поведение, видит покупательское намерение и подключает менеджера в момент максимальной вероятности сделки. Это слой управления выручкой, а не просто чат.",
    },
    {
      question: "Сколько времени занимает внедрение?",
      answer:
        "Один тег на сайт — и система начинает работать. Без сценариев, без обучения команды, без интеграторов. Первые сигналы — в день установки. Быстрее, чем запуск рекламной кампании.",
    },
    {
      question: "Как оно понимает, кто готов к покупке?",
      answer:
        "Система анализирует поведенческие сигналы: время на странице с ценами, повторные посещения, изучение кейсов, сравнение тарифов. Когда паттерн совпадает с профилем готовности — запускается контекстное вовлечение.",
    },
    {
      question: "Нужно ли менять CRM или процессы?",
      answer:
        "Нет. Revenue Layer работает поверх вашей текущей инфраструктуры. Он добавляет слой обнаружения намерения, не заменяя CRM. Ваш отдел продаж просто начинает видеть, кто готов к разговору.",
    },
    {
      question: "Что, если это не сработает?",
      answer:
        "Главный риск — не установка. А незнание, сколько сделок вы уже теряете. Мы можем запустить пилот → показать сигналы → потом вы решите. Без обязательств.",
    },
    {
      question: "Подходит ли это моему бизнесу?",
      answer:
        "Revenue Layer создан для B2B-компаний с высоким чеком, длинным циклом сделки и sales-assisted моделью. Если у вас сложное решение, которое клиенты изучают перед покупкой — это для вас. Не подходит для импульсного ecommerce и self-service.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ответы на главные вопросы об управлении покупательским намерением
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}