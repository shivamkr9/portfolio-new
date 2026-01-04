"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Loader2, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, }),
      })

      if (!response.ok) throw new Error("Failed to send")

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      })
      form.reset()
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later or contact me directly via email.",
      })
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
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold lg:text-5xl">
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
          <div className="group relative">
            <div className="bg-card/50 border-border/50 relative rounded-xl border p-8 backdrop-blur-sm md:p-10 lg:p-12">
              <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-background/50 border-border/50 focus:border-primary h-12 transition-colors"
                              disabled={isSubmitting}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@gmail.com"
                              className="bg-background/50 border-border/50 focus:border-primary h-12 transition-colors"
                              disabled={isSubmitting}
                              {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Contact</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className="bg-background/50 border-border/50 focus:border-primary h-12 transition-colors"
                            disabled={isSubmitting}
                            {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can I help you?"
                            disabled={isSubmitting}
                            className="bg-background/50 border-border/50 focus:border-primary min-h-[160px] resize-none transition-colors"
                            {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="group w-full transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
