import mattressImage from "@/assets/mattress-cleaning.jpg";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={mattressImage}
              alt="Higienização profunda de colchão"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <ShieldCheck className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Garantia de <span className="text-accent">satisfação</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nós confiamos tanto no nosso trabalho que oferecemos garantia total. Se você não ficar satisfeito, revisamos o serviço sem custo adicional.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <p className="font-heading font-bold text-foreground text-lg">
                "Satisfação garantida ou revisamos o serviço."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
