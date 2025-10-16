"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
  }
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-muted">+{project.technologies.length - 3} more</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
