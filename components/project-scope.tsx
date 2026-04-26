"use client"

import { useState } from "react"
import {
  Target,
  Lightbulb,
  AlertTriangle,
  Cpu,
  Wrench,
  BookOpen,
  Navigation,
  Heart,
  Smile,
  Shield,
  ChevronDown,
  ChevronUp,
  Cog,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const frameworks = [
  {
    icon: Navigation,
    title: "Adaptive Navigation Framework",
    subtitle: "Voice & Gesture Command Integration",
    novelty:
      "Combining static and dynamic path planning with multimodal voice and gesture navigation — not as a standalone robot feature, but as a reusable, developer-friendly software framework for adaptive assistive robotics.",
    mainObjective:
      "To design and implement a reusable, modular software framework for adaptive, multimodal navigation in assistive robots that responds to voice commands and gestures in dynamic home environments, enabling safe, intuitive, and context-aware mobility — with configurable support for different robot types and developer-friendly configuration tools (GUI/CLI).",
    subObjectives: [
      "Implement Hybrid SLAM Navigation System",
      "Voice-Command Navigation",
      "Gesture-Based Control",
      "Developer-Friendly Configuration & Reusability",
    ],
  },
  {
    icon: Heart,
    title: "IoT Health Monitoring Framework",
    subtitle: "Sensor Integration & Telemedicine",
    novelty:
      "A software framework that allows users to dynamically select sensors, automatically generate and upload firmware, and integrate analyzer models for real-time health monitoring, while being designed for easy extension to future IoT devices.",
    mainObjective:
      "To develop a modular software framework that enables dynamic sensor selection, automatically generates and uploads firmware to microcontrollers, and integrates ML models for real-time health monitoring, with the ability to extend to future IoT devices.",
    subObjectives: [
      "Dynamic Sensor Selection",
      "Automated Firmware Generation",
      "One-Click Firmware Deployment",
      "Analyzer Integration",
      "Framework Extensibility",
    ],
  },
  {
    icon: Smile,
    title: "Emotion Detection Framework",
    subtitle: "Empathetic Behavior Generation",
    novelty:
      "A reusable, real-time, multi-modal, emotion-aware interaction framework that fuses facial and voice cues, adapts over time, and enables empathetic responses in assistive robots.",
    mainObjective:
      "To develop a real-time, emotion-aware interaction framework for assistive robots that detects user emotions through facial expressions and voice tone, and generates empathetic responses to improve human-robot interaction.",
    subObjectives: [
      "Implement multi-modal emotion detection",
      "Design fusion mechanism for facial and voice cues",
      "Enable empathetic robot responses",
      "Integrate real-time processing",
      "Ensure ethical and user-friendly interaction",
    ],
  },
  {
    icon: Shield,
    title: "Fault-Tolerant Middleware",
    subtitle: "Intent-Driven & Blockchain-Backed",
    novelty:
      "Combining three features that rarely coexist: intent-aware arbitration, proactive fault tolerance, and blockchain-backed accountability. ROS2 provides communication, but not resilience, human-intent awareness, and tamper-proof logging together.",
    mainObjective:
      "To design and implement a fault-tolerant, intent-driven, blockchain-backed middleware architecture for modular assistive robots, enabling secure intent interpretation, reliable fault detection & recovery, and immutable system logging — while providing developer-friendly tools for monitoring, debugging, and extensibility.",
    subObjectives: [
      "Intent Engine for arbitrating conflicting intents",
      "Fault Detection & Recovery mechanisms",
      "Blockchain-Backed Logging for immutable records",
      "Developer CLI Tool for monitoring and debugging",
    ],
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
    hardware: ["Raspberry Pi 5", "RPLidar A1", "Motor Controller", "Wheels & Motors", "Power System"],
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

const literatureReviews = [
  {
    category: "Navigation & SLAM",
    shortcomings: [
      "Most SLAM implementations are robot-specific and not easily portable",
      "Voice command systems lack integration with dynamic path planning",
      "Existing frameworks don't combine gesture control with SLAM navigation",
      "Limited developer tools for configuring navigation on different robot bases",
    ],
    needForNewSystem:
      "A unified framework that combines SLAM, voice commands, and gesture control in a reusable, developer-friendly package is needed for assistive robotics.",
    refs: [
      {
        text: "Thale et al. - ROS based SLAM implementation for Autonomous navigation using Turtlebot",
        source: "ITM Web of Conferences, 2020",
      },
      {
        text: "Zhang et al. - PLD-SLAM: RGB-D SLAM with Point and Line Features for Indoor Dynamic Scene",
        source: "ISPRS International Journal of Geo-Information, 2021",
      },
      { text: "Macenski et al. - The Marathon 2: A Navigation System", source: "arXiv:2003.00368v2, 2020" },
      {
        text: "Sitaraman & Khalid - Robotics Automation and Adaptive Motion Planning",
        source: "Journal of Trends in Computer Science, 2024",
      },
      {
        text: "Fadud et al. - Open-Source Voice Command-Based Human-Computer Interaction System",
        source: "Springer Nature Singapore, 2024",
      },
    ],
  },
  {
    category: "Health Monitoring & IoT",
    shortcomings: [
      "Current wearable systems require manual firmware configuration",
      "No automated pipeline from sensor selection to firmware deployment",
      "ML model integration requires significant developer expertise",
      "Limited extensibility for adding new sensor types",
    ],
    needForNewSystem:
      "A modular framework that automates sensor selection, firmware generation, and ML integration while remaining extensible for future IoT devices.",
    refs: [
      {
        text: "Khan - Hybrid sensor integration in wearable devices for cardiovascular health monitoring",
        source: "ScienceDirect, 2025",
      },
      {
        text: "Pinheiro - Multi-sensor wearable health device framework for real-time monitoring",
        source: "Frontiers in Human Neuroscience, 2022",
      },
      { text: "Sabry - Machine learning for healthcare wearable devices", source: "Frontiers in Public Health, 2022" },
      {
        text: "Shajari et al. - The emergence of AI-based wearable sensors for digital health",
        source: "Frontiers in Digital Health, 2023",
      },
      {
        text: "Ghadi - Integration of wearable technology and AI in online healthcare",
        source: "Journal of Cloud Computing, 2025",
      },
      { text: "Kundrick - Machine learning applied to wearable fitness tracker data", source: "ScienceDirect, 2025" },
    ],
  },
  {
    category: "Emotion Recognition",
    shortcomings: [
      "Facial expression systems work in isolation from voice analysis",
      "Limited real-time multimodal fusion capabilities",
      "Most systems don't adapt responses based on detected emotions",
      "Poor handling of noisy real-world environments",
    ],
    needForNewSystem:
      "A real-time, multimodal emotion-aware framework that fuses facial and voice cues and generates context-appropriate empathetic responses.",
    refs: [
      {
        text: "Li et al. - Lightweight CNN for Real-Time Facial Expression Recognition",
        source: "Sensors, vol. 22, 2022",
      },
      {
        text: "Jiang et al. - Real-Time Facial Expression Recognition Using Residual Networks",
        source: "Applied Sciences, vol. 13, 2023",
      },
      {
        text: "Sari et al. - Facial Emotion Recognition in Social Robots for Autism Therapy",
        source: "Multimedia Tools and Applications, 2023",
      },
      {
        text: "Tzirakis et al. - End-to-End Speech Emotion Recognition Using DNNs",
        source: "IEEE Journal of Selected Topics, 2021",
      },
      { text: "Li & Zhang - Context-Aware Speech Emotion Recognition", source: "Speech Communication, 2024" },
      {
        text: "Anwar et al. - Multimodal Emotion Recognition for Human-Robot Interaction",
        source: "IEEE Access, 2023",
      },
    ],
  },
  {
    category: "Blockchain & Fault Tolerance",
    shortcomings: [
      "ROS2 provides communication but lacks built-in fault tolerance",
      "No unified intent arbitration system for conflicting commands",
      "Existing logging systems are not tamper-proof or auditable",
      "Limited developer tools for debugging middleware issues",
    ],
    needForNewSystem:
      "A middleware combining intent-aware arbitration, proactive fault tolerance, and blockchain-backed immutable logging with developer-friendly CLI tools.",
    refs: [
      {
        text: "Salimi et al. - Hyperledger Fabric Blockchain and ROS 2 Integration for AMRs",
        source: "arXiv:2203.03426, 2022",
      },
      {
        text: "Fu et al. - Event-driven Fabric Blockchain–ROS 2 Interface for Teleoperation",
        source: "arXiv:2304.00781, 2023",
      },
      {
        text: "Salimi et al. - Secure Heterogeneous Multi-Robot Collaboration with Blockchain",
        source: "arXiv:2206.15242, 2022",
      },
      {
        text: "Park & Hutchinson - Fault-Tolerant Rendezvous of Multirobot Systems",
        source: "IEEE Transactions on Robotics, 2017",
      },
      { text: "Zhao et al. - Blockchain-Enabled Secure Event Logging in IIoT", source: "IEEE Access, 2023" },
    ],
  },
]

const researchGap = {
  title: "Research Gap",
  description:
    "In robotics, there is no unified, developer-friendly framework that integrates adaptive navigation, emotion-aware interaction, real-time health monitoring, and fault tolerance.",
  points: [
    "Most existing systems are hardware-specific, designed for one robot only",
    "Fragmented modules developed in isolation",
    "Difficult for developers to reuse or extend",
    "No unified approach combining all essential assistive features",
  ],
}

const researchProblem = {
  title: "Research Problem & Solution",
  problem:
    "Current robotics frameworks lack integration between navigation, emotion recognition, health monitoring, and fault tolerance — forcing developers to build from scratch for each project.",
  solution:
    "We're not just building one robot — we're building four independent, modular frameworks. These are building blocks that any developer or researcher can reuse to create smarter, more intuitive assistive robots faster.",
}

export function ProjectScope() {
  const [expandedObjective, setExpandedObjective] = useState<number | null>(0)
  const [expandedMethodology, setExpandedMethodology] = useState<number | null>(0)
  const [expandedLiterature, setExpandedLiterature] = useState<number | null>(0)

  return (
    <section id="scope" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Project Scope</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Building the Future of Assistive Robotics
          </p>
          <p className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
            Our research focuses on creating four independent, reusable software frameworks — modular building blocks
            that empower developers and researchers to build smarter, more intuitive assistive robots faster.
          </p>
        </div>

        {/* Research Problem & Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{researchGap.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{researchGap.description}</p>
              <ul className="space-y-2">
                {researchGap.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{researchProblem.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{researchProblem.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Our Solution</p>
                  <p className="text-sm text-muted-foreground">{researchProblem.solution}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Research Objectives
          </h3>
          <div className="space-y-4">
            {frameworks.map((framework, index) => (
              <Card
                key={framework.title}
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
                    {/* Novelty */}
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Novelty</p>
                      <p className="text-sm text-muted-foreground italic">&quot;{framework.novelty}&quot;</p>
                    </div>

                    {/* Main Objective */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Main Objective
                      </p>
                      <p className="text-sm text-muted-foreground">{framework.mainObjective}</p>
                    </div>

                    {/* Sub-Objectives */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Sub-Objectives
                      </p>
                      <ul className="space-y-2">
                        {framework.subObjectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Cog className="h-5 w-5 text-primary" />
            Methodology
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

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Literature Review
          </h3>
          <div className="space-y-4">
            {literatureReviews.map((review, index) => (
              <Card
                key={review.category}
                className={`bg-card border-border transition-all duration-300 ${
                  expandedLiterature === index ? "border-primary/50" : "hover:border-primary/30"
                }`}
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedLiterature(expandedLiterature === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-card-foreground">{review.category}</CardTitle>
                    {expandedLiterature === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {expandedLiterature === index && (
                  <CardContent className="pt-0 space-y-6">
                    {/* Shortcomings */}
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                      <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-3">
                        Existing Shortcomings
                      </p>
                      <ul className="space-y-2">
                        {review.shortcomings.map((shortcoming, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                            {shortcoming}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Need for New System */}
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                        Need for New System
                      </p>
                      <p className="text-sm text-muted-foreground">{review.needForNewSystem}</p>
                    </div>

                    {/* References */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">References</p>
                      <ul className="space-y-3">
                        {review.refs.map((ref, i) => (
                          <li key={i} className="text-sm">
                            <span className="text-muted-foreground">
                              [{i + 1}] {ref.text}
                            </span>
                            <span className="block text-xs text-muted-foreground/70 mt-0.5 ml-4">{ref.source}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Primary Product</CardTitle>
              <p className="text-sm text-muted-foreground">Software Framework for Developers</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Target Audience:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Robotics Startups
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  R&D Labs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Assistive Robot Manufacturers
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Demonstration By-Product</CardTitle>
              <p className="text-sm text-muted-foreground">A.L.T.R.U.S Robot Prototype</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Target Users:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Elderly Individuals
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Disabled Users & Caregivers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Healthcare Providers
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
