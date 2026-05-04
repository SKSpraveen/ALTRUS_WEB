"use client"

import { useState } from "react"
import { FileText, Download, Presentation, BookOpen, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const documents = [
  {
    category: "Proposals",
    items: [
      {
        name: "Project Proposal",
        icon: FileText,
        subItems: [
          { name: "Smart Navigation - IT22114044", type: "PDF", link: "/documents/proposals/IT22114044_Project Proposal.pdf" },
          { name: "IOT Firmware - IT22084668", type: "PDF", link: "/documents/proposals/IT22084668_Project Proposal.pdf" },
          { name: "Emotion Framework - IT22602114", type: "PDF", link: "/documents/proposals/IT22602114.pdf" },
          { name: "Middleware Framework - IT22092274", type: "PDF", link: "/documents/proposals/IT22092274_Project Proposal.pdf" },
        ],
      },
      {
        name: "Topic Assessment",
        icon: FileText,
        subItems: [
          { name: "TAF Report", type: "PDF", link: "/documents/proposals/TAF.pdf" },
        ],
      },
    ],
  },
  {
    category: "Presentations",
    items: [
      {
        name: "Proposal Presentation",
        icon: Presentation,
        subItems: [
          { name: "Proposal Presentation", type: "PPTX", link: "/documents/presentations/ProposalPresentation.pptx" },
        ],
      },
      {
        name: "Progress Presentation 1",
        icon: Presentation,
        subItems: [
          { name: "PP1 Presentation", type: "PPTX", link: "/documents/presentations/PP1.pptx" },
        ],
      },
      {
        name: "Progress Presentation 2",
        icon: Presentation,
        subItems: [
          { name: "PP2 Presentation", type: "PPTX", link: "/documents/presentations/PP2.pptx" },
        ],
      },
      {
        name: "Final Presentation",
        icon: Presentation,
        subItems: [
          { name: "Final Presentation", type: "PPTX", link: "/documents/presentations/FinalPresentation.pptx" },
        ],
      },
    ],
  },
  {
    category: "Final Report",
    items: [
      {
        name: "Individual Reports",
        icon: FileText,
        subItems: [
          { name: "Smart Navigation - IT22114044", type: "PDF", link: "/documents/final/IT22114044_Final_Report.pdf" },
          { name: "IOT Firmware - IT22084668", type: "PDF", link: "/documents/final/IT22084668_final_Report.pdf" },
          { name: "Emotion Framework - IT22602114", type: "PDF", link: "/documents/final/IT22602114_Final_Report.pdf" },
        ],
      },
      {
        name: "Final Thesis",
        icon: BookOpen,
        subItems: [
          { name: "Final Thesis", type: "PDF", link: "/documents/final/ALTRUS_Final Report.pdf" },
        ],
      },
    ],
  },
  {
    category: "Research Paper",
    items: [
      {
        name: "Research Paper",
        icon: BookOpen,
        subItems: [
          { name: "Research Paper", type: "PDF", link: "/documents/research/Altrus_research paper.pdf" },
        ],
      },
      {
        name: "Acceptance Notification",
        icon: FileText,
        subItems: [
          { name: "Acceptance Notification", type: "PDF", link: "/documents/research/Acceptance_Letter_ICHORA2026_ID_417.pdf" },
        ],
      },
    ],
  },
]

export function Downloads() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    )
  }

  return (
    <section id="downloads" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Downloads</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4 glow-text">Project Documents</p>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Access all project-related documents, presentations, and research materials. Click on each item to view and
            download individual files.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
            {documents.map((category, catIdx) => (
              <div key={category.category}>
                <Card
                  className="bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 card-hover animate-slide-in-up w-full sm:max-w-2xl h-full flex flex-col min-h-96"
                  style={{ animationDelay: `${catIdx * 150}ms` }}
                >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.items.length} document group{category.items.length !== 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {category.items.map((item, idx) => {
                    const itemKey = `${category.category}-${idx}`
                    const isExpanded = expandedItems.includes(itemKey)

                    return (
                      <div key={itemKey}>
                        {/* Main Item */}
                        <button
                          onClick={() => toggleExpand(itemKey)}
                          className="w-full flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group card-hover"
                        >
                          <div className="flex items-center gap-3 flex-1 text-left">
                            <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:animate-subtle-spin">
                              <item.icon className="h-4 w-4 text-primary transition-all" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{item.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {item.subItems.length} file{item.subItems.length !== 1 ? "s" : ""}
                              </p>
                            </div>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Sub Items */}
                        {isExpanded && (
                          <div className="mt-2 ml-6 space-y-2 border-l-2 border-primary/20 pl-4 animate-slide-in-up">
                            {item.subItems.map((subItem, subIdx) => (
                              <a
                                key={subIdx}
                                href={subItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 group card-hover animate-slide-in-up"
                                style={{ animationDelay: `${subIdx * 50}ms` }}
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <FileText className="h-4 w-4 text-primary/70 group-hover:text-primary" />
                                  <div>
                                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                      {subItem.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{subItem.type}</p>
                                  </div>
                                </div>
                                <Download className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
