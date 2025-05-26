"use client"

import { ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Coworking Mobile Redesign",
      description: "Increased booking conversions by 140% through strategic UX improvements",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Mobile UX", "Conversion Optimization"],
      metrics: { conversion: "140%", revenue: "₹4.2L" },
      link: "/work/coworking-mobile-redesign",
      type: "case-study",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      title: "E-commerce Checkout Flow",
      description: "Reduced cart abandonment by 45% with streamlined checkout experience",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["E-commerce", "UX Research"],
      metrics: { conversion: "45%", revenue: "₹8.5L" },
      link: "/work/ecommerce-checkout",
      type: "case-study",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      title: "AI Lead Automation",
      description: "Automated lead qualification process reducing response time by 95%",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["AI Automation", "Process Optimization"],
      metrics: { efficiency: "95%", time: "10min" },
      link: "/ai-automation/lead-automation",
      type: "automation",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"
        animate={{
          background: [
            "linear-gradient(to bottom right, #ffffff, #dbeafe, #faf5ff)",
            "linear-gradient(to bottom right, #ffffff, #ecfdf5, #fef7cd)",
            "linear-gradient(to bottom right, #ffffff, #dbeafe, #faf5ff)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of recent work showcasing design thinking and measurable impact
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div key={tagIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Badge variant="secondary" className="text-xs bg-white/80 border border-gray-200">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between p-0 h-auto group-hover:bg-white/50 transition-colors"
                    >
                      <Link href={project.link}>
                        <span>View {project.type === "case-study" ? "Case Study" : "Automation"}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/work">
                View All Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
