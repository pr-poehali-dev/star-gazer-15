const events = [
  {
    date: '17.04 18:00',
    title: '12+1 ПРИНЦИПОВ УСПЕХА ФЁДОРА КОНЮХОВА',
    subtitle: 'ЛЮДИ — ДОВЕРИЕ — РЕЗУЛЬТАТ',
    subtitleColor: true,
    description: 'Установление долгосрочных деловых связей в живом формате',
    image: 'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-1.jpg',
  },
  {
    date: '24.04 18:00',
    title: 'ЖЕНСТВЕННОСТЬ ГЛАЗАМИ МУЖЧИНЫ',
    description:
      'Диалог о том, что делает женщину по настоящему сильной и желанной, в формате семинара. Ведущие — Михаил Горбатько и Юлия Маканко',
    image: 'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
  },
  {
    date: '25.04 15:00',
    title: 'ИСКУССТВО ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ',
    description:
      'Отработка техник и навыков публичных выступлений. Как расположить к себе людей и чувствовать уверенность на сцене. Тренинг для всех возрастов.',
    image: 'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
  },
  {
    date: '26.04 15:00',
    title: 'ПРОФЕССИОНАЛЬНОЕ САМООПРЕДЕЛЕНИЕ 14+',
    description:
      'Как найти своё призвание и состояться в профессии. Семинар для молодых людей, стоящих на пути выбора профессии.',
    image: 'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-5.jpg',
  },
];

export default function EventsSection() {
  return (
    <section className="bg-[#f0f0f0] py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-black uppercase mb-4">
            Ближайшие мероприятия
          </h2>
          <p className="text-sm tracking-widest text-gray-500 uppercase">
            23, 24, 25, 26 Апреля 2026
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white flex gap-0 shadow-sm overflow-hidden"
            >
              {/* Image */}
              <div className="w-40 md:w-48 flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-medium">{event.date}</p>
                  <h3 className="text-sm font-bold leading-snug text-black uppercase tracking-wide">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                      {event.subtitle}
                    </p>
                  )}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <button className="self-start bg-black text-white text-xs px-4 py-2 hover:bg-gray-800 transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
