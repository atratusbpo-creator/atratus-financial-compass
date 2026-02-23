import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const steps = [
  {
    question: "Qual o principal desafio da sua empresa hoje?",
    options: [
      "Organizar as contas e ganhar tempo",
      "Entender para onde o dinheiro está indo (Lucratividade)",
      "Modernizar e dar segurança aos recebimentos",
    ],
  },
  {
    question: "Qual o faturamento médio mensal do negócio?",
    options: [
      "Até R$ 50 mil",
      "Entre R$ 50 mil e R$ 200 mil",
      "Acima de R$ 200 mil",
    ],
  },
  {
    question: "Qual o seu setor de atuação?",
    options: [
      "Saúde/Clínicas",
      "Gastronomia/Restaurantes",
      "Outros Serviços",
    ],
  },
];

const QuizModal = ({ open, onOpenChange }: QuizModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    const message = `Olá! Acabei de realizar o diagnóstico na página da Atratus. Meu principal desafio é ${answers[0]}, meu faturamento é ${answers[1]} e sou do setor de ${answers[2]}. Gostaria de falar com o consultor.`;
    const url = `https://wa.me/5518991621455?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    // Reset
    setCurrentStep(0);
    setAnswers([]);
    onOpenChange(false);
  };

  const handleOpenChange = (val: boolean) => {
    if (!val) {
      setCurrentStep(0);
      setAnswers([]);
    }
    onOpenChange(val);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;
  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const hasAnswer = !!answers[currentStep];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="border-border/50 bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">
            Diagnóstico Gratuito
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Etapa {currentStep + 1} de {steps.length}
          </DialogDescription>
        </DialogHeader>

        <Progress value={progress} className="h-2 bg-secondary" />

        <div className="py-2">
          <p className="mb-4 text-sm font-medium text-foreground">{step.question}</p>
          <div className="space-y-3">
            {step.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full rounded-lg border p-4 text-left text-sm transition-all ${
                  answers[currentStep] === option
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border/50 bg-secondary/30 text-muted-foreground hover:border-primary/30 hover:bg-secondary/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-3">
          {currentStep > 0 ? (
            <Button variant="ghost" onClick={handleBack} className="text-muted-foreground">
              Voltar
            </Button>
          ) : (
            <div />
          )}

          {isLastStep ? (
            <Button
              onClick={handleFinish}
              disabled={!hasAnswer}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Concluir via WhatsApp
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!hasAnswer}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Próximo
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
