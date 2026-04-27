"use client"

import { Trophy, Award, MapPin, Globe, Zap, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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

const stats = [
  { value: "1", label: "IEEE Paper Accepted" },
  { value: "2", label: "International Awards" },
  { value: "4", label: "Core Frameworks" },
  { value: "Scopus+EI", label: "Indexed" },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Achievements</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">Recognition & Impact</p>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            ALTRUS has achieved significant recognition in the international robotics and assistive technology communities, with acceptance at prestigious conferences and submissions to major innovation awards.
          </p>
        </div>

        {/* Conference Acceptance Card */}
        <div className="mb-16 animate-slide-in-up">
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 card-hover shadow-lg hover:shadow-primary/20">
            {/* Badge */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-4 animate-glow-pulse">
                {conferenceDetails.badge}
              </span>
            </div>

            {/* Title & Subtitle */}
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

            {/* Paper Details */}
            <div className="bg-background rounded-lg p-6 mb-12 border border-border hover:border-primary/50 transition-colors duration-300">
              <h4 className="font-semibold text-foreground mb-3">Paper Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Paper ID:</span> {conferenceDetails.paperDetails.id}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Title:</span> {conferenceDetails.paperDetails.title}
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {conferenceDetails.cards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:animate-mechanical-rotate transition-all" />
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
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Other Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
