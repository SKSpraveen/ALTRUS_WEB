"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Rocket, Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const teamMembers = [
  {
    name: "Ms. Hansi De Silva",
    role: "Supervisor",
    bio: "Project supervisor providing expert guidance and oversight for the ALTRUS robotic system development.",
    image: "/hansi.jpg",
    email: "hansi.d@sliit.lk",
    linkedin: "https://lk.linkedin.com/in/hansi-de-silva-03629b79",
  },
  {
    name: "Mr. Ashvinda Iddamalgoda",
    role: "Co-Supervisor",
    bio: "Co-supervisor contributing specialized knowledge in robotics and system engineering.",
    image: "/ashvinda.jpeg",
    email: "ashvinda.i@sliit.lk",
    linkedin: "https://lk.linkedin.com/in/ashvinda",
  },
  {
    name: "Praveen S.K.S",
    role: "Founder & CEO",
    bio: "Leading the startup in designing and implementing therapeutic robotic functionalities while overseeing hardware integration and robust system architecture development for adaptive life-support solutions.",
    image: "/ss.png",
    email: "sasindupraveen705@gmail.com",
    linkedin: "http://linkedin.com/in/SKSpraveen",
  },
  {
    name: "S.N.S.B.K.K. Semasinghe",
    role: "Co-Founder & CTO",
    bio: "Focused on hardware integration, robotic system architecture, and leading technical strategy for the ALTRUS platform.",
    image: "/kk.jpg",
    email: "kushankasemasinghe2002@gmail.com",
    linkedin: "linkdin.com/kushankasemasinghe",
  },
  {
    name: "Madushanka L.A.S",
    role: "Co-Founder & Lead Engineer",
    bio: "Contributing to the design and implementation of therapeutic robotic functionalities and system integration.",
    image: "/supun.jpg",
    email: "Supunmadushanka2582000@gmail.com",
    linkedin: "linkdin.com/supunmadushan",
  },
]

const aboutGalleryImages = ["/ab1.jpeg", "/ab3.jpeg", "/ab2.jpeg"]

export function AboutUs() {
  const supervisors = teamMembers.filter(m => m.role.includes("Supervisor"))
  const founders = teamMembers.filter(m => !m.role.includes("Supervisor"))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
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
              About Us
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">
              Meet the Team Behind ALTRUS
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              We&apos;re a passionate team of engineers, researchers, and dreamers on a mission to make assistive
              robotics accessible to everyone. From university lab to startup — this is our story.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ScrollReveal direction="left">
            <motion.div
              className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent card-hover"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(var(--primary-rgb), 0.1)" }}
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize assistive robotics by building open-source, modular software frameworks that empower
                any developer, startup, or researcher to create intelligent, empathetic robots.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent card-hover"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(var(--primary-rgb), 0.1)" }}
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every person who needs assistance — elderly, disabled, or recovering — has access to an
                affordable, intelligent robotic companion that understands them.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Supervisors Row */}
        <div className="flex justify-center gap-6 mb-8">
          {supervisors.map((member, idx) => (
            <ScrollReveal key={member.name} delay={idx * 0.1} direction="up">
              <motion.div className="w-80" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden card-hover">
                  <CardContent className="p-6">
                    <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">{member.bio}</p>
                    <div className="flex gap-2">
                      <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Founders Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {founders.map((member, idx) => (
            <ScrollReveal key={member.name} delay={idx * 0.1} direction="up">
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden card-hover">
                  <CardContent className="p-6">
                    <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">{member.bio}</p>
                    <div className="flex gap-2">
                      <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* About Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutGalleryImages.map((image, idx) => (
            <ScrollReveal key={image} delay={idx * 0.1} direction="up">
              <motion.div
                className="group relative overflow-hidden rounded-3xl border border-primary/40 bg-card/80 p-2 shadow-xl shadow-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={image}
                  alt={`About gallery ${idx + 1}`}
                  className="h-72 w-full rounded-2xl border border-primary/35 object-contain shadow-lg shadow-primary/15 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
