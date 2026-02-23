import { Star } from "lucide-react";

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
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-warning fill-warning" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">Avaliação 5 estrelas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="border-t border-border pt-3">
                <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-accent font-semibold">{t.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
