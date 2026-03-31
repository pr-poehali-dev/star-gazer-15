import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const items = [
  {
    year: '2000',
    text: 'Санкт-Петербургский государственный университет культуры и искусств — специальность «Менеджмент социально-культурной деятельности»',
  },
  {
    year: '2005',
    text: 'Академия Стандартизации, метрологии и сертификации Федерального Агентства — курс «Система менеджмента качества на базе стандарта ИСО 9000»',
  },
  {
    year: '2006',
    text: 'ГОУ ВПО «Московский энергетический институт (ТУ)» — курс «Организация и проведение торгов для государственных и муниципальных нужд», г. Москва',
  },
  {
    year: '2008',
    text: 'Курс «Тайм-менеджмент» Глеба Архангельского',
  },
  {
    year: '2014',
    text: 'Московский институт международных социально-гуманитарных связей — курс «Социальное предпринимательство», г. Москва',
  },
  {
    year: '2016',
    text: 'Академия психологии и педагогики Южного Федерального Университета — специализация «Психология здоровья»',
  },
  {
    year: '2018',
    text: 'Virtus Coach Int. — обучающая программа «Философия и Технология Коучинга» (Сертификат № 495-18)',
  },
  {
    year: '2019',
    text: 'Европейский Центр Бизнес Коучинга — обучающая программа «Лидер как коуч» (сертификат № 2019/RU-486)',
  },
  {
    year: '2019',
    text: 'Международный институт Коуч менеджмента — курс «Коуч профессионал»',
  },
  {
    year: '2025',
    text: 'Южный Федеральный Университет — магистратура, специализация «Психология социальной поддержки и адаптации»',
  },
];

function TimelineItem({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid grid-cols-[1fr_auto_1fr] items-start gap-x-6 transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Left side */}
      <div className={cn('pb-10', isLeft ? 'text-right pr-2' : '')}>
        {isLeft && (
          <div className="inline-block">
            <span className="block text-xs font-bold text-orange-400 tracking-widest mb-1">{item.year}</span>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs ml-auto">{item.text}</p>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-orange-400 border-2 border-orange-300 shadow-[0_0_10px_rgba(251,146,60,0.6)] z-10 mt-1" />
        <div className="w-px flex-1 bg-gradient-to-b from-orange-400/60 to-white/10 min-h-[2.5rem]" />
      </div>

      {/* Right side */}
      <div className={cn('pb-10', !isLeft ? 'text-left pl-2' : '')}>
        {!isLeft && (
          <div className="inline-block">
            <span className="block text-xs font-bold text-orange-400 tracking-widest mb-1">{item.year}</span>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">{item.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase mb-3">
            Образование
          </h2>
          <div className="w-12 h-0.5 bg-orange-400 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {items.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
