import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara S.",
    text: "Meu sofá parecia novo depois da higienização! A diferença foi absurda. Recomendo demais!",
    highlight: "Sofá parecia novo",
  },
  {
    name: "Roberto M.",
    text: "Profissionalismo do início ao fim. Chegaram no horário, explicaram tudo e o resultado surpreendeu. Cheiro agradável e tecido impecável.",
    highlight: "Atendimento profissional",
  },
  {
    name: "Juliana P.",
    text: "Meus filhos tinham muita alergia e depois da higienização do colchão melhorou muito. Resultado surpreendente, vou fazer de novo!",
    highlight: "Resultado surpreendente",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 section-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <div className="flex justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">Avaliação 5 estrelas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-card rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-accent font-bold mt-1">{t.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;