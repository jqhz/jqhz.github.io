"use client"

import { motion } from "framer-motion"
import { useUI } from "../context/UIContext"

export default function ExperienceMotion() {
  const { experiences } = useUI()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      {experiences.map((exp) => (
        <motion.div
          key={exp.id}
          variants={itemVariants}
          className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
              <p className="text-accent font-medium">{exp.company}</p>
            </div>
            <span className="text-muted text-sm mt-2 md:mt-0">{exp.period}</span>
          </div>
          <p className="text-muted mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
