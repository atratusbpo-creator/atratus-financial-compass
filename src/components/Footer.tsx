import { Shield, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5518991621455?text=Olá! Gostaria de saber mais sobre os serviços da Atratus.";

  return (
    <footer id="contato" className="border-t border-border/50 bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-7 w-7 text-primary" />
              <span className="font-display text-lg font-bold text-foreground">Atratus</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Gestão e Inteligência Financeira. Mais de 20 anos transformando a saúde financeira de empresas.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary">Serviços</a>
              <a href="#planos" className="text-sm text-muted-foreground hover:text-primary">Planos</a>
              <a href="#contato" className="text-sm text-muted-foreground hover:text-primary">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5518991621455" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                (18) 99162-1455
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <MessageCircle className="h-4 w-4 text-accent" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Atratus – Gestão e Inteligência Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </footer>
  );
};

export default Footer;
