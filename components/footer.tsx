"use client"

import { motion } from "framer-motion"
import { Bot, Github, Linkedin, Twitter, Mail, Heart, Rocket } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "What We Build", href: "#scope" },
    { label: "Downloads", href: "#downloads" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ]

  return (
    <footer className="py-16 bg-card border-t border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <ScrollReveal direction="up">
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex items-center gap-2 group"
                whileHover={{ x: 3 }}
              >
                <Bot className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">ALTRUS</span>
              </motion.div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We&apos;re building the open-source operating system for assistive robotics. Four frameworks, infinite
                possibilities — empowering developers to create robots that truly care.
              </p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by the ALTRUS team
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative inline-block w-fit link-hover"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-foreground">Connect With Us</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
              <motion.div
                className="flex items-center gap-2 text-sm text-muted-foreground"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Rocket className="h-4 w-4 text-primary" />
                <span>Building the future of assistive robotics</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-primary/20" />

        <ScrollReveal direction="up" delay={0.3}>
          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2025/26 ALTRUS. All rights reserved. | Made with a mission.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
