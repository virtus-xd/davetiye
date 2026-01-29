import { useEffect, useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2026-02-07T19:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTEwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-6">
          <Heart className="w-16 h-16 mx-auto text-gold-500 fill-gold-500 animate-pulse" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-gray-800 mb-4 animate-slide-up">
          Anıl & Nisa
        </h1>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6"></div>

        <p className="text-2xl md:text-3xl text-gray-600 font-light mb-2 animate-slide-up delay-100 font-serif">
          Sözleniyoruz.
        </p>

        <p className="text-xl md:text-2xl text-gold-600 mb-8 animate-slide-up delay-200 font-serif">
          7 Şubat Cumartesi
        </p>

        <p className="text-3xl md:text-4xl text-gray-800 font-serif mb-12 animate-slide-up delay-300">
          2026
        </p>

        <div className="flex justify-center gap-4 md:gap-8 mb-12 animate-slide-up delay-400">
          {[
            { label: 'Gün', value: timeLeft.days },
            { label: 'Saat', value: timeLeft.hours },
            { label: 'Dakika', value: timeLeft.minutes },
            { label: 'Saniye', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="bg-white/80 backdrop-blur-sm border border-gold-200 rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-gold-600 font-serif">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 font-sans">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-700 animate-slide-up delay-500 font-serif">
          Cicim Organizasyon Davet Evi
        </p>
        <p className="text-gray-500 animate-slide-up delay-600 font-sans">
          Selçuklu/Konya
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold-500" />
      </div>

    </section>
  );
}
