"use client"

import { ArrowDown, Bot, Heart, Cog, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToScope = () => {
    document.getElementById("scope")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Content Section */}
          <div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <span className="glow-text">A.L.T.R.U.S</span>
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Adaptive Life-support & Therapeutic Robotic Unit System
            </p>

            <p className="mx-auto max-w-3xl text-xl sm:text-xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 leading-relaxed">
              Inspired by Baymax & Wall-E — We&apos;re not just building another robot. We&apos;re creating{" "}
              <span className="text-primary font-semibold">four powerful, reusable software frameworks</span> that form the
              backbone of intelligent assistive robots for healthcare, rehabilitation, and daily living.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-base hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-pointer group">
                <Sparkles className="h-4 w-4 text-primary group-hover:animate-glow-pulse" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">Emotion-Aware Interaction</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-base hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-pointer group">
                <Cog className="h-4 w-4 text-primary group-hover:animate-subtle-spin" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">Autonomous Navigation</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-base hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-pointer group">
                <Heart className="h-4 w-4 text-primary group-hover:animate-glow-pulse" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">Health Monitoring</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-base hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-pointer group">
                <Bot className="h-4 w-4 text-primary group-hover:animate-subtle-spin" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">Fault-Tolerant Middleware</span>
              </div>
            </div>

            {/* Robot Image Section */}
          <div className="flex justify-center mb-8">
            <div className="relative w-80 h-80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="relative w-full h-full animate-float group border border-primary/30 rounded-full p-4 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-secondary/30 backdrop-blur-sm overflow-hidden">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 blur-3xl rounded-full animate-pulse" />
                <Image
                  src="/robot.png"
                  alt="A.L.T.R.U.S Healthcare Robot"
                  fill
                  className="object-contain drop-shadow-2xl relative z-10 group-hover:drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] transition-all duration-300"
                  priority
                />
              </div>
            </div>
          </div>

            <p className="text-sm text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
              <span className="text-primary">Primary Product:</span> Software Framework for Developers |{" "}
              <span className="text-primary">Demo:</span> A.L.T.R.U.S Robot Prototype
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-550">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              onClick={scrollToScope}
            >
              Explore Our Research
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 hover:bg-secondary bg-transparent hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToScope}
            className="p-2 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
