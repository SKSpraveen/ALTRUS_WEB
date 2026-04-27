"use client"

import { Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    role: "Group Leader",
    bio: "Leading the research team in designing and implementing therapeutic robotic functionalities while overseeing hardware integration and robust system architecture development for adaptive life-support solutions.",
    image: "/sasindupraveen.png",
    email: "sasindupraveen705@gmail.com",
    linkedin: "http://linkedin.com/in/SKSpraveen",
  },
  {
    name: "S.N.S.B.K.K. Semasinghe",
    role: "Team Member",
    bio: "Focused on hardware integration and robotic system architecture development.",
    image: "/kk.jpg",
    email: "kushankasemasinghe2002@gmail.com",
    linkedin: "linkdin.com/kushankasemasinghe",
  },
  {
    name: "Madushanka L.A.S",
    role: "Team Member",
    bio: "Contributing to the design and implementation of therapeutic robotic functionalities.",
    image: "/supun.jpg",
    email: "Supunmadushanka2582000@gmail.com",
    linkedin: "linkdin.com/supunmadushan",
  },
]

export function AboutUs() {
  const supervisors = teamMembers.filter(m => m.role.includes("Supervisor"))
  const leader = teamMembers.filter(m => m.role === "Group Leader")
  const teamMembersOnly = teamMembers.filter(m => m.role === "Team Member")

  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">Meet Our Team</p>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
            A dedicated team of researchers and engineers working together to develop ALTRUS - pushing the boundaries of
            therapeutic robotics and adaptive life-support systems.
          </p>
        </div>

        {/* Supervisors Row */}
        <div className="flex justify-center gap-6 mb-6">
          {supervisors.map((member, idx) => (
            <div key={member.name} className="w-80">
              <Card
                className="bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group overflow-hidden card-hover animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500 hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3 group-hover:text-primary/80 transition-colors">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300 text-justify">{member.bio}</p>
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
            </div>
          ))}
        </div>

        {/* Leader and Team Members Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leader.map((member, idx) => (
            <Card
              key={member.name}
              className="bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group overflow-hidden card-hover animate-slide-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3 group-hover:text-primary/80 transition-colors">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300 text-justify">{member.bio}</p>
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
          ))}
          {teamMembersOnly.map((member, idx) => (
            <Card
              key={member.name}
              className="bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group overflow-hidden card-hover animate-slide-in-up"
              style={{ animationDelay: `${(supervisors.length + idx) * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3 group-hover:text-primary/80 transition-colors">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300 text-justify">{member.bio}</p>
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
          ))}
        </div>
      </div>
    </section>
  )
}
