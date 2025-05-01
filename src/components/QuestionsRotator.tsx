
import { useState, useEffect } from "react";
import { QuestionCard } from "./QuestionCard";
import questionsData from "@/data/questions.json";

export function QuestionsRotator() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to rotate to the next question
  const rotateToNextQuestion = () => {
    setIsTransitioning(true);
    
    // After fade-out animation completes, change the question
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => 
        prevIndex === questionsData.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500); // Match this with the fade-out animation duration
  };

  // Set up the timer for automatic rotation
  useEffect(() => {
    const timer = setInterval(() => {
      rotateToNextQuestion();
    }, 20000); // 20 seconds

    // Clear the timer on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <QuestionCard question={questionsData[currentQuestionIndex]} />
      </div>
      
      <div className="mt-8 flex gap-2">
        <button
          onClick={rotateToNextQuestion}
          className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          Next Question
        </button>
        
        <div className="mt-4 flex justify-center gap-1">
          {questionsData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentQuestionIndex === index
                  ? "bg-primary"
                  : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
