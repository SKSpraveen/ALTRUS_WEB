"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Rocket } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const EMAILJS_PUBLIC_KEY: string = "r8YKfxM3LQsTbBwXj"
const EMAILJS_SERVICE_ID: string = "service_5ny9unr"
const EMAILJS_TEMPLATE_ID: string = "template_y1cms3n"

const isConfigured =
  EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE" &&
  EMAILJS_SERVICE_ID && EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID_HERE" &&
  EMAILJS_TEMPLATE_ID && EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID_HERE"

if (typeof window !== "undefined" && isConfigured) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "altrus.offcial@gmail.com",
    href: "mailto:altrus.offcial@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 76 527 7645",
    href: "tel:+94765277645",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "SLIIT, Malabe, Sri Lanka",
    href: "#",
  },
]

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isConfigured) {
      setStatus("error")
      setStatusMessage("EmailJS is not configured. Please set your credentials in contact-us.tsx")
      console.error("EmailJS Configuration Missing")
      return
    }

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error")
      setStatusMessage("Please fill in all fields.")
      return
    }

    setLoading(true)
    setStatus("idle")

    try {
      const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        email: formData.email,
        name: formData.name,
        title: formData.subject,
        message: formData.message,
      })

      if (result.status === 200) {
        setStatus("success")
        setStatusMessage("Message sent successfully! We'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error: any) {
      setStatus("error")
      console.error("EmailJS error details:", error)

      if (error.status === 401) {
        setStatusMessage("Authentication failed. Check your EmailJS Public Key.")
      } else if (error.status === 404) {
        setStatusMessage("Service or Template not found. Check your Service ID and Template ID.")
      } else if (error.text === "Service not allowed") {
        setStatusMessage("Email service not verified. Please verify in EmailJS dashboard.")
      } else {
        setStatusMessage(`Error: ${error.text || "Failed to send message. Please try again."}`)
      }
      setTimeout(() => setStatus("idle"), 5000)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-4 border border-primary/30"
            >
              Let&apos;s Talk
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
               Want to collaborate, invest, or just say hi? We&apos;d love to hear from you. Let&apos;s build the future of
              intelligent robotics together.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <motion.div key={info.title} variants={itemVariants}>
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group card-hover">
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent text-center"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <Rocket className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-semibold text-foreground">Ready to Build?</p>
              <p className="text-xs text-muted-foreground mt-1">
                Let&apos;s create something amazing together.
              </p>
            </motion.div>
          </div>

          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
              <CardContent className="p-6 sm:p-8">
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                      status === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-700"
                        : "bg-red-500/10 border border-red-500/30 text-red-700"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{statusMessage}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <label htmlFor="name" className="text-sm font-medium text-foreground group-focus-within:text-primary transition-colors duration-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary border-border/50 focus:border-primary focus:bg-secondary/80 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="email" className="text-sm font-medium text-foreground group-focus-within:text-primary transition-colors duration-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary border-border/50 focus:border-primary focus:bg-secondary/80 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground group-focus-within:text-primary transition-colors duration-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-secondary border-border/50 focus:border-primary focus:bg-secondary/80 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="message" className="text-sm font-medium text-foreground group-focus-within:text-primary transition-colors duration-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your idea..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary border-border/50 focus:border-primary focus:bg-secondary/80 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
