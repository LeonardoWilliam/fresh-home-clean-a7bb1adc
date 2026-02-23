const FooterSection = () => {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-background/60 text-sm">
          © {new Date().getFullYear()} Higienização Profissional de Estofados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
