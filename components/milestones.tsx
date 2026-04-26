"use client"

import { CheckCircle2, Circle, Clock } from "lucide-react"

const milestones = [
  {
    date: "April 2024",
    title: "Project Initiation",
    description: "Team formation, project scope definition, and initial planning phase.",
    status: "completed",
  },
  {
    date: "May 2024",
    title: "Topic Assessment Form (TAF) Submission",
    description: "Formal topic evaluation and approval from academic committee.",
    status: "completed",
  },
  {
    date: "July 2024",
    title: "Proposal Presentation",
    description: "Initial project proposal presentation to stakeholders.",
    status: "completed",
  },
  {
    date: "December 2024",
    title: "Progress Presentation 1",
    description: "First major milestone presentation with technical demonstrations.",
    status: "completed",
  },
  {
    date: "March 2025",
    title: "Progress Presentation 2",
    description: "Second milestone review with advanced feature implementations.",
    status: "completed",
  },
  {
    date: "March 2025",
    title: "Research Paper Submission",
    description: "Comprehensive research documentation and academic paper submission.",
    status: "completed",
  },
  {
    date: "April 2025",
    title: "Completion of Full System",
    description: "Final system integration, testing, and optimization phase.",
    status: "completed",
  },
  {
    date: "May 2025",
    title: "Research Portfolio Website Launch",
    description: "Launch of the research portfolio website showcasing project outcomes.",
    status: "completed",
  },
  {
    date: "May 2025",
    title: "Further Improvements & GenAI Integration",
    description: "Enhancements based on feedback and integration of Generative AI features.",
    status: "completed",
  },
  {
    date: "May 2025",
    title: "Final Presentation",
    description: "Final research presentation to stakeholders and academic committee.",
    status: "in-progress",
  },
]

export function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Milestones</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">Project Timeline</p>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Track our journey from conception to completion with key milestones and deliverables throughout the research
            project.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:-translate-x-px animate-pulse" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div
                    className={`ml-12 md:ml-0 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover animate-slide-in-up ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {milestone.date}
                    </span>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`p-2 rounded-full border-4 border-background transition-all duration-300 ${
                      milestone.status === "completed"
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 animate-glow-pulse"
                        : milestone.status === "in-progress"
                          ? "bg-primary/50 text-primary-foreground animate-glow-pulse"
                          : "bg-secondary text-muted-foreground hover:animate-glow-pulse"
                    }`}
                  >
                    {milestone.status === "completed" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : milestone.status === "in-progress" ? (
                      <Clock className="h-4 w-4" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
