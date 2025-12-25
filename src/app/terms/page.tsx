'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="PT PUTRA RATO MAHKOTA" className="h-12 w-auto mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT PUTRA RATO MAHKOTA</h1>
                <p className="text-xs text-gray-600">Perdagangan Besar Alat Olahraga</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gavel className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              PT PUTRA RATO MAHKOTA - Perdagangan Besar Alat Olahraga
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-600" />
                Penerimaan Syarat dan Ketentuan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di PT PUTRA RATO MAHKOTA. Dengan mengakses dan menggunakan website kami, Anda menyetujui 
                untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
                Anda tidak boleh menggunakan website atau layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-3 text-orange-600" />
                Definisi
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">"Perusahaan"</span> merujuk pada PT PUTRA RATO MAHKOTA, entitas bisnis yang bergerak di perdagangan besar alat olahraga.
                </div>
                <div>
                  <span className="font-semibold">"Pelanggan"</span> merujuk pada individu atau entitas yang membeli produk atau menggunakan layanan dari Perusahaan.
                </div>
                <div>
                  <span className="font-semibold">"Produk"</span> merujuk pada semua alat olahraga dan peralatan terkait yang dijual oleh Perusahaan.
                </div>
                <div>
                  <span className="font-semibold">"Website"</span> merujuk pada situs web resmi PT PUTRA RATO MAHKOTA.
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layanan Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PT PUTRA RATO MAHKOTA menyediakan layanan perdagangan besar alat olahraga meliputi:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Penjualan eceran dan grosir alat olahraga</li>
                <li>Konsultasi produk dan kebutuhan olahraga</li>
                <li>Pengiriman produk ke seluruh Indonesia</li>
                <li>Layanan purnajual dan garansi produk</li>
                <li>Informasi dan edukasi tentang produk olahraga</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pemesanan dan Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Proses Pemesanan</h3>
                  <p className="text-gray-600">
                    Semua pemesanan harus dilakukan melalui saluran resmi kami. Perusahaan berhak menolak atau membatalkan pesanan 
                    dengan alasan apa pun termasuk ketersediaan produk atau kegagalan pembayaran.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Metode Pembayaran</h3>
                  <p className="text-gray-600">
                    Kami menerima berbagai metode pembayaran termasuk transfer bank, kartu kredit/debit, dan metode pembayaran digital lainnya. 
                    Semua pembayaran harus diselesaikan sebelum pengiriman produk.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Harga</h3>
                  <p className="text-gray-600">
                    Harga yang tercantum adalah harga berlaku dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. 
                    Harga belum termasuk biaya pengiriman dan pajak yang berlaku.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pengiriman dan Pengembalian</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Pengiriman</h3>
                  <p className="text-gray-600">
                    Perusahaan akan berusaha keras untuk mengirimkan produk dalam waktu yang ditentukan. Namun, kami tidak bertanggung jawab 
                    atas keterlambatan yang disebabkan oleh faktor eksternal seperti cuaca, transportasi, atau keadaan kahar.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Kebijakan Pengembalian</h3>
                  <p className="text-gray-600">
                    Produk dapat dikembalikan dalam kondisi asli dan belum digunakan dalam waktu 7 hari setelah penerimaan. 
                    Biaya pengiriman pengembalian ditanggung oleh pembeli kecuali produk rusak atau salah kirim.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600 leading-relaxed">
                Semua konten di website ini termasuk namun tidak terbatas pada teks, gambar, logo, dan desain dilindungi oleh 
                hak kekayaan intelektual milik PT PUTRA RATO MAHKOTA atau pihak ketiga yang berwenang. 
                Dilarang keras menggunakan, menyalin, atau mendistribusikan konten tanpa izin tertulis dari Perusahaan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kewajiban Pelanggan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pelanggan, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Menggunakan website untuk tujuan yang sah dan sesuai</li>
                <li>Tidak melakukan aktivitas yang merugikan Perusahaan atau pelanggan lain</li>
                <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
                <li>Tidak mencoba merusak atau mengganggu sistem keamanan website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600 leading-relaxed">
                PT PUTRA RATO MAHKOTA tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial 
                yang timbul dari penggunaan website atau produk kami. Tanggung jawab maksimum kami adalah nilai pembelian produk yang 
                menjadi sengketa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privasi dan Data Pribadi</h2>
              <p className="text-gray-600 leading-relaxed">
                Perlindungan data pribadi Anda adalah prioritas kami. Penggunaan data pribadi diatur oleh Kebijakan Privasi kami yang 
                merupakan bagian tidak terpisahkan dari Syarat dan Ketentuan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h2>
              <p className="text-gray-600 leading-relaxed">
                Perusahaan tidak bertanggung jawab atas kegagalan melaksanakan kewajiban jika disebabkan oleh kejadian di luar 
                kendali wajar kami termasuk bencana alam, perang, kerusuhan, atau tindakan pemerintah.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                PT PUTRA RATO MAHKOTA berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku efektif 
                segera setelah diposting di website. Penggunaan website yang berkelanjutan setelah perubahan menunjukkan 
                penerimaan Anda terhadap syarat yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hukum yang Berlaku</h2>
              <p className="text-gray-600 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa akan diselesaikan melalui negosiasi terlebih dahulu, dan jika tidak mencapai kesepakatan, 
                akan diselesaikan melalui pengadilan yang berwenang di Jakarta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">Email:</span> legal@putratatomahkota.co.id
                  </div>
                  <div>
                    <span className="font-semibold">Telepon:</span> 082382466172
                  </div>
                  <div>
                    <span className="font-semibold">Alamat:</span><br />
                    JL. GAJAH MADA 3-5, KOMP, DUTA MERLIN BLOK F NO. 4<br />
                    Desa/Kelurahan Petojo Utara, Kec. Gambir<br />
                    Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <p className="text-center text-gray-600">
                  Dengan menggunakan website PT PUTRA RATO MAHKOTA, Anda mengakui bahwa telah membaca, 
                  memahami, dan menyetujui Syarat dan Ketentuan ini.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 PT PUTRA RATO MAHKOTA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}