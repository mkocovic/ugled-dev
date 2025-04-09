import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body as ContactFormData;

    // Send email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kocovic34k@gmail.com',
      subject: 'Novi kontakt upit',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #333; border-bottom: 2px solid #b69b5f; padding-bottom: 10px;">Novi kontakt upit</h2>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #b69b5f;">
            <p style="margin: 5px 0;"><strong style="color: #333;">Ime i prezime:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Telefon:</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Predmet:</strong> ${subject}</p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
              <p style="margin: 5px 0;"><strong style="color: #333;">Poruka:</strong></p>
              <p style="margin: 5px 0; color: #666; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 