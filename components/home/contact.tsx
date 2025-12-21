"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: data.message || "Message sent successfully!",
                })
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.error || "Failed to send message. Please try again.",
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Network error. Please check your connection and try again.",
            })
            console.log("error", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="relative">
            <div className="space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <h2 className="lg:text-5xl text-3xl  font-bold ">
                        Let&apos;s Work Together
                    </h2>
                </motion.div>

                {/* Contact Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative group">
                        <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-10 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium">
                                        Phone Number
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="min-h-[160px] bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <AnimatePresence mode="wait">
                                    {submitStatus.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={`flex items-center gap-2 p-4 rounded-lg ${submitStatus.type === "success"
                                                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                                : "bg-red-500/10 text-red-500 border border-red-500/20"
                                                }`}
                                        >
                                            {submitStatus.type === "success" ? (
                                                <CheckCircle2 className="h-5 w-5 shrink-0" />
                                            ) : (
                                                <XCircle className="h-5 w-5 shrink-0" />
                                            )}
                                            <p className="text-sm">{submitStatus.message}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full  transition-opacity group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}