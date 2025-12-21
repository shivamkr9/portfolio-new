"use client"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import { DATA } from "@/data/resume"
import { motion } from "framer-motion"


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
                <h1 className="md:text-3xl  font-bold text-balance">What I Do</h1>
            </motion.div>

            <motion.section
                className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {DATA.features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                            <Card
                                className={`group relative overflow-hidden border-border/50 bg-linear-to-br ${feature.gradient} backdrop-blur-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300 h-full`}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <CardHeader className="space-y-4 relative">
                                    <div
                                        className={`inline-flex p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 w-fit group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className={`size-6 ${feature.iconColor}`} strokeWidth={2} />
                                    </div>

                                    <div className="space-y-3">
                                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-foreground transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
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