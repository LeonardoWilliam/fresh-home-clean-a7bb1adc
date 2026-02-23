import beforeAfter from "@/assets/before-after-sofa.jpg";
import { ShieldCheck, Droplets, Sparkles, Wind, Home, Leaf } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, text: "Eliminação de ácaros e bactérias" },
  { icon: Wind, text: "Redução de alergias respiratórias" },
  { icon: Sparkles, text: "Remoção de manchas difíceis" },
  { icon: Droplets, text: "Secagem rápida — sem encharcar" },
  { icon: Home, text: "Atendimento domiciliar com hora marcada" },
  { icon: Leaf, text: "Produtos profissionais e seguros" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Por que escolher nosso <span className="text-primary">serviço?</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={beforeAfter}
              alt="Antes e depois da higienização do sofá"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold">
              ANTES
            </div>
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
              DEPOIS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
