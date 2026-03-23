import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma higienização.";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Garantia", href: "#garantia" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-primary-foreground font-heading font-black text-lg">G</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-heading font-black text-lg tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-primary-foreground'}`}>
              Gêmeos Clean
            </span>
            <span className={`text-[10px] font-semibold uppercase tracking-widest transition-colors ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/60'}`}>
              Higienização Profissional
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all ${scrolled ? 'text-foreground/70 hover:text-primary hover:bg-primary/5' : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-whatsapp text-white px-5 py-2.5 rounded-full text-sm font-bold hover:text-green-400 transition-all shadow-md hover:shadow-lg hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar Agora
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border shadow-xl">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-3 rounded-full text-sm font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar Agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;