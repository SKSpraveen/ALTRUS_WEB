"use client"

import { motion } from "framer-motion"
import { Trophy, Award, MapPin, Globe, Zap, FileCheck, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

const industryRecognition = {
  badge: "Industry Recognition",
  title: "Awards & Milestones",
  subtitle: "ALTRUS has been recognized across industry and academic platforms",
  highlightText: "ICHORA 2026",
  recognitionDetails: {
    award: "Research Paper Accepted",
    title: "ALTRUS – Adaptive Life-support and Therapeutic Robotic Unit System",
  },
  cards: [
    {
      icon: FileCheck,
      title: "Research Acceptance",
      content: "Paper accepted at ICHORA 2026 – 8th International Congress on HCI, Optimization and Robotic Applications",
      borderColor: "from-primary via-primary to-primary/80",
    },
    {
      icon: Trophy,
      title: "Award Submissions",
      content: "Nominated for SLASSCOM Ingenuity Awards 2026 and World Summit Awards Global Congress 2026",
      borderColor: "from-primary/80 to-primary",
    },
    {
      icon: MapPin,
      title: "Market Traction",
      content: "Active pilot programs with healthcare providers and robotics companies",
      borderColor: "from-primary via-primary to-primary/80",
    },
    {
      icon: Globe,
      title: "Product Reach",
      content: "Four subscription product suites serving startups, enterprises, and research labs",
      borderColor: "from-primary/80 to-primary",
    },
  ],
}

const achievements = [
  {
    icon: Award,
    title: "Market Traction",
    event: "Growing Customer Base",
    description: "ALTRUS has onboarded pilot partners across healthcare and robotics sectors, demonstrating strong product-market fit for our subscription-based robotic software frameworks.",
  },
  {
    icon: Zap,
    title: "Industry Impact",
    event: "Transforming Assistive Robotics",
    description: "By providing a unified, modular, and production-ready robotic development ecosystem, ALTRUS significantly lowers development barriers and time-to-market for robotics startups, enterprises, and researchers worldwide.",
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
          <AnimatedCounter end={5} suffix="+" label="Pilot Programs" />
          <AnimatedCounter end={3} suffix="" label="Industry Awards" />
          <AnimatedCounter end={4} suffix="" label="Product Suites" />
          <AnimatedCounter end={98} suffix="%" label="Platform Uptime" />
        </div>

        {/* Recognition Card */}
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
                  {industryRecognition.badge}
                </motion.span>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {industryRecognition.title}
                </h3>
                <p className="text-lg">
                  <span className="text-muted-foreground">{industryRecognition.subtitle}</span>
                </p>
              </div>

              <motion.div
                className="bg-background rounded-lg p-6 mb-12 border border-border hover:border-primary/50 transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                <h4 className="font-semibold text-foreground mb-3">{industryRecognition.recognitionDetails.award}</h4>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Title:</span> {industryRecognition.recognitionDetails.title}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industryRecognition.cards.map((card, idx) => {
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
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.content}
                      </p>
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
                          {achievement.description}
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
