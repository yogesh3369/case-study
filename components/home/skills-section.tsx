"use client"

import { Code, Palette, Zap, Users, BarChart3, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle"],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Bringing designs to life with modern web technologies",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Making data-driven decisions to improve user experience",
      tools: ["Google Analytics", "Mixpanel", "Hotjar", "A/B Testing"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Building intelligent workflows that save time and effort",
      tools: ["n8n", "Zapier", "OpenAI API", "Python"],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through research and testing",
      tools: ["User Interviews", "Surveys", "Usability Testing", "Personas"],
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Aligning design decisions with business objectives",
      tools: ["Design Systems", "Workshops", "Roadmapping", "Metrics"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set that bridges design, technology, and business strategy
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {skill.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool, toolIndex) => (
                        <motion.span
                          key={toolIndex}
                          className="text-xs bg-white/80 text-gray-700 px-3 py-1 rounded-full border border-gray-200 group-hover:border-gray-300 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
