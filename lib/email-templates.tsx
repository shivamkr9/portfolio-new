export type EmailData = {
  name: string
  email: string
  contact: string
  message: string
}

export const emailTemplates = {
  minimalist: (data: EmailData) => `
    <div style="font-family: 'Geist', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; color: #1a1a1a; background: #ffffff;">
      <h2 style="font-weight: 400; font-size: 24px; margin-bottom: 32px; border-bottom: 1px solid #eaeaea; padding-bottom: 16px;">New Inquiry</h2>
      <div style="margin-bottom: 24px;">
        <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">From</p>
        <p style="font-size: 16px; margin: 0;"><strong>${data.name}</strong> (${data.email})</p>
      </div>
      <div style="margin-bottom: 24px;">
        <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Contact</p>
        <p style="font-size: 16px; margin: 0;">${data.contact}</p>
      </div>
      <div style="margin-bottom: 32px;">
        <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Message</p>
        <p style="font-size: 16px; line-height: 1.6; margin: 0; background: #f9f9f9; padding: 20px; border-radius: 4px;">${data.message}</p>
      </div>
      <footer style="font-size: 12px; color: #999; border-top: 1px solid #eaeaea; padding-top: 16px;">
        Sent from your portfolio contact form.
      </footer>
    </div>
  `,

  agency: (data: EmailData) => `
    <div style="font-family: 'Times New Roman', serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #e5d5d1; color: #1b3d2f;">
      <div style="border: 1px solid #1b3d2f; padding: 30px; border-radius: 8px;">
        <h1 style="font-size: 32px; font-weight: normal; margin-top: 0;">Message Received</h1>
        <hr style="border: 0; border-top: 1px solid #1b3d2f; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-style: italic; width: 100px;">Name:</td>
            <td style="padding: 10px 0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-style: italic;">Email:</td>
            <td style="padding: 10px 0;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-style: italic;">Contact:</td>
            <td style="padding: 10px 0;">${data.contact}</td>
          </tr>
        </table>
        <div style="margin-top: 30px;">
          <p style="font-style: italic; margin-bottom: 10px;">The message:</p>
          <div style="background: rgba(255,255,255,0.3); padding: 20px; border-radius: 4px; line-height: 1.5;">
            ${data.message}
          </div>
        </div>
      </div>
    </div>
  `,

  bold: (data: EmailData) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background-color: #000000; color: #ffffff;">
      <div style="padding: 60px 40px;">
        <h1 style="font-size: 60px; line-height: 0.9; margin: 0; text-transform: uppercase; font-weight: 900; letter-spacing: -2px;">
          NEW<br/>CONNECT
        </h1>
        <div style="margin-top: 40px; border-left: 4px solid #ff9a9a; padding-left: 20px;">
          <p style="font-size: 24px; margin: 0 0 10px 0;">${data.name}</p>
          <p style="font-size: 16px; color: #ff9a9a; margin: 0;">${data.email} • ${data.contact}</p>
        </div>
        <div style="margin-top: 60px;">
          <p style="font-size: 18px; line-height: 1.6; opacity: 0.9;">
            ${data.message}
          </p>
        </div>
      </div>
    </div>
  `,

  // Template 4: Clean Dashboard Style (Inspired by Image 4)
  dashboard: (data: EmailData) => `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 20px; border-radius: 12px; border: 1px solid #333;">
      <div style="display: flex; align-items: center; margin-bottom: 24px;">
        <div style="width: 12px; height: 12px; background: #3b82f6; border-radius: 50%; margin-right: 12px;"></div>
        <span style="font-weight: 600; font-size: 14px; letter-spacing: 1px; color: #aaa; text-transform: uppercase;">Incoming Notification</span>
      </div>
      <div style="background: #1a1a1a; border-radius: 8px; border: 1px solid #333; padding: 24px; margin-bottom: 16px;">
        <div style="margin-bottom: 20px;">
          <label style="display: block; font-size: 12px; color: #666; margin-bottom: 4px;">SENDER</label>
          <div style="font-size: 16px;">${data.name} <span style="color: #444;">&lt;${data.email}&gt;</span></div>
        </div>
        <div style="margin-bottom: 20px;">
          <label style="display: block; font-size: 12px; color: #666; margin-bottom: 4px;">CONTACT INFO</label>
          <div style="font-size: 16px;">${data.contact}</div>
        </div>
        <div>
          <label style="display: block; font-size: 12px; color: #666; margin-bottom: 4px;">CONTENT</label>
          <div style="font-size: 15px; color: #ddd; line-height: 1.6;">${data.message}</div>
        </div>
      </div>
    </div>
  `,

  // Template 5: Card Centric
  card: (data: EmailData) => `
    <div style="background-color: #f3f4f6; padding: 40px 20px; font-family: ui-sans-serif, system-ui, sans-serif;">
      <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); height: 8px;"></div>
        <div style="padding: 32px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="background: #f3f4f6; width: 64px; height: 64px; border-radius: 50%; display: inline-block; padding: 16px; margin-bottom: 16px;">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" style="width: 32px; height: 32px;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 style="margin: 0; color: #111827; font-size: 20px;">You've got mail!</h2>
            <p style="margin: 4px 0 0; color: #6b7280; font-size: 14px;">Someone reached out via your portfolio</p>
          </div>
          <div style="border-top: 1px solid #f3f4f6; padding-top: 24px;">
            <div style="margin-bottom: 16px;">
              <span style="display: block; font-size: 12px; font-weight: 700; color: #374151; text-transform: uppercase;">From ${data.name}</span>
              <span style="color: #6366f1; font-size: 14px;">${data.email}</span>
            </div>
            <div style="background: #f9fafb; border-radius: 8px; padding: 16px; color: #4b5563; font-size: 14px; line-height: 1.5;">
              ${data.message}
            </div>
          </div>
          <a href="mailto:${data.email}" style="display: block; text-align: center; margin-top: 24px; background: #6366f1; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply Directly</a>
        </div>
      </div>
    </div>
  `,
  google: (data: EmailData) => `
   <div style="background-color: #ffffff; padding: 40px 20px; font-family: 'Roboto', 'Arial', sans-serif; color: #3c4043;">
  <div style="max-width: 540px; margin: 0 auto; border: 1px solid #dadce0; border-radius: 8px; padding: 40px; text-align: left;">
    <div style="text-align: center; margin-bottom: 32px;">
      <h1 style="font-size: 24px; font-weight: 400; color: #202124; margin: 0;">
        New message from your portfolio
      </h1>
    </div>

    <div style="border-top: 1px solid #dadce0; margin-bottom: 24px;"></div>

    <p style="font-size: 14px; line-height: 20px; color: #3c4043; margin-bottom: 24px;">
      You have received a new message from <strong>${data.email}</strong> through your portfolio contact form.
    </p>

    <p style="font-size: 14px; line-height: 20px; color: #3c4043; margin-bottom: 16px;">
      Below are the contact details provided by <strong>${data.name}</strong>:
    </p>

    <div style="text-align: center; margin: 32px 0;">
      <div style="font-size: 32px; color: #202124; letter-spacing: -0.5px; font-weight: 400;">
        ${data.name}
      </div>
      <div style="font-size: 14px; color: #70757a; margin-top: 8px;">
        Phone: ${data.contact}
      </div>
    </div>

    <div style="background: #f8f9fa; border-radius: 4px; padding: 20px; margin-bottom: 24px; border: 1px solid #f1f3f4;">
      <p style="font-size: 14px; line-height: 1.6; color: #3c4043; margin: 0;">
        ${data.message}
      </p>
    </div>


  </div>

  <div style="max-width: 540px; margin: 24px auto 0; text-align: center;">
    <p style="font-size: 12px; color: #70757a; line-height: 16px;">
      Sent via your Portfolio Contact Form
    </p>
  </div>
</div>
  `,
}
