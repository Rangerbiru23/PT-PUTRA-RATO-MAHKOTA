import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    company: {
      name: "PT PUTRA RATO MAHKOTA",
      address: "JL. GAJAH MADA 3-5, KOMP, DUTA MERLIN BLOK F NO. 4, Desa/Kelurahan Petojo Utara, Kec. Gambir, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta",
      phone: "082382466172",
      email: "",
      business: "PERDAGANGAN BESAR ALAT OLAHRAGA"
    }
  });
}