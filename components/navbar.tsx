"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#scope" },
  { name: "Journey", href: "#milestones" },
  { name: "Team", href: "#about" },
  { name: "Partnership", href: "#collab" },
  { name: "Impact", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-effect border-b border-primary/20 shadow-lg shadow-primary/10"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 group"
          >
            <span className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border border-primary/30 bg-secondary/60 group-hover:border-primary/60 transition-all duration-300">
              <Image
                src="/logoo.png"
                alt="ALTRUS logo"
                fill
                className="object-contain p-1.5"
                priority
              />
            </span>
            <span className="font-bold text-lg hidden sm:flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
              ALTRUS
              <Rocket className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "relative px-2 py-2 text-sm font-medium transition-all duration-300 group",
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/0 w-full shadow-lg shadow-primary/50"
                  />
                )}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-b border-primary/20 shadow-lg shadow-primary/10"
            >
              <div className="flex flex-col gap-0 p-4 max-w-7xl mx-auto bg-background/95 backdrop-blur-md">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 text-left",
                      activeSection === link.href.replace("#", "")
                        ? "text-primary bg-primary/15 border-l-2 border-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
