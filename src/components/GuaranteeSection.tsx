import mattressImage from "@/assets/mattress-cleaning.jpg";
import { ShieldCheck, Check } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section id="garantia" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={mattressImage}
                alt="Higienização profunda de colchão"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-8">
              <ShieldCheck className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight">
              Garantia de <span className="text-accent">satisfação</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nós confiamos tanto no nosso trabalho que oferecemos garantia total. Se você não ficar satisfeito, revisamos o serviço sem custo adicional.
            </p>
            <div className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 rounded-2xl p-8">
              <p className="font-heading font-black text-foreground text-xl mb-4">
                "Satisfação garantida ou revisamos o serviço."
              </p>
              <div className="space-y-3">
                {["Sem custo adicional", "Revisão completa", "Compromisso com qualidade"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;