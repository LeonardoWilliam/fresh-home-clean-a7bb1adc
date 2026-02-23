import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma higienização.";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
          Respire tranquilidade. Durma em um ambiente realmente limpo.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10">
          Agende agora e transforme a saúde do seu lar. Atendimento rápido, profissional e sem complicação.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-10 py-5 rounded-full text-xl font-heading font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-7 h-7" />
          Quero Agendar Minha Higienização Agora
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
