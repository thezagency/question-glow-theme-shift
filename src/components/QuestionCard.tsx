
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Code } from "lucide-react";

type Question = {
  id: number;
  question: string;
  answer: string;
};

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="question-card w-full max-w-4xl backdrop-blur-sm bg-card/90 shadow-lg border-t border-primary/20">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <CardTitle className="text-2xl font-bold text-primary">Coding Challenge</CardTitle>
        </div>
        <CardDescription className="text-xl font-medium text-foreground mt-4">
          {question.question}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4 border-t border-border/40">
        <div className="bg-muted/50 p-4 rounded-md">
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Solution:</h4>
          <p className="text-lg">{question.answer}</p>
        </div>
      </CardContent>
    </Card>
  );
}
