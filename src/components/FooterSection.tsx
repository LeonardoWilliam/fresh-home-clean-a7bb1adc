import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg text-background mb-3">Gêmeos Clean</h3>
            <p className="text-background/50 text-sm leading-relaxed">
              Higienização profissional de estofados com qualidade, confiança e carinho.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-background mb-3 uppercase tracking-wide">Navegação</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Benefícios", "Depoimentos", "Garantia"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-background/50 text-sm hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-background mb-3 uppercase tracking-wide">Contato</h4>
            <div className="space-y-2">
              <a href="https://wa.me/5500000000000" className="flex items-center gap-2 text-background/50 text-sm hover:text-background transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Gêmeos Clean — Higienização Profissional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;