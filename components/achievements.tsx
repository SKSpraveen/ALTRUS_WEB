"use client"

import { motion } from "framer-motion"
import { Trophy, Award, MapPin, Globe, Zap, FileCheck, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

const conferenceDetails = {
  badge: "Research Paper Accepted",
  title: "International Conference Acceptance",
  subtitle: "Our research has been accepted for presentation at ICHORA 2026",
  highlightText: "ICHORA 2026",
  paperDetails: {
    id: "#####",
    title: "ALTRUS – Adaptive Life-support and Therapeutic Robotic Unit System",
  },
  cards: [
    {
      icon: FileCheck,
      title: "Conference",
      content: "ICHORA 2026 – 8th International Congress on Human-Computer Interaction, Optimization and Robotic Applications",
      borderColor: "from-primary via-primary to-primary/80",
    },
    {
      icon: Trophy,
      title: "H5-Index of 36",
      content: "Published in the ICHORA 2026 Conference Proceedings by IEEE, (IEEE Xplore, and indexed by Ei Compendex, Scopus).",
      borderColor: "from-primary/80 to-primary",
    },
    {
      icon: MapPin,
      title: "Venue & Dates",
      content: "Ankara-Türkiye | May 21-23, 2026",
      borderColor: "from-primary via-primary to-primary/80",
    },
    {
      icon: Globe,
      title: "Website",
      content: "https://ichoracongress.com",
      link: "https://ichoracongress.com",
      borderColor: "from-primary/80 to-primary",
    },
  ],
}

const achievements = [
  {
    icon: Award,
    title: "Research Competitions",
    event: "Multiple Award Submissions",
    description: "Submitted applications to SLASSCOM Ingenuity Awards 2026 and World Summit Awards Global Congress 2026, showcasing ALTRUS as a transformative solution in assistive robotics.",
    highlight: "SLASSCOM Ingenuity Awards 2026",
  },
  {
    icon: Zap,
    title: "Research Impact",
    event: "Advancing Assistive Robotics",
    description: "ALTRUS addresses the critical lack of hardware-agnostic, developer-friendly frameworks by providing a unified, modular, and reusable robotic development ecosystem. Integrating navigation, IoT health monitoring, emotion-aware interaction, and fault-tolerant middleware within a single ROS2-based platform significantly lowers development barriers for students, startups, and researchers.",
  },
]

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <section id="achievements" className="py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-4 border border-primary/30"
            >
              Impact
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">Recognition & Impact</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              ALTRUS has achieved significant recognition in the international robotics and assistive technology
              communities. But we&apos;re just getting started.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <AnimatedCounter end={1} suffix="" label="IEEE Paper Accepted" />
          <AnimatedCounter end={2} suffix="" label="International Awards" />
          <AnimatedCounter end={4} suffix="" label="Core Frameworks" />
          <AnimatedCounter end={2} suffix="" label="Indexed Databases" />
        </div>

        {/* Conference Acceptance Card */}
        <ScrollReveal>
          <motion.div
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 card-hover shadow-lg hover:shadow-primary/20"
              variants={cardVariants}
            >
              <div className="text-center mb-8">
                <motion.span
                  className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-4"
                  animate={{ boxShadow: ["0 0 10px rgba(var(--primary-rgb), 0.3)", "0 0 25px rgba(var(--primary-rgb), 0.6)", "0 0 10px rgba(var(--primary-rgb), 0.3)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-3.5 w-3.5 inline mr-1" />
                  {conferenceDetails.badge}
                </motion.span>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {conferenceDetails.title}
                </h3>
                <p className="text-lg">
                  {conferenceDetails.highlightText ? (
                    <>
                      {conferenceDetails.subtitle.split(conferenceDetails.highlightText).map((part, idx) => (
                        <span key={idx}>
                          <span className="text-muted-foreground">{part}</span>
                          {idx < conferenceDetails.subtitle.split(conferenceDetails.highlightText).length - 1 && (
                            <span className="text-primary font-semibold">{conferenceDetails.highlightText}</span>
                          )}
                        </span>
                      ))}
                    </>
                  ) : (
                    <span className="text-muted-foreground">{conferenceDetails.subtitle}</span>
                  )}
                </p>
              </div>

              <motion.div
                className="bg-background rounded-lg p-6 mb-12 border border-border hover:border-primary/50 transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                <h4 className="font-semibold text-foreground mb-3">Paper Details</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Paper ID:</span> {conferenceDetails.paperDetails.id}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Title:</span> {conferenceDetails.paperDetails.title}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {conferenceDetails.cards.map((card, idx) => {
                  const Icon = card.icon
                  return (
                    <motion.div
                      key={card.title}
                      className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                      variants={cardVariants}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <h4 className="font-semibold text-foreground">{card.title}</h4>
                      </div>
                      {card.link ? (
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
                        >
                          {card.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {card.content}
                        </p>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Other Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => (
            <ScrollReveal key={achievement.title} delay={idx * 0.1} direction="up">
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors h-fit">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-1">{achievement.title}</h3>
                        <p className="text-sm text-primary font-medium mb-2">{achievement.event}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                          {achievement.highlight ? (
                            <>
                              {achievement.description.split(achievement.highlight).map((part, idx) => (
                                <span key={idx}>
                                  {part}
                                  {idx < achievement.description.split(achievement.highlight).length - 1 && (
                                    <span className="text-primary font-semibold">{achievement.highlight}</span>
                                  )}
                                </span>
                              ))}
                            </>
                          ) : (
                            achievement.description
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
