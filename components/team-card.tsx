
"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function TeamCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const team = [
    {
      name: "Perdi",
      initials: "P",
      role: "D121221015",
      email: "perdi@gmail.com",
    },
    {
      name: "Leonardo Nifinluri",
      initials: "LN",
      role: "D121221015",
      email: "sarah@example.com",
    },
    {
      name: "Alexander Mario Lefta",
      initials: "MC",
      role: "D121221015",
      email: "michael@example.com",
    },
    {
      name: "Resal Finanda",
      initials: "OW",
      role: "D121221015",
      email: "olivia@example.com",
    },
  ]

  return (

    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-medium text-center mb-12">Our Team</h2>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/30 transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-40 bg-muted/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Avatar className="h-20 w-20 border-4 border-background">
                        <AvatarImage src={`/placeholder.svg?height=80&width=80`} alt={member.name} />
                        <AvatarFallback className="text-lg font-medium">{member.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                    <motion.div
                      className="inline-flex items-center text-sm text-primary"
                      initial={{ opacity: 0.5 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.5,
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="h-3 w-3" />
                      <span className="ml-1">Github</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Subtle highlight effect on hover */}
              {hoveredIndex === index && (
                <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
