import dirtyWater from "@/assets/dirty-water-extraction.jpg";
import { AlertTriangle, Bug, Wind } from "lucide-react";

const problems = [
  {
    icon: Bug,
    title: "Ácaros e alergias",
    text: "Ácaros invisíveis vivem nos tecidos dos seus estofados e são a principal causa de rinite, asma e alergias respiratórias — especialmente em crianças.",
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Você sabe o que está <span className="text-destructive">escondido</span> no seu sofá?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O que os olhos não veem pode estar prejudicando a saúde da sua família todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={dirtyWater}
              alt="Água suja sendo extraída do sofá"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <p className="text-primary-foreground font-heading font-bold text-sm">
                Olha o que sai do seu sofá! 😱
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
