import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenQuiz: () => void;
}

const Header = ({ onOpenQuiz }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">Atratus</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-primary">Serviços</a>
          <a href="#planos" className="text-sm text-muted-foreground transition-colors hover:text-primary">Planos</a>
          <a href="#contato" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contato</a>
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
            Área do Cliente
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#servicos" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-primary">Serviços</a>
            <a href="#planos" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-primary">Planos</a>
            <a href="#contato" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-primary">Contato</a>
            <Button variant="outline" size="sm" className="w-fit border-primary/30 text-primary hover:bg-primary/10">
              Área do Cliente
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
