
import { QuestionsRotator } from "@/components/QuestionsRotator";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Curious Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover interesting questions and answers that rotate every 20 seconds.
            Click "Reveal Answer" to see the answer or wait for the next question!
          </p>
        </div>
        
        <QuestionsRotator />
      </main>
      
      <footer className="p-6 text-center text-sm text-muted-foreground">
        <p>© 2025 Curious Questions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
