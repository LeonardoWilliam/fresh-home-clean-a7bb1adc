import familyImage from "@/assets/family-clean-home.jpg";
import { Heart } from "lucide-react";

const StorySection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={familyImage}
              alt="Família feliz em ambiente limpo"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-4 text-accent">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-heading font-semibold text-sm uppercase tracking-wide">Nossa História</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Dois irmãos, um sonho e muita <span className="text-primary">determinação</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tudo começou quando dois irmãos (gêmeos) decidiram largar a estabilidade do emprego CLT para empreender. Com uma única máquina, pouco dinheiro e muita fé, eles mergulharam no universo da higienização profissional de estofados.
              </p>
              <p>
                Trabalharam dia e noite, de casa em casa, conquistando cada cliente com honestidade, dedicação e um serviço que realmente fazia diferença na vida das famílias.
              </p>
              <p className="font-semibold text-foreground">
                Hoje, cada sofá higienizado carrega o mesmo propósito do primeiro dia: proteger a saúde de quem você ama. 💙
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
