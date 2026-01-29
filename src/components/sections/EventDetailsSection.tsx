import { Clock, MapPin, Music, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function EventDetailsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const events = [
    {
      icon: Clock,
      title: 'Açılış',
      time: '19:00 ',
      description: 'Bu özel anımızda yanımızda olun.',
    },
    {
      icon: Music,
      title: 'İsteme',
      time: '19:30 ',
      description: 'Bol bol fotoğraf çekmeyi unutmayın!',
    },
    {
      icon: Calendar,
      title: 'Yüzük takma merasimi',
      time: '20:00 ',
      description: 'Sizi de aramızda görmek istiyoruz!',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-cream to-gold-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-5xl text-gray-800 mb-4">Etkinlik Detayları</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-sans">
            Sözümüz Cicim Organizasyon Davet Evinde Olacaktır
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gold-600 font-semibold text-xl mb-3 font-sans">
                  {event.time}
                </p>
                <p className="text-gray-600 font-sans">{event.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`bg-white rounded-lg shadow-xl p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-2xl text-gray-800 mb-2">Mekan</h3>
              <p className="text-gray-700 mb-1 font-sans">Cicim Organizasyon Davet Evi</p>
              <p className="text-gray-600 font-sans">Uzunharmanlar, Çeçenistan Cd.</p>
              <p className="text-gray-600 mb-4 font-sans">Selçuklu/Konya</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Cicim+Organizasyon+Davet+Evi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-200 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-sans"
              >
                Konuma Git
              </a>
            </div>
          </div>

          <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.386590537491!2d32.4814777!3d37.8512439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085cb307a7d1b%3A0xf4f6f40cd329e295!2sCicim%20Organizasyon%20Davet%20Evi!5e0!3m2!1str!2str!4v1769534605180!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mekan Konumu"
            ></iframe>
          </div>
        </div>


      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
