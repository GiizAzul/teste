export interface Question {
  id: string
  question: string
  type: "single" | "multiple" | "scale"
  options: {
    label: string
    value: string
    tags: string[]
  }[]
}

export interface QuestionnaireStep {
  id: string
  title: string
  description: string
  questions: Question[]
}

export const questionnaireSteps: QuestionnaireStep[] = [
  {
    id: "basics",
    title: "About You",
    description: "Let's start with some basic information to personalize your recommendations.",
    questions: [
      {
        id: "age",
        question: "What is your age range?",
        type: "single",
        options: [
          { label: "18-29", value: "18-29", tags: ["young"] },
          { label: "30-39", value: "30-39", tags: ["adult"] },
          { label: "40-49", value: "40-49", tags: ["adult", "aging"] },
          { label: "50-59", value: "50-59", tags: ["aging", "menopause"] },
          { label: "60+", value: "60+", tags: ["senior", "aging"] }
        ]
      },
      {
        id: "gender",
        question: "What is your biological sex?",
        type: "single",
        options: [
          { label: "Female", value: "female", tags: ["women"] },
          { label: "Male", value: "male", tags: ["men"] },
          { label: "Prefer not to say", value: "other", tags: [] }
        ]
      }
    ]
  },
  {
    id: "concerns",
    title: "Primary Health Concerns",
    description: "Select all areas where you'd like support or improvement.",
    questions: [
      {
        id: "primary_concerns",
        question: "What are your primary health concerns? (Select all that apply)",
        type: "multiple",
        options: [
          { label: "Hormone imbalance", value: "hormones", tags: ["menopause", "hot-flashes", "balance"] },
          { label: "Low energy or fatigue", value: "energy", tags: ["energy", "metabolism", "thyroid"] },
          { label: "Sleep issues", value: "sleep", tags: ["sleep", "insomnia", "relaxation", "melatonin"] },
          { label: "Skin concerns", value: "skin", tags: ["skin", "acne", "aging", "wrinkles"] },
          { label: "Chronic pain", value: "pain", tags: ["pain", "inflammation", "joint", "muscle"] },
          { label: "Weight management", value: "weight", tags: ["weight-loss", "metabolism", "appetite"] },
          { label: "Mental clarity / focus", value: "focus", tags: ["focus", "b12", "energy"] },
          { label: "Sexual health / libido", value: "libido", tags: ["libido", "energy"] }
        ]
      }
    ]
  },
  {
    id: "hormones",
    title: "Hormone Health",
    description: "Help us understand your hormone-related symptoms.",
    questions: [
      {
        id: "hormone_symptoms",
        question: "Do you experience any of these symptoms? (Select all that apply)",
        type: "multiple",
        options: [
          { label: "Hot flashes or night sweats", value: "hot_flashes", tags: ["hot-flashes", "menopause", "women"] },
          { label: "Mood swings or irritability", value: "mood", tags: ["anxiety", "balance", "women"] },
          { label: "Low libido", value: "low_libido", tags: ["libido", "men", "women"] },
          { label: "Fatigue despite adequate sleep", value: "fatigue", tags: ["energy", "thyroid", "metabolism"] },
          { label: "Difficulty losing weight", value: "weight_difficulty", tags: ["weight", "metabolism", "thyroid"] },
          { label: "Brain fog or poor concentration", value: "brain_fog", tags: ["focus", "thyroid"] },
          { label: "None of these", value: "none", tags: [] }
        ]
      }
    ]
  },
  {
    id: "skin",
    title: "Skin Health",
    description: "Tell us about any skin concerns you'd like to address.",
    questions: [
      {
        id: "skin_concerns",
        question: "What skin concerns do you have? (Select all that apply)",
        type: "multiple",
        options: [
          { label: "Acne or breakouts", value: "acne", tags: ["acne", "breakouts", "inflammation"] },
          { label: "Fine lines or wrinkles", value: "wrinkles", tags: ["aging", "wrinkles", "collagen"] },
          { label: "Dark spots or hyperpigmentation", value: "pigmentation", tags: ["dark-spots", "melasma", "pigmentation"] },
          { label: "Dry or flaky skin", value: "dry_skin", tags: ["dry-skin", "eczema"] },
          { label: "Eczema or dermatitis", value: "eczema", tags: ["eczema", "itching", "inflammation"] },
          { label: "None of these", value: "none", tags: [] }
        ]
      }
    ]
  },
  {
    id: "pain",
    title: "Pain & Discomfort",
    description: "Let us know about any pain or discomfort you experience.",
    questions: [
      {
        id: "pain_type",
        question: "What type of pain do you experience? (Select all that apply)",
        type: "multiple",
        options: [
          { label: "Joint pain or arthritis", value: "joint", tags: ["arthritis", "joints", "stiffness", "swelling"] },
          { label: "Muscle pain or soreness", value: "muscle", tags: ["pain", "muscle", "inflammation"] },
          { label: "Nerve pain or tingling", value: "nerve", tags: ["neuropathy", "nerve-pain", "tingling", "numbness"] },
          { label: "Migraines or headaches", value: "migraines", tags: ["migraine", "headache", "nausea"] },
          { label: "Back or neck pain", value: "back", tags: ["pain", "muscle", "inflammation"] },
          { label: "None of these", value: "none", tags: [] }
        ]
      },
      {
        id: "pain_frequency",
        question: "How often do you experience this pain?",
        type: "single",
        options: [
          { label: "Daily", value: "daily", tags: ["chronic"] },
          { label: "Several times a week", value: "frequent", tags: ["chronic"] },
          { label: "Occasionally", value: "occasional", tags: [] },
          { label: "Rarely", value: "rarely", tags: [] }
        ]
      }
    ]
  },
  {
    id: "wellness",
    title: "Wellness Goals",
    description: "What wellness areas would you like to focus on?",
    questions: [
      {
        id: "wellness_goals",
        question: "What are your wellness priorities? (Select all that apply)",
        type: "multiple",
        options: [
          { label: "Boost immune system", value: "immune", tags: ["immune", "vitamins"] },
          { label: "Increase energy levels", value: "energy", tags: ["energy", "b12", "metabolism"] },
          { label: "Improve sleep quality", value: "sleep", tags: ["sleep", "insomnia", "relaxation", "melatonin"] },
          { label: "Support bone health", value: "bones", tags: ["bones", "vitamins"] },
          { label: "Enhance mood and mental well-being", value: "mood", tags: ["mood", "anxiety"] },
          { label: "Healthy weight management", value: "weight", tags: ["weight-loss", "metabolism", "appetite"] }
        ]
      }
    ]
  }
]

export interface QuestionnaireAnswers {
  [questionId: string]: string | string[]
}

export function calculateRecommendedTags(answers: QuestionnaireAnswers): string[] {
  const tagCounts: Record<string, number> = {}
  
  for (const step of questionnaireSteps) {
    for (const question of step.questions) {
      const answer = answers[question.id]
      if (!answer) continue
      
      const selectedValues = Array.isArray(answer) ? answer : [answer]
      
      for (const value of selectedValues) {
        const option = question.options.find(o => o.value === value)
        if (option) {
          for (const tag of option.tags) {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1
          }
        }
      }
    }
  }
  
  // Sort tags by frequency and return top ones
  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
}
