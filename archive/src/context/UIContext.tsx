"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface UIContextType {
  darkMode: boolean
  toggleDarkMode: () => void
  experiences: Experience[]
}

const UIContext = createContext<UIContextType | undefined>(undefined)

const experienceData: Experience[] = [
  {
    id: "1",
    title: "Software Developer",
    company: "Nebula Labs",
    period: "Aug 2025 - Present",
    description: "Worked amongst a team of engineers and designers to develop UTD Clubs, a web application that enables students to discover, follow, and stay up-to-date with 250+ campus organizations and events.",
    technologies: ["React.js", "TypeScript", "Next.js", "GitHub", "Figma", "Confluence"],
  },
  {
    id: "2",
    title: "Personal Tutor",
    company: "University of Houston",
    period: "Aug 2023 - Dec 2023",
    description: "Provided personalized tutoring in college algebra to help students improve their understanding of the algebraic fundamental concepts.",
    technologies: ["Communication", "Problem-Solving", "", "Adaptability", "Flexibility"],
  },
  {
    id: "3",
    title: "Cashier & Dining Room Trainer",
    company: "Panera Bread",
    period: "Aug 2021 - Sep 2022",
    description: "Ensured quality cashier and dining room operations to deliver excellent customer service and boost satisfaction.",
    technologies: ["Customer Service", "Team Leadership", "Training", "Communication"],
  },
]

export function UIProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <UIContext.Provider value={{ darkMode, toggleDarkMode, experiences: experienceData }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider")
  }
  return context
}
