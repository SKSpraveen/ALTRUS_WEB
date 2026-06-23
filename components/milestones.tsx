"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle, Clock, Rocket } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const milestones = [
  {
    date: "April 2025",
    title: "Project Initiation",
    description: "Team formation, project scope definition, and initial planning phase.",
    status: "completed",
  },
  {
    date: "May 2025",
    title: "Topic Assessment Form (TAF) Submission",
    description: "Formal topic evaluation and approval from academic committee.",
    status: "completed",
  },
  {
    date: "September 2025",
    title: "Proposal Presentation",
    description: "Initial project proposal presentation to stakeholders.",
    status: "completed",
  },
  {
    date: "January 2026",
    title: "Progress Presentation 1",
    description: "First major milestone presentation with technical demonstrations.",
    status: "completed",
  },
  {
    date: "March 2026",
    title: "Progress Presentation 2",
    description: "Second milestone review with advanced feature implementations.",
    status: "completed",
  },
  {
    date: "April 2026",
    title: "Research Paper Submission",
    description: "Comprehensive research documentation and academic paper submission.",
    status: "completed",
  },
  {
    date: "April 2026",
    title: "Research Paper Accepted",
    description: "Our research has been accepted for presentation at ICHORA 2026",
    status: "completed",
    highlight: "ICHORA 2026",
  },
  {
    date: "April 2026",
    title: "Completion of Full System",
    description: "Final system integration, testing, and optimization phase.",
    status: "completed",
  },
  {
    date: "April 2026",
    title: "Research Portfolio Website Launch",
    description: "Launch of the research portfolio website showcasing project outcomes.",
    status: "completed",
  },
  {
    date: "May 2026",
    title: "Further Improvements & GenAI Integration",
    description: "Enhancements based on feedback and integration of Generative AI features.",
    status: "completed",
  },
  {
    date: "May 2026",
    title: "Final Presentation",
    description: "Final research presentation to stakeholders and academic committee.",
    status: "in-progress",
  },
]

export function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-4 border border-primary/30"
            >
              Our Journey
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">From Idea to Impact</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              From a university project to a startup — here&apos;s our journey of building the future of assistive robotics.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:-translate-x-px shadow-lg shadow-primary/30">
            <motion.div
              className="w-full bg-primary"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={milestone.title}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div
                      className={`ml-12 md:ml-0 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                        {milestone.date}
                      </span>
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.highlight ? (
                          <>
                            {milestone.description.split(milestone.highlight).map((part, idx) => (
                              <span key={idx}>
                                {part}
                                {idx < milestone.description.split(milestone.highlight).length - 1 && (
                                  <span className="text-primary font-semibold">{milestone.highlight}</span>
                                )}
                              </span>
                            ))}
                          </>
                        ) : (
                          milestone.description
                        )}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.08 }}
                  >
                    <div
                      className={`p-2 rounded-full border-4 border-background transition-all duration-300 ${
                        milestone.status === "completed"
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                          : milestone.status === "in-progress"
                            ? "bg-primary/50 text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {milestone.status === "completed" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : milestone.status === "in-progress" ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          <Clock className="h-4 w-4" />
                        </motion.div>
                      ) : (
                        <Circle className="h-4 w-4" />
                      )}
                    </div>
                  </motion.div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <motion.div
            className="mt-16 text-center p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(var(--primary-rgb), 0.1)" }}
          >
            <Rocket className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-lg font-semibold text-foreground">
              This is just the beginning. The best is yet to come.
            </p>
            <p className="text-muted-foreground mt-2">
              From academic research to startup — we&apos;re committed to making assistive robotics accessible to all.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
