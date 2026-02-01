import { Clock, MapPin, Music, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Sparkles from '../Sparkles';

export default function NewEventDetailsSection() {
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
            time: '20:00',
            description: 'Bu özel anımızda yanımızda olun.',
        },
        {
            icon: Music,
            title: 'İsteme Merasimi',
            time: '20:30',
            description: 'Bol bol fotoğraf çekmeyi unutmayın!',
        },
        {
            icon: Calendar,
            title: 'Söz Merasimi',
            time: '21:00',
            description: 'Sizi de aramızda görmek istiyoruz!',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-[#0f1a12] text-[#f7f5ef] relative overflow-hidden"
        >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

            <Sparkles />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="font-serif text-5xl md:text-6xl text-gold-300 mb-6 drop-shadow-lg">Etkinlik Detayları</h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-gold-500/30"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-gold-500"></div>
                        <div className="h-[1px] w-12 bg-gold-500/30"></div>
                    </div>
                    <p className="text-xl text-gray-400 font-light font-sans max-w-2xl mx-auto">
                        Sözümüz Cicim Organizasyon Davet Evinde Gerçekleşecektir
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white/5 backdrop-blur-sm border border-gold-500/10 rounded-xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-gold-500/30 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold-500/20">
                                    <Icon className="w-7 h-7 text-gold-300" />
                                </div>
                                <h3 className="font-serif text-2xl text-gold-100 mb-3 group-hover:text-gold-300 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-gold-400 font-medium text-lg mb-4 font-sans tracking-wide">
                                    {event.time}
                                </p>
                                <p className="text-gray-400 text-sm font-sans leading-relaxed">{event.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Map Section */}
                <div className={`relative bg-gradient-to-br from-[#162419] to-[#0f1a12] rounded-2xl border border-gold-500/10 p-1 shadow-2xl overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>

                    <div className="grid md:grid-cols-3 gap-0">

                        {/* Info Panel */}
                        <div className="p-10 flex flex-col justify-center space-y-6 md:border-r border-gold-500/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold-500/10 rounded-full text-gold-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl text-gold-200 mb-2">Mekan</h3>
                                    <p className="text-gray-300 font-medium font-sans">Cicim Organizasyon Davet Evi</p>
                                    <p className="text-gray-500 font-sans text-sm mt-1">Uzunharmanlar, Çeçenistan Cd.</p>
                                    <p className="text-gray-500 font-sans text-sm">Selçuklu / Konya</p>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Cicim+Organizasyon+Davet+Evi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center px-8 py-3 bg-gold-600/20 hover:bg-gold-600/30 text-gold-300 hover:text-gold-200 border border-gold-500/30 rounded-full transition-all duration-300 font-sans text-sm tracking-wider uppercase group"
                            >
                                Konuma Git <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>

                        {/* Map Iframe */}
                        <div className="md:col-span-2 h-[400px] md:h-auto bg-[#1a1a1a] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.386590537491!2d32.4814777!3d37.8512439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085cb307a7d1b%3A0xf4f6f40cd329e295!2sCicim%20Organizasyon%20Davet%20Evi!5e0!3m2!1str!2str!4v1769534605180!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Mekan Konumu"
                                className="w-full h-full"
                            ></iframe>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
