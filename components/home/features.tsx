"use client"

import { DATA } from "@/data/resume"
import { motion } from "framer-motion"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Features() {
  return (
    <div className="space-y-8">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bold text-balance md:text-3xl">What I Do</h1>
      </motion.div>

      <motion.section
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {DATA.features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card
                className={`group border-border/50 relative overflow-hidden bg-linear-to-br ${feature.gradient} h-full backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/10`}
              >
                <div className="to-muted/20 absolute inset-0 bg-linear-to-br from-transparent via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <CardHeader className="relative space-y-4">
                  <div
                    className={`bg-background/50 border-border/50 inline-flex w-fit rounded-xl border p-3 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`size-6 ${feature.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="space-y-3">
                    <CardTitle className="text-foreground group-hover:text-foreground text-xl font-semibold transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          )
        })}
      </motion.section>
    </div>
  )
}
