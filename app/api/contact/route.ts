import { emailTemplates } from "@/lib/email-templates"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, contact, message, template = "google" } = data

    // Validate input
    if (!name || !email || !contact || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Get the selected template HTML
    const templateFn = emailTemplates[template as keyof typeof emailTemplates] || emailTemplates.minimalist
    const htmlContent = templateFn({ name, email, contact, message })

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_FROM}>`, // Often needs to be a verified domain
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: htmlContent,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("[v0] Nodemailer error:", error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}
