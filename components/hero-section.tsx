"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Bot, Heart, ChevronLeft, ChevronRight, Cog, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { type: "video", src: "/video.mp4", label: "Prototype Video Banner" },
    { type: "image", src: "/1.jpeg", label: "Prototype Image One" },
    { type: "image", src: "/2.jpeg", label: "Prototype Image Two" },
  ] as const

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
  }

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25
    }
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current
    const currentSlide = slides[activeSlide]

    if (currentSlide.type === "video") {
      if (!videoElement) {
        return
      }

      videoElement.currentTime = 0
      videoElement.playbackRate = 0.85

      const handleVideoEnd = () => {
        goToNextSlide()
      }

      videoElement.addEventListener("ended", handleVideoEnd)
      void videoElement.play()

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd)
        videoElement.pause()
      }
    }

    if (videoElement) {
      videoElement.pause()
    }

    const imageSlideTimer = window.setTimeout(() => {
      goToNextSlide()
    }, 4500)

    return () => window.clearTimeout(imageSlideTimer)
  }, [activeSlide])

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

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <span className="glow-text animate-glow-text">A.L.T.R.U.S</span>
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Adaptive Life-support & Therapeutic Robotic Unit System
            </p>

            <p className="mx-auto max-w-3xl text-xl sm:text-xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 leading-relaxed">
              Inspired by Baymax & Wall-E — We&apos;re not just building another robot. We&apos;re creating{" "}
              <span className="text-primary font-semibold">four powerful, reusable software frameworks</span> that form the
              backbone of intelligent assistive robots for healthcare, rehabilitation, and daily living.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
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

           

            <div className="mx-auto mb-12 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="rounded-2xl border border-primary/60 bg-secondary/40 p-2 shadow-2xl shadow-primary/20 backdrop-blur-sm">
                <div className="relative h-[20rem] overflow-hidden rounded-xl border border-primary/50 bg-black/40 shadow-lg shadow-primary/15 sm:h-[24rem] md:h-[22rem] lg:h-[28rem]">
                  <div
                    className="flex h-full w-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div key={slide.src} className="relative h-full min-w-full">
                        {slide.type === "video" ? (
                          <video
                            ref={videoRef}
                            className="h-full w-full rounded-xl border border-primary/50 object-contain"
                            src={slide.src}
                            autoPlay
                            muted
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <Image
                            src={slide.src}
                            alt={slide.label}
                            fill
                            className="rounded-xl border border-primary/50 object-contain"
                            priority={index === 1}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary/80">{slides[activeSlide].label}</p>
                  </div>
                  <button
                    type="button"
                    onClick={goToPreviousSlide}
                    className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary/70 bg-gradient-to-br from-primary/25 via-background/85 to-primary/10 text-primary shadow-lg shadow-primary/30 ring-1 ring-primary/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-xl hover:shadow-primary/40"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNextSlide}
                    className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary/70 bg-gradient-to-br from-primary/25 via-background/85 to-primary/10 text-primary shadow-lg shadow-primary/30 ring-1 ring-primary/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-xl hover:shadow-primary/40"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                  </button>
                  <div className="absolute right-4 top-4 flex gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.src}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeSlide === index ? "w-8 bg-primary" : "w-2.5 bg-white/50"
                        }`}
                        aria-label={`Show slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

           <p className="text-sm text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
              <span className="text-primary">Primary Product:</span> Software Framework for Developers |{" "}
              <span className="text-primary">Demo:</span> A.L.T.R.U.S Robot Prototype
            </p>

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
              className="border-primary/40 hover:bg-primary/20 bg-transparent hover:border-primary/80 text-foreground hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
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
