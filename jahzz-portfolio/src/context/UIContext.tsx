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
    description: "Leading development of scalable web applications using React, Next.js, and cloud technologies.",
    technologies: ["React", "TypeScript", "Next.js", "GitHub Projects", "PostgreSQL", "Confluence"],
  },
  {
    id: "2",
    title: "Personal Tutor",
    company: "University of Houston",
    period: "Aug 2023 - Dec 2023",
    description: "Provided personalized tutoring in college algebra, helping students improve their understanding and grades.",
    technologies: ["Communication", "Problem-Solving", "Patience", "Adaptability", "Flexibility"],
  },
  {
    id: "3",
    title: "Cashier & Dining Room Trainer",
    company: "Panera Bread",
    period: "Aug 2021 - Sep 2022",
    description: "Ensured quality cashier and dining room operations, delivering excellent customer service and efficient workflow.",
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
