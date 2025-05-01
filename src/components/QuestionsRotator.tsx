
import { useState, useEffect } from "react";
import { QuestionCard } from "./QuestionCard";
import questionsData from "@/data/questions.json";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Button } from "./ui/button";

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

  const rotateToPreviousQuestion = () => {
    setIsTransitioning(true);
    
    // After fade-out animation completes, change the question
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => 
        prevIndex === 0 ? questionsData.length - 1 : prevIndex - 1
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
      
      <div className="mt-8 flex flex-col gap-4 items-center">
        <div className="flex gap-3 items-center">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={rotateToPreviousQuestion}
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          
          <Button
            onClick={rotateToNextQuestion}
            variant="secondary"
            className="rounded-full flex gap-2"
          >
            <span>Next Question</span>
            <SkipForward className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={rotateToNextQuestion}
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
        
        <div className="flex justify-center gap-1 mt-2">
          {questionsData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                currentQuestionIndex === index
                  ? "bg-primary w-4"
                  : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
