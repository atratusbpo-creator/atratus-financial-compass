import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";
import QuizModal from "@/components/QuizModal";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  const openQuiz = () => setQuizOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenQuiz={openQuiz} />
      <Hero onOpenQuiz={openQuiz} />
      <Services onOpenQuiz={openQuiz} />
      <Plans onOpenQuiz={openQuiz} />
      <Footer />
      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} />
    </div>
  );
};

export default Index;
