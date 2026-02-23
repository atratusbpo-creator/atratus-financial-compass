import { Shield, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5518991621455?text=Olá! Gostaria de saber mais sobre os serviços da Atratus.";

  return (
    <footer id="contato" className="border-t border-white/10 bg-radial-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 -ml-[50px]">
              <img
                src="/logo.png"
                alt="Atratus Logo"
                style={{ width: '650px', height: '100px' }}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-light leading-relaxed text-white/70">
              Gestão e Inteligência Financeira. Mais de 20 anos transformando a saúde financeira de empresas.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <a href="#servicos" className="text-sm font-light text-white/70 hover:text-white">Serviços</a>
              <a href="#planos" className="text-sm font-light text-white/70 hover:text-white">Planos</a>
              <a href="#contato" className="text-sm font-light text-white/70 hover:text-white">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5518991621455" className="flex items-center gap-2 text-sm font-light text-white/70 hover:text-white">
                <Phone className="h-4 w-4 text-accent" />
                (18) 99162-1455
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-light text-white/70 hover:text-white">
                <MessageCircle className="h-4 w-4 text-success" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs font-light text-white/50">
            © {new Date().getFullYear()} Atratus – Gestão e Inteligência Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg shadow-success/20 transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </footer>
  );
};

export default Footer;
