import familyImage from "@/assets/family-clean-home.jpg";
import { Heart, Quote } from "lucide-react";

const StorySection = () => {
  return (
    <section id="sobre" className="py-24 section-gradient relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={familyImage}
                alt="Família feliz em ambiente limpo"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span className="font-heading font-semibold text-xs uppercase tracking-widest text-accent">Nossa História</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-8 leading-tight">
              Dois irmãos, um sonho e muita <span className="text-primary">determinação</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
              <p>
                Tudo começou quando dois irmãos (gêmeos) decidiram largar a estabilidade do emprego CLT para empreender. Com uma única máquina, pouco dinheiro e muita fé, eles mergulharam no universo da higienização profissional de estofados.
              </p>
              <p>
                Trabalharam dia e noite, de casa em casa, conquistando cada cliente com honestidade, dedicação e um serviço que realmente fazia diferença na vida das famílias.
              </p>
            </div>
            <div className="mt-8 bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
              <Quote className="w-5 h-5 text-primary mb-2" />
              <p className="font-heading font-bold text-foreground text-lg">
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