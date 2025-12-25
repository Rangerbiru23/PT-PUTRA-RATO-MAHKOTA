import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Format email content
    const emailContent = `
      New contact form submission from PT PUTRA RATO MAHKOTA website:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
      
      ---
      Sent on: ${new Date().toLocaleString('id-ID', { 
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
    `;

    // Log the contact (dalam implementasi nyata, ini akan mengirim email atau menyimpan ke database)
    console.log('Contact Form Submission:', emailContent);

    // Simulasi pengiriman email (dalam implementasi nyata gunakan email service)
    // await sendEmail({
    //   to: 'info@putratatomahkota.co.id',
    //   subject: `New Contact Form: ${name}`,
    //   text: emailContent
    // });

    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint for PT PUTRA RATO MAHKOTA',
    methods: ['POST'],
    company: {
      name: 'PT PUTRA RATO MAHKOTA',
      business: 'Perdagangan Besar Alat Olahraga',
      address: 'JL. GAJAH MADA 3-5, KOMP, DUTA MERLIN BLOK F NO. 4, Desa/Kelurahan Petojo Utara, Kec. Gambir, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta',
      phone: '082382466172'
    }
  });
}