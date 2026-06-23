"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, Bot, Heart, ChevronLeft, ChevronRight, Cog, Sparkles, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Typewriter } from "@/components/typewriter"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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
      if (!videoElement) return
      videoElement.currentTime = 0
      videoElement.playbackRate = 0.85

      const handleVideoEnd = () => goToNextSlide()
      videoElement.addEventListener("ended", handleVideoEnd)
      void videoElement.play()

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd)
        videoElement.pause()
      }
    }

    if (videoElement) videoElement.pause()

    const imageSlideTimer = window.setTimeout(() => goToNextSlide(), 4500)
    return () => window.clearTimeout(imageSlideTimer)
  }, [activeSlide])

  const scrollToScope = () => {
    document.getElementById("scope")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <section
      id="home"
      className="relative pt-20 pb-16 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePos.x / 10}px ${mousePos.y / 10}px, rgba(100,200,200,0.08) 0%, transparent 40%)`,
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-6 border border-primary/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            >
              <Zap className="h-3.5 w-3.5 inline mr-1" />
              Startup Building the Future of Assistive Robotics
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
              variants={itemVariants}
            >
              <span className="glow-text animate-glow-text">A.L.T.R.U.S</span>
            </motion.h1>

            <motion.p className="text-xl sm:text-2xl md:text-3xl font-medium text-primary mb-2" variants={itemVariants}>
              <Typewriter
                texts={[
                  "We Build Robot Brains.",
                  "Adaptive Life-support & Therapeutic Robotic Unit System.",
                  "Four Frameworks. Infinite Possibilities.",
                ]}
                period={2500}
              />
            </motion.p>

            <motion.p
              className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed"
              variants={itemVariants}
            >
              We&apos;re a deep-tech startup building{" "}
              <span className="text-primary font-semibold">four open-source software frameworks</span> that power the
              next generation of intelligent assistive robots. Think Baymax meets Wall-E — powered by real AI.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
            variants={itemVariants}
          >
            {[
              { icon: Sparkles, label: "Emotion-Aware AI" },
              { icon: Cog, label: "Autonomous Navigation" },
              { icon: Heart, label: "Health Monitoring" },
              { icon: Bot, label: "Fault-Tolerant Middleware" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
              >
                <item.icon className="h-4 w-4 text-primary group-hover:animate-glow-pulse" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto mb-6 w-full max-w-6xl"
            variants={itemVariants}
          >
            <div className="rounded-2xl border border-primary/60 bg-secondary/40 p-2 shadow-2xl shadow-primary/20 backdrop-blur-sm">
              <div className="relative h-[20rem] overflow-hidden rounded-xl border border-primary/50 bg-black/40 shadow-lg shadow-primary/15 sm:h-[24rem] md:h-[22rem] lg:h-[28rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    className="flex h-full w-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    {slides.map((slide, index) => (
                      <div key={slide.src} className="relative h-full min-w-full">
                        {slide.type === "video" ? (
                          <video
                            ref={videoRef}
                            className={`h-full w-full rounded-xl border border-primary/50 object-contain ${index === activeSlide ? "block" : "hidden"}`}
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
                            className={`rounded-xl border border-primary/50 object-contain ${index === activeSlide ? "block" : "hidden"}`}
                            priority={index === 1}
                          />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
                    {slides[activeSlide].label}
                  </p>
                </div>

                <motion.button
                  type="button"
                  onClick={goToPreviousSlide}
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary/70 bg-gradient-to-br from-primary/25 via-background/85 to-primary/10 text-primary shadow-lg shadow-primary/30 ring-1 ring-primary/40 backdrop-blur-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/40"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={goToNextSlide}
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary/70 bg-gradient-to-br from-primary/25 via-background/85 to-primary/10 text-primary shadow-lg shadow-primary/30 ring-1 ring-primary/40 backdrop-blur-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/40"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                </motion.button>

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
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground mb-8"
            variants={itemVariants}
          >
            <Rocket className="h-4 w-4 inline mr-1 text-primary" />
            <span className="text-primary font-semibold">Product:</span> Open-Source Software Frameworks |{" "}
            <span className="text-primary font-semibold">Demo:</span> ALTRUS Robot Prototype
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                onClick={scrollToScope}
              >
                See What We Build
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/20 bg-transparent hover:border-primary/80 text-foreground hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let&apos;s Collaborate
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToScope}
            className="p-2 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
