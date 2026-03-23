import dirtyWater from "@/assets/dirty-water-extraction.jpg";
import { AlertTriangle, Bug, Wind } from "lucide-react";

const problems = [
  {
    icon: Bug,
    title: "Ácaros e alergias",
    text: "Ácaros invisíveis vivem nos tecidos dos seus estofados e são a principal causa de rinite, asma e alergias — especialmente em crianças.",
  },
  {
    icon: AlertTriangle,
    title: "Acúmulo invisível",
    text: "Colchões e sofás acumulam suor, células mortas, poeira e microrganismos todos os dias. Você não vê, mas eles estão lá.",
  },
  {
    icon: Wind,
    title: "Limpeza comum não basta",
    text: "Aspirar ou usar produtos caseiros remove apenas a sujeira superficial. A contaminação profunda exige equipamento profissional.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-destructive mb-4 px-4 py-1.5 rounded-full bg-destructive/10">
            Atenção
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-4">
            Você sabe o que está <span className="text-destructive">escondido</span> no seu sofá?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            O que os olhos não veem pode estar prejudicando a saúde da sua família todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-5 items-start group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-destructive/20 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <p.icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-destructive/20 to-primary/20 rounded-3xl blur-2xl opacity-30" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={dirtyWater}
                alt="Água suja sendo extraída do sofá"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/90 to-transparent p-8">
                <p className="text-primary-foreground font-heading font-bold text-lg">
                  Olha o que sai do seu sofá! 😱
                </p>
                <p className="text-primary-foreground/60 text-sm mt-1">Sujeira invisível a olho nu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;