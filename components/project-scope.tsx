"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Target,
  Lightbulb,
  AlertTriangle,
  Cpu,
  Wrench,
  Navigation,
  Heart,
  Smile,
  Shield,
  ChevronDown,
  ChevronUp,
  Cog,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const frameworks = [
  {
    icon: Navigation,
    title: "Adaptive Navigation Suite",
    subtitle: "Voice & Gesture Command Integration",
    overview:
      "A production-grade navigation framework that combines static and dynamic path planning with multimodal voice and gesture control. Drop it into any robot platform and get autonomous navigation out of the box.",
    keyFeatures: [
      "Hybrid SLAM for real-time localization and mapping",
      "Natural voice command navigation",
      "Intuitive gesture-based control",
      "Multi-platform support with plug-and-play configuration",
      "Available on Starter, Professional, and Enterprise plans",
    ],
    useCases: ["Healthcare assistive robots", "Warehouse automation", "Service robotics"],
  },
  {
    icon: Heart,
    title: "Health Monitoring Suite",
    subtitle: "Sensor Integration & Telemedicine",
    overview:
      "A modular health monitoring framework that lets you dynamically select sensors, auto-generate firmware, and integrate ML analytics — all through a unified subscription-based platform.",
    keyFeatures: [
      "Dynamic sensor selection and configuration",
      "Automated firmware generation and one-click deployment",
      "Real-time ML-based health analytics",
      "Extensible architecture for future IoT devices",
      "Available on Professional and Enterprise plans",
    ],
    useCases: ["Remote patient monitoring", "Elderly care facilities", "Telemedicine platforms"],
  },
  {
    icon: Smile,
    title: "Emotion Detection Suite",
    subtitle: "Empathetic Behavior Generation",
    overview:
      "A real-time, multi-modal emotion-aware framework that fuses facial expression and voice tone analysis to generate context-appropriate empathetic responses — making robots truly human-aware.",
    keyFeatures: [
      "Multi-modal emotion detection (facial + voice)",
      "Real-time fusion and analysis pipeline",
      "Context-aware empathetic response generation",
      "Continuous learning and adaptation",
      "Available on Professional and Enterprise plans",
    ],
    useCases: ["Companion robots", "Therapy and rehabilitation", "Customer service robotics"],
  },
  {
    icon: Shield,
    title: "Fault-Tolerant Middleware",
    subtitle: "Intent-Driven & Blockchain-Backed",
    overview:
      "Enterprise-grade middleware that combines intent arbitration, proactive fault tolerance, and blockchain-backed logging. Keep your robotic systems reliable, auditable, and production-ready.",
    keyFeatures: [
      "Intent engine for conflict resolution between commands",
      "Automated fault detection and recovery",
      "Immutable blockchain-backed audit logging",
      "CLI and dashboard for real-time monitoring",
      "Available on Professional and Enterprise plans",
    ],
    useCases: ["Mission-critical robotics", "Healthcare automation", "Industrial robotics"],
  },
]

const methodologies = [
  {
    icon: Navigation,
    title: "Navigation Framework Methodology",
    steps: [
      "Load static SLAM map at startup for global localization",
      "Detect obstacles via LIDAR and update path in real time",
      "Accept voice commands and trigger navigation actions",
      "Recognize hand gestures for intuitive control",
      "Replan path dynamically without full remapping",
      "Support configurable robot base types for flexibility",
    ],
    nonFunctional: [
      "Performance: Fast response time and path updates",
      "Maintainability: Modular ROS2 nodes with clear documentation",
      "Usability: Intuitive voice and gesture interface",
    ],
    tools: ["ROS2 (Humble)", "SLAM Toolbox", "Nav2", "Python", "C++", "Gazebo + RViz2", "Behavior Trees"],
    hardware: ["Mini PC", "RPLidar A1", "Motor Controller", "Wheels & Motors", "Power System"],
  },
  {
    icon: Heart,
    title: "Health Monitoring Framework Methodology",
    steps: [
      "Allow users to select sensors dynamically through interface",
      "Auto-generate firmware code for chosen sensors",
      "Compile and upload firmware with one click",
      "Export and integrate ML analyzers for health monitoring",
    ],
    nonFunctional: [
      "Scalability: Extend to new sensors and IoT components",
      "Reliability: Generated firmware compiles without manual fixes",
      "Usability: Easy-to-use GUI/CLI for deployment",
    ],
    tools: [
      "Python",
      "C/C++",
      "TensorFlow Lite",
      "Scikit-learn",
      "PyTorch",
      "Arduino CLI",
      "PlatformIO",
      "ESPtool.py",
      "Tkinter/PyQt/Streamlit",
    ],
    hardware: ["ESP32", "Various Health Sensors", "Arduino IDE"],
  },
  {
    icon: Smile,
    title: "Emotion Detection Framework Methodology",
    steps: [
      "Detect facial expressions using camera input",
      "Analyze voice tone for emotional cues",
      "Fuse multimodal data for accurate emotion recognition",
      "Generate empathetic robot responses based on detected emotions",
      "Maintain continuous user interaction loop",
    ],
    nonFunctional: [
      "Scalability: Support more emotions and sensors",
      "Accessibility: Designed for diverse users",
      "Robustness: Handle noisy environments",
    ],
    tools: ["ROS2", "TensorFlow/PyTorch", "Python", "C++", "OpenCV", "Librosa", "PyAudio"],
    hardware: ["Raspberry Pi 5", "Webcam/RGB Camera", "Microphone Array", "Speaker Module"],
  },
  {
    icon: Shield,
    title: "Middleware Framework Methodology",
    steps: [
      "Receive intents from recognition module and arbitrate conflicts",
      "Route validated intents to target modules (navigation, telemedicine)",
      "Monitor health of connected modules continuously",
      "Detect runtime faults (crashes, sensor failures, communication loss)",
      "Trigger automatic recovery actions (restart, reroute, fallback)",
      "Log all events on blockchain ledger with timestamps",
      "Provide CLI for real-time monitoring and intent injection",
    ],
    nonFunctional: [
      "Reliability: Fault tolerance with automatic recovery",
      "Performance: Low latency intent processing",
      "Scalability: Extensible to new modules",
    ],
    tools: ["ROS2", "C++/Python", "gRPC", "ROS2 Services", "Blockchain"],
    hardware: ["Raspberry Pi 5", "Laptop", "Wi-Fi Router", "Dongle", "Local Cloud Server", "SSD"],
  },
]

