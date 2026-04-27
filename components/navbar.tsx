"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Project Scope", href: "#scope" },
  { name: "Milestones", href: "#milestones" },
  { name: "Downloads", href: "#downloads" },
  { name: "About Us", href: "#about" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact Us", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
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
            <Bot className="h-8 w-8 text-primary group-hover:animate-glow-pulse transition-all" />
            <span className="font-bold text-lg hidden sm:block group-hover:text-primary transition-colors duration-300">ALTRUS</span>
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
                  <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/0 w-full animate-line-expand shadow-lg shadow-primary/50" />
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
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/10 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-0 p-4 max-w-7xl mx-auto">
              {navLinks.map((link, idx) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 text-left hover:scale-105 hover:translate-x-1",
                    activeSection === link.href.replace("#", "")
                      ? "text-primary bg-primary/15 border-l-2 border-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  )}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
