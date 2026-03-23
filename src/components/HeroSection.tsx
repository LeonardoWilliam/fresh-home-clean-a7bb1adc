import heroImage from "@/assets/hero-cleaning.jpg";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma higienização.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Sala de estar limpa e higienizada"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-primary-foreground text-sm font-semibold tracking-wide border border-white/20 fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          ⚠️ Alerta de Saúde
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-[1.1] mb-8 text-primary-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
          Seu sofá pode estar acumulando{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">milhões de ácaros invisíveis</span>{" "}
          neste momento.
        </h1>
        <p className="text-lg md:text-xl mb-4 text-primary-foreground/85 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
          Higienização profunda que elimina ácaros, bactérias e odores — sem encharcar o tecido.
        </p>
        <p className="text-base md:text-lg mb-10 font-bold text-accent fade-in-up" style={{ animationDelay: '0.3s' }}>
          🛡️ Proteja sua família hoje.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-full text-lg font-heading font-bold shadow-2xl hover:text-green-400 hover:shadow-[0_20px_60px_-15px_hsl(142_70%_40%_/_0.5)] transition-all duration-300 hover:scale-105 fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <MessageCircle className="w-6 h-6" />
          Agendar Higienização Agora
        </a>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { number: "500+", label: "Clientes felizes" },
            { number: "5★", label: "Avaliação" },
            { number: "100%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-black text-primary-foreground">{stat.number}</p>
              <p className="text-xs text-primary-foreground/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up" style={{ animationDelay: '1s' }}>
        <ChevronDown className="w-6 h-6 text-primary-foreground/40 animate-bounce" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;