const marketOpportunity = {
  title: "Market Opportunity",
  description:
    "The global assistive robotics market is growing rapidly, yet there is no unified, commercially-available platform that integrates navigation, health monitoring, emotion AI, and fault tolerance under a single subscription.",
  points: [
    "Robotics teams spend 60% of development time on foundational infrastructure",
    "Existing solutions are fragmented, hardware-specific, and difficult to scale",
    "Growing demand for affordable, intelligent assistive solutions in healthcare and elderly care",
    "No subscription-based model exists for modular robotic software frameworks",
  ],
}

const problemSolution = {
  title: "The Problem & Our Solution",
  problem:
    "Developers and healthcare providers lack access to integrated, production-ready robotic software that works across different hardware platforms — forcing costly custom builds and delayed deployments.",
  solution:
    "We offer four modular, subscription-based software frameworks that work out of the box. Plug and play. Scale as you grow. One platform, infinite possibilities — from prototyping to production.",
}

export function ProjectScope() {
  const [expandedObjective, setExpandedObjective] = useState<number | null>(0)
  const [expandedMethodology, setExpandedMethodology] = useState<number | null>(0)

  return (
    <section id="scope" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-4 border border-primary/30"
            >
              Our Products
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance glow-text">
              Subscription-Based Robotic Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
              We offer four modular, subscription-based software frameworks — production-ready building blocks
              that empower developers, startups, and enterprises to build intelligent assistive robots faster.
            </p>
          </div>
        </ScrollReveal>

        {/* Research Problem & Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <ScrollReveal direction="left">
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-destructive/5 border-destructive/20 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{marketOpportunity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{marketOpportunity.description}</p>
                  <ul className="space-y-2">
                    {marketOpportunity.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-primary/5 border-primary/20 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{problemSolution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground">{problemSolution.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Our Solution</p>
                      <p className="text-sm text-muted-foreground">{problemSolution.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Our Product Suites
            </h3>
            <div className="space-y-4">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={framework.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`bg-card border-border transition-all duration-300 ${
                      expandedObjective === index ? "border-primary/50" : "hover:border-primary/30"
                    }`}
                  >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedObjective(expandedObjective === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <framework.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-card-foreground">{framework.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{framework.subtitle}</p>
                      </div>
                    </div>
                    {expandedObjective === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {expandedObjective === index && (
                  <CardContent className="pt-0 space-y-6">
                    {/* Overview */}
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Overview</p>
                      <p className="text-sm text-muted-foreground">{framework.overview}</p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {framework.keyFeatures.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Use Cases
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {framework.useCases.map((useCase, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal>
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Cog className="h-5 w-5 text-primary" />
            Product Architecture
          </h3>
          <div className="space-y-4">
            {methodologies.map((method, index) => (
              <Card
                key={method.title}
                className={`bg-card border-border transition-all duration-300 ${
                  expandedMethodology === index ? "border-primary/50" : "hover:border-primary/30"
                }`}
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedMethodology(expandedMethodology === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-secondary">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-card-foreground">{method.title}</CardTitle>
                    </div>
                    {expandedMethodology === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {expandedMethodology === index && (
                  <CardContent className="pt-0 space-y-6">
                    {/* Functional Requirements / Steps */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                        How It Works (Functional Requirements)
                      </p>
                      <div className="space-y-2">
                        {method.steps.map((step, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">
                              {i + 1}
                            </span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Non-Functional Requirements */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Non-Functional Requirements
                      </p>
                      <ul className="space-y-1">
                        {method.nonFunctional.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-primary" />
                          Software & Tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {method.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground border border-border"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Wrench className="h-4 w-4 text-primary" />
                          Hardware
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {method.hardware.map((hw) => (
                            <span
                              key={hw}
                              className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground border border-border"
                            >
                              {hw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal>
        {/* Target Market */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Target Market</CardTitle>
              <p className="text-sm text-muted-foreground">Who We Serve</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Our solutions are built for:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Robotics Startups & Scale-ups
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Healthcare Providers & Facilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Research Labs & Academia
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Subscription Plans</CardTitle>
              <p className="text-sm text-muted-foreground">Flexible Pricing for Every Stage</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Plans available:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">Starter</span> — Single framework, community support
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">Professional</span> — Multi-framework, priority support
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">Enterprise</span> — Full suite, dedicated support, SLA
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
