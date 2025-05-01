
import { QuestionsRotator } from "@/components/QuestionsRotator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Code, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">LUCSC CodeQuiz</span>
        </div>
        <ThemeToggle />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Brain className="h-10 w-10 text-primary" />
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              LUCSC Coding Questions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Master essential coding concepts with these common interview questions.
            Questions rotate automatically every 20 seconds!
          </p>
        </div>
        
        <QuestionsRotator />
      </main>
      
      <footer className="p-6 text-center text-sm text-muted-foreground">
        <p>© 2025 LUCSC Coding Questions. Helping developers level up their skills.</p>
      </footer>
    </div>
  );
}

export default Index;
