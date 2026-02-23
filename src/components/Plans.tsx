import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlansProps {
  onOpenQuiz: () => void;
}

const Plans = ({ onOpenQuiz }: PlansProps) => {
  return (
    <section id="planos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Planos</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Escolha o plano ideal
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Essencial */}
          <div className="flex flex-col rounded-2xl border border-border/50 bg-card p-8">
            <h3 className="mb-1 font-display text-2xl font-bold text-foreground">Essencial</h3>
            <p className="mb-8 text-sm text-muted-foreground">Fluxo de Caixa e Operação</p>
            <ul className="mb-8 flex-1 space-y-4">
              {["Contas a pagar e receber", "Conciliação bancária", "Fluxo de caixa semanal", "Relatórios operacionais", "Suporte por e-mail"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              onClick={onOpenQuiz}
              variant="outline"
              className="w-full border-primary/30 text-primary hover:bg-primary/10"
            >
              Começar
            </Button>
          </div>

          {/* Performance */}
          <div className="relative flex flex-col rounded-2xl border-2 border-primary/50 bg-card p-8 shadow-lg shadow-primary/5">
            <Badge className="absolute -top-3 right-6 bg-primary text-primary-foreground hover:bg-primary">
              Mais Popular
            </Badge>
            <h3 className="mb-1 font-display text-2xl font-bold text-foreground">Performance</h3>
            <p className="mb-8 text-sm text-muted-foreground">Lucro Real e Estratégia</p>
            <ul className="mb-8 flex-1 space-y-4">
              {[
                "Tudo do plano Essencial",
                "DRE mensal detalhado",
                "Análise de lucratividade",
                "Planejamento estratégico",
                "Reuniões mensais de resultados",
                "Suporte prioritário",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              onClick={onOpenQuiz}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Quero Performance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
