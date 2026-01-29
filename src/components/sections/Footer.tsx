import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-gold-400 via-gold-300 to-gold-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <Heart className="w-12 h-12 mx-auto text-white fill-white" />
        </div>

        <h3 className="font-serif text-3xl text-white mb-4">
          Anıl & Nisa
        </h3>

        <p className="text-white/90 mb-6 font-sans">
          Sözümüzde sizleri de görmek istiyoruz!
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110 border border-white/20"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110 border border-white/20"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
          <a
            href="mailto:wedding@alexandraandjames.com"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110 border border-white/20"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
        </div>

        <div className="mb-6">
          <p className="text-white/80 text-sm mb-2 font-sans">
            #AnılveNisa2026
          </p>
          <p className="text-white/70 text-xs font-sans">
            Sorularınız için lütfen bizimle iletişime geçin!{' '}
            <a
              href="mailto:sanaldavetiyem@gmail.com"
              className="underline hover:text-white"
            >
              sanaldavetiyem@gmail.com
            </a>
          </p>
        </div>

        <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6"></div>

        <p className="text-white/60 text-sm font-sans">
          Aşk ile yapıldı
        </p>
      </div>
    </footer>
  );
}
