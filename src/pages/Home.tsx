"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ExperienceMotion from "../components/ExperienceMotion"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-accent">Jahzz</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
              Full Stack Developer crafting exceptional digital experiences with modern web technologies
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/projects"
                className="px-8 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-hover transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-background transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
            <p className="text-muted mb-12">My professional journey in software development</p>
          </motion.div>
          <ExperienceMotion />
        </div>
      </section>
    </div>
  )
}
