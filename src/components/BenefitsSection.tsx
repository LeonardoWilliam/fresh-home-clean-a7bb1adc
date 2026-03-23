import beforeAfter from "@/assets/before-after-sofa.jpg";
import { ShieldCheck, Droplets, Sparkles, Wind, Home, Leaf } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, text: "Eliminação de ácaros e bactérias", color: "text-primary" },
  { icon: Wind, text: "Redução de alergias respiratórias", color: "text-accent" },
  { icon: Sparkles, text: "Remoção de manchas difíceis", color: "text-primary" },
  { icon: Droplets, text: "Secagem rápida — sem encharcar", color: "text-accent" },
  { icon: Home, text: "Atendimento domiciliar com hora marcada", color: "text-primary" },
  { icon: Leaf, text: "Produtos profissionais e seguros", color: "text-accent" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4 px-4 py-1.5 rounded-full bg-accent/10">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-4">
            Por que escolher a <span className="text-primary">Gêmeos Clean?</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-card rounded-2xl p-5 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <b.icon className={`w-6 h-6 ${b.color}`} />
                </div>
                <p className="text-sm font-semibold text-foreground">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-30" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={beforeAfter}
                alt="Antes e depois da higienização do sofá"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                ANTES
              </div>
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                DEPOIS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;