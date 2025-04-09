import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface CartItem {
  type: 'window' | 'door';
  options: {
    material: string;
    style?: string;
    doorType?: 'ulazna' | 'sobna';
    lock?: string;
    handle?: string;
    woodOption?: string;
    hasRoletne?: boolean;
    hasKomarnici?: boolean;
    hasSpoljasnjeOkapnice?: boolean;
    hasUnutrasnjeOkapnice?: boolean;
    dimensions: {
      width: number;
      height: number;
    };
  };
  quantity: number;
}

interface ContactForm {
  userType: 'individual' | 'company';
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  company?: string;
  deliveryTime: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cart, contactForm } = body as { cart: CartItem[]; contactForm: ContactForm };

    // Send email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kocovic34k@gmail.com',
      subject: 'Novi upit za ponudu',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #333; border-bottom: 2px solid #b69b5f; padding-bottom: 10px;">Novi upit za ponudu</h2>
          
          <h3 style="color: #555; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Proizvodi:</h3>
          <ul style="list-style: none; padding: 0;">
            ${cart.map(item => `
              <li style="margin-bottom: 15px; padding: 15px; background: #f9f9f9; border-radius: 5px; border-left: 3px solid #b69b5f;">
                <strong style="color: #333;">${item.type === 'window' ? 'Prozor' : (item.options.doorType === 'ulazna' ? 'Ulazna Vrata' : 'Sobna Vrata')} - ${item.options.material}</strong><br>
                ${item.options.style ? `<span style="color: #666;">Stil: ${item.options.style}</span><br>` : ''}
                <span style="color: #666;">Dimenzije: ${item.options.dimensions.width} x ${item.options.dimensions.height} cm</span><br>
                ${item.options.doorType === 'ulazna' ? `<span style="color: #666;">Brava: ${item.options.lock}</span><br>` : ''}
                ${item.options.doorType === 'ulazna' ? `<span style="color: #666;">Kvaka: ${item.options.handle}</span><br>` : ''}
                ${item.options.woodOption ? `<span style="color: #666;">Vrsta drveta: ${item.options.woodOption}</span><br>` : ''}
                ${item.options.hasRoletne ? '<span style="color: #666;">✅ Roletne</span><br>' : ''}
                ${item.options.hasKomarnici ? '<span style="color: #666;">✅ Komarnici</span><br>' : ''}
                ${item.options.hasSpoljasnjeOkapnice ? '<span style="color: #666;">✅ Spoljašnje okapnice</span><br>' : ''}
                ${item.options.hasUnutrasnjeOkapnice ? '<span style="color: #666;">✅ Unutrašnje okapnice</span><br>' : ''}
                <span style="color: #333; font-weight: bold;">Količina: ${item.quantity}</span>
              </li>
            `).join('')}
          </ul>

          <h3 style="color: #555; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Kontakt informacije:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #b69b5f;">
            <p style="margin: 5px 0;"><strong style="color: #333;">Tip korisnika:</strong> ${contactForm.userType === 'individual' ? 'Fizičko lice' : 'Pravno lice'}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Ime i prezime:</strong> ${contactForm.name}</p>
            ${contactForm.company ? `<p style="margin: 5px 0;"><strong style="color: #333;">Firma:</strong> ${contactForm.company}</p>` : ''}
            <p style="margin: 5px 0;"><strong style="color: #333;">Email:</strong> ${contactForm.email}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Telefon:</strong> ${contactForm.phone}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Adresa:</strong> ${contactForm.address}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Grad:</strong> ${contactForm.city}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Poštanski broj:</strong> ${contactForm.postalCode}</p>
            <p style="margin: 5px 0;"><strong style="color: #333;">Rok isporuke:</strong> ${contactForm.deliveryTime}</p>
            ${contactForm.message ? `
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
                <p style="margin: 5px 0;"><strong style="color: #333;">Dodatna poruka:</strong></p>
                <p style="margin: 5px 0; color: #666; white-space: pre-wrap;">${contactForm.message}</p>
              </div>
            ` : ''}
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