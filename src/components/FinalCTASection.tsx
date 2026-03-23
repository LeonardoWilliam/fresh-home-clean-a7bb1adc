import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma higienização.";

const FinalCTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/80" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm text-primary-foreground text-sm font-semibold border border-white/20">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Vagas limitadas esta semana
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground mb-8 leading-tight">
          Respire tranquilidade. Durma em um ambiente realmente limpo.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-xl mx-auto">
          Agende agora e transforme a saúde do seu lar. Atendimento rápido, profissional e sem complicação.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white text-primary px-12 py-6 rounded-full text-xl font-heading font-black shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-7 h-7" />
          Quero Agendar Minha Higienização
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;