"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

// Initialize EmailJS - Replace with your Public Key
const EMAILJS_PUBLIC_KEY: string = "r8YKfxM3LQsTbBwXj"
const EMAILJS_SERVICE_ID: string = "service_5ny9unr"
const EMAILJS_TEMPLATE_ID: string = "template_y1cms3n"

// Validate credentials
const isConfigured =
  EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE" &&
  EMAILJS_SERVICE_ID && EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID_HERE" &&
  EMAILJS_TEMPLATE_ID && EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID_HERE"

// Initialize on mount
if (typeof window !== "undefined" && isConfigured) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "altrus.offcial@gmail.com",
    href: "mailto:research@university.edu",
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
    value: "Sliit, Malabe, Sri Lanka",
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
    
    // Validate credentials
    if (!isConfigured) {
      setStatus("error")
      setStatusMessage("EmailJS is not configured. Please set your credentials in contact-us.tsx")
      console.error("EmailJS Configuration Missing")
      return
    }

    // Validate form
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
      
      // Better error messages
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

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact Us</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">Get In Touch</p>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
            Have questions about our research? Want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <Card
                key={info.title}
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group card-hover animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6">
                  <a href={info.href} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:animate-glow-pulse">
                      <info.icon className="h-5 w-5 text-primary group-hover:animate-subtle-spin transition-all" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">{info.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
              <CardContent className="p-6 sm:p-8">
                {/* Status Message */}
                {status !== "idle" && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top ${
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
                  </div>
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
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary border-border/50 focus:border-primary focus:bg-secondary/80 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
