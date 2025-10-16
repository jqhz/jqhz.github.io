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
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description: "Built responsive user interfaces and improved application performance by 40%.",
    technologies: ["React", "JavaScript", "CSS", "Redux", "Jest"],
  },
  {
    id: "3",
    title: "Junior Developer",
    company: "StartupHub",
    period: "2019 - 2020",
    description: "Developed features for multiple client projects and collaborated with design teams.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase"],
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
