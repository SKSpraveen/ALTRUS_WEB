"use client"

import { motion } from "framer-motion"
import { ExternalLink, Rocket, Cpu, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export function NetoraCollab() {
  const highlights = [
    {
      icon: Rocket,
      title: "Next-Gen Robotics",
      description: "Combining Netora's AI-native expertise with ALTRUS's modular robotic frameworks to build a fully autonomous assistive robot from the ground up.",
    },
    {
      icon: Cpu,
      title: "AI-Native Intelligence",
      description: "Netora's generative AI and autonomous agent systems will power the robot's brain — enabling real-time decision making, natural interaction, and adaptive learning.",
    },
    {
      icon: Sparkles,
      title: "Production-Ready Platform",
      description: "Not just a prototype — we're engineering a production-grade robot platform with cloud-native infrastructure, MLOps pipelines, and enterprise-grade reliability.",
    },
  ]

  return (
    <section id="collab" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-6">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-4 border border-primary/30"
            >
              Strategic Partnership
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Building the Future of{" "}
              <span className="glow-text">Intelligent Robotics</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
              We&apos;re thrilled to announce our strategic collaboration with{" "}
              <motion.a
                href="https://www.netora.ai/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline decoration-primary/30 hover:decoration-primary inline-flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                Netora.ai
                <ExternalLink className="h-3 w-3" />
              </motion.a>{" "}
              — together we&apos;re bringing AI-native assistive robots to market, redefining what&apos;s possible
              in healthcare and daily living.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.15} direction="up">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full group card-hover">
                  <CardContent className="p-8">
                    <motion.div
                      className="p-3 rounded-lg bg-primary/10 w-fit mb-5 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <motion.div
            className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 md:p-12 overflow-hidden"
            whileHover={{ boxShadow: "0 0 40px rgba(var(--primary-rgb), 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Build the Future?</h3>
                <p className="text-muted-foreground max-w-xl">
                  We&apos;re looking for partners, investors, and early adopters to join us on this journey.
                  Let&apos;s build the next generation of intelligent robotics together.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 whitespace-nowrap group"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
