"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"




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
                <h2 className="md:text-3xl  font-bold">
                    Featured Projects
                </h2>
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
                        <Card className={cn("group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 pt-0 bg-linear-to-br relative", project.gradient)}>
                            {/* Image Container with Auto-Scroll Effect */}
                            <div className={`relative h-64 overflow-hidden`}>
                                <motion.div
                                    className="absolute inset-0"
                                    animate={hoveredIndex === index ? { y: [0, -400, 0] } : { y: 0 }}
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
                                        className="w-full h-auto object-cover object-top"
                                        priority={index < 3}
                                    />
                                </motion.div>

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            </div>

                            {/* Content */}
                            <CardContent className="space-y-4">
                                {/* Header */}
                                <div className="space-y-2">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {project.name}
                                        </h3>
                                    </div>

                                    {/* Timeline */}
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" />
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
                                            className="border border-primary/20 hover:bg-secondary transition-colors"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{project.description}</p>
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

