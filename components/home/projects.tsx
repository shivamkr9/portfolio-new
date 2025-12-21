"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { DATA } from "@/data/resume"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="font-bold md:text-3xl">Featured Projects</h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DATA.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card
              className={cn(
                "group border-border/50 bg-card/50 hover:border-border relative h-full overflow-hidden bg-linear-to-br pt-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10",
                project.gradient
              )}
            >
              {/* Image Container with Auto-Scroll Effect */}
              <div className={`relative h-64 overflow-hidden`}>
                <motion.div
                  className="absolute inset-0"
                  animate={
                    hoveredIndex === index ? { y: [0, -400, 0] } : { y: 0 }
                  }
                  transition={
                    hoveredIndex === index
                      ? {
                          duration: 8,
                          ease: "linear",
                          repeat: Number.POSITIVE_INFINITY,
                        }
                      : { duration: 0.3 }
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1920}
                    height={1080}
                    className="h-auto w-full object-cover object-top"
                    priority={index < 3}
                  />
                </motion.div>

                {/* Overlay gradient */}
                <div className="from-card via-card/20 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <CardContent className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="group-hover:text-primary text-xl leading-tight font-bold transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  {/* Timeline */}
                  <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/20 hover:bg-secondary border transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Visit ${project.name}`}
              >
                <span className="sr-only">{project.name}</span>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
