import heroImage from "@/assets/hero-cleaning.jpg";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma higienização.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Sala de estar limpa e higienizada"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <p className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold tracking-wide uppercase border border-accent/30 backdrop-blur-sm fade-in-up">
          ⚠️ Alerta de Saúde
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-900 leading-tight mb-6 text-primary-foreground fade-in-up" style={{ animationDelay: '0.1s' }}>
          Seu sofá pode estar acumulando{" "}
          <span className="text-accent">milhões de ácaros invisíveis</span>{" "}
          neste momento.
        </h1>
        <p className="text-lg md:text-xl mb-4 text-primary-foreground/90 font-body fade-in-up" style={{ animationDelay: '0.2s' }}>
          Higienização profunda que elimina ácaros, bactérias e odores — sem encharcar o tecido.
        </p>
        <p className="text-base md:text-lg mb-8 font-semibold text-accent fade-in-up" style={{ animationDelay: '0.3s' }}>
          🛡️ Proteja sua família hoje.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full text-lg font-heading font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <MessageCircle className="w-6 h-6" />
          Agendar Higienização Agora no WhatsApp
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
