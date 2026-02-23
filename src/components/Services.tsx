import { ClipboardList, CreditCard, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  onOpenQuiz: () => void;
}

const services = [
  {
    icon: ClipboardList,
    title: "BPO Administrativo",
    description: "Organização financeira e operacional completa para que você foque no que realmente importa: crescer.",
  },
  {
    icon: CreditCard,
    title: "Intermediação Financeira",
    description: "Modernização dos seus recebimentos com segurança, agilidade e as melhores condições do mercado.",
  },
  {
    icon: BarChart3,
    title: "Controladoria Estratégica",
    description: "Análise profunda de lucratividade e performance para decisões baseadas em dados reais.",
  },
];

const Services = ({ onOpenQuiz }: ServicesProps) => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Nossos Serviços</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Soluções sob medida para sua empresa
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <Button
                variant="ghost"
                onClick={onOpenQuiz}
                className="px-0 text-primary hover:bg-transparent hover:text-primary/80"
              >
                Saber Mais →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
