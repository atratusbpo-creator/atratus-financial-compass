import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero = ({ onOpenQuiz }: HeroProps) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            + de 20 anos de experiência
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Gestão e Inteligência{" "}
            <span className="text-primary">Financeira</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground md:text-xl">
            Transformamos a gestão financeira da sua empresa com soluções estratégicas que geram clareza, controle e lucratividade real.
          </p>
          <Button
            size="lg"
            onClick={onOpenQuiz}
            className="group h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            Solicitar Diagnóstico Gratuito
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
