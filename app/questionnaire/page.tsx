"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { questionnaireSteps, type QuestionnaireAnswers, calculateRecommendedTags } from "@/lib/questionnaire"
import { cn } from "@/lib/utils"

export default function QuestionnairePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({})

  const step = questionnaireSteps[currentStep]
  const totalSteps = questionnaireSteps.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleSingleSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleMultipleSelect = (questionId: string, value: string) => {
    setAnswers(prev => {
      const current = prev[questionId]
      const currentArray = Array.isArray(current) ? current : []
      
      if (value === "none") {
        return { ...prev, [questionId]: ["none"] }
      }
      
      const filtered = currentArray.filter(v => v !== "none")
      
      if (filtered.includes(value)) {
        return { ...prev, [questionId]: filtered.filter(v => v !== value) }
      } else {
        return { ...prev, [questionId]: [...filtered, value] }
      }
    })
  }

  const isStepValid = () => {
    return step.questions.every(q => {
      const answer = answers[q.id]
      if (!answer) return false
      if (Array.isArray(answer)) return answer.length > 0
      return true
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Calculate recommendations and navigate
      const tags = calculateRecommendedTags(answers)
      const tagsParam = encodeURIComponent(tags.join(","))
      router.push(`/questionnaire/results?tags=${tagsParam}`)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary/20">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep + 1} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Indicators */}
          <div className="mb-8 flex justify-center gap-2">
            {questionnaireSteps.map((s, index) => (
              <div
                key={s.id}
                className={cn(
                  "h-2 w-8 rounded-full transition-colors",
                  index < currentStep 
                    ? "bg-primary" 
                    : index === currentStep 
                      ? "bg-primary" 
                      : "bg-border"
                )}
              />
            ))}
          </div>

          {/* Question Card */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h1 className="font-serif text-2xl text-foreground sm:text-3xl">
              {step.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {step.description}
            </p>

            <div className="mt-8 space-y-8">
              {step.questions.map((question) => (
                <div key={question.id}>
                  <h2 className="font-medium text-foreground mb-4">
                    {question.question}
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {question.options.map((option) => {
                      const currentAnswer = answers[question.id]
                      const isSelected = question.type === "single"
                        ? currentAnswer === option.value
                        : Array.isArray(currentAnswer) && currentAnswer.includes(option.value)

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => 
                            question.type === "single"
                              ? handleSingleSelect(question.id, option.value)
                              : handleMultipleSelect(question.id, option.value)
                          }
                          className={cn(
                            "flex items-center gap-3 rounded-lg border p-4 text-left transition-all",
                            isSelected
                              ? "border-primary bg-primary/5 text-foreground"
                              : "border-border bg-background text-foreground hover:border-primary/50"
                          )}
                        >
                          <div className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-muted-foreground"
                          )}>
                            {isSelected && <Check className="h-3 w-3" />}
                          </div>
                          <span className="text-sm">{option.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                {currentStep === totalSteps - 1 ? (
                  <>
                    See My Recommendations
                    <Check className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Skip Link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Not sure? You can{" "}
            <button
              type="button"
              onClick={() => router.push("/products")}
              className="text-primary hover:underline"
            >
              browse all products
            </button>{" "}
            instead.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
