import { emailTemplates } from "@/lib/email-templates"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, contact, message, template = "google" } = data

    // Validate input
    if (!name || !email || !contact || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      // secure: false, // true only for port 465
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    const templateFn =
      emailTemplates[template as keyof typeof emailTemplates] ||
      emailTemplates.minimalist

    const htmlContent = templateFn({ name, email, contact, message })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_SERVER_USER, // send to yourself
      replyTo: email, // user's email
      subject: `Contact Message from ${name}`,
      html: htmlContent,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("Nodemailer error:", error)
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
