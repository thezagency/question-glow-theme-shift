
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

type Question = {
  id: number;
  question: string;
  answer: string;
};

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  
  // Reset showAnswer when question changes
  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <Card className="question-card w-full max-w-3xl transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        {showAnswer ? (
          <p className="text-lg">{question.answer}</p>
        ) : (
          <button
            onClick={() => setShowAnswer(true)}
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reveal Answer
          </button>
        )}
      </CardContent>
    </Card>
  );
}
