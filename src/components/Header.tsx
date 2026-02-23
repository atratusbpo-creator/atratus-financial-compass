import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenQuiz: () => void;
}

const Header = ({ onOpenQuiz }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/30 bg-gradient-to-b from-white/5 to-transparent shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-5 md:px-10">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Atratus Logo" className="h-[50px] w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-8 md:flex mr-[20px]">
          <a href="#servicos" className="text-sm font-light text-white/80 transition-colors hover:text-white">Serviços</a>
          <a href="#planos" className="text-sm font-light text-white/80 transition-colors hover:text-white">Planos</a>
          <a href="#contato" className="text-sm font-light text-white/80 transition-colors hover:text-white">Contato</a>
        </nav>



        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-primary/95 backdrop-blur-lg md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-5 py-4">
            <a href="#servicos" onClick={() => setMobileOpen(false)} className="text-sm font-light text-white/80 hover:text-white">Serviços</a>
            <a href="#planos" onClick={() => setMobileOpen(false)} className="text-sm font-light text-white/80 hover:text-white">Planos</a>
            <a href="#contato" onClick={() => setMobileOpen(false)} className="text-sm font-light text-white/80 hover:text-white">Contato</a>


          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
