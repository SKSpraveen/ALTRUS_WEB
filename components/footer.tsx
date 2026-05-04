import { Bot, Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Project Scope", href: "#scope" },
    { label: "Downloads", href: "#downloads" },
    { label: "Contact Us", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ]

  return (
    <footer className="py-16 bg-card border-t border-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="flex flex-col gap-4 animate-slide-in-up" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center gap-2 group">
              <Bot className="h-6 w-6 text-primary group-hover:animate-glow-pulse transition-all" />
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">ALTRUS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
              Where healthcare meets robotics! ALTRUS is an adaptive life-support and therapeutic robotic unit system that empowers developers and researchers to create intelligent assistive robots for healthcare, rehabilitation, and daily living.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 animate-slide-in-up" style={{ animationDelay: "100ms" }}>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative inline-block w-fit group link-hover"
                  style={{ animationDelay: `${150 + idx * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col gap-4 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-semibold text-foreground">Connect With Us</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 animate-slide-in-up"
                    style={{ animationDelay: `${250 + idx * 75}ms` }}
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20" />

        {/* Copyright */}
        <div className="pt-8 text-center animate-slide-in-up" style={{ animationDelay: "300ms" }}>
          <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            © 2025/26 ALTRUS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
