"use client"

import { motion } from "framer-motion"

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Git",
    "REST APIs",
    "Framer Motion",
  ]

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">About Me</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience building web applications that
              combine beautiful design with robust functionality. My journey in tech started with a curiosity about how
              things work, which evolved into a career dedicated to creating exceptional digital experiences.
            </p>

            <p className="text-lg text-muted leading-relaxed mb-6">
              I specialize in modern JavaScript frameworks and have a deep understanding of both frontend and backend
              technologies. I believe in writing clean, maintainable code and following best practices to deliver
              high-quality solutions that scale.
            </p>

            <p className="text-lg text-muted leading-relaxed mb-12">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community through blog posts and mentoring.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
