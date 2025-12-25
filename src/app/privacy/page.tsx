'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
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
                <Eye className="h-6 w-6 mr-3 text-blue-600" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di PT PUTRA RATO MAHKOTA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda 
                menggunakan website dan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-3 text-blue-600" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Informasi Pribadi</h3>
                  <p className="text-gray-600">
                    Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon, alamat pengiriman, dan informasi 
                    pembayaran ketika Anda berinteraksi dengan kami.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Informasi Teknis</h3>
                  <p className="text-gray-600">
                    Kami mengumpulkan informasi teknis seperti alamat IP, jenis browser, sistem operasi, dan data penggunaan website untuk 
                    meningkatkan layanan kami.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Informasi Bisnis</h3>
                  <p className="text-gray-600">
                    Untuk mitra bisnis, kami mengumpulkan informasi perusahaan, nomor NPWP, dan dokumen bisnis lainnya yang diperlukan 
                    untuk kerjasama.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-blue-600" />
                Penggunaan Informasi
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Untuk Layanan Pelanggan</h3>
                  <p className="text-gray-600">
                    Menggunakan informasi Anda untuk merespons pertanyaan, memproses pesanan, dan menyediakan layanan pelanggan yang lebih baik.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Untuk Pemasaran</h3>
                  <p className="text-gray-600">
                    Mengirim informasi tentang produk, promosi, dan layanan kami dengan persetujuan Anda.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Untuk Peningkatan Layanan</h3>
                  <p className="text-gray-600">
                    Menganalisis data penggunaan untuk meningkatkan website dan layanan kami.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perlindungan Data</h2>
              <p className="text-gray-600 leading-relaxed">
                PT PUTRA RATO MAHKOTA berkomitmen untuk melindungi data pribadi Anda dengan menerapkan langkah-langkah keamanan yang 
                sesuai meliputi:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>System monitoring keamanan 24/7</li>
                <li>Backup data secara teratur</li>
                <li>Komplain dengan standar keamanan industri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Berbagi Informasi</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                <li>Dengan mitra bisnis tepercaya untuk menyediakan layanan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan PT PUTRA RATO MAHKOTA atau pelanggan kami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Anda</h2>
              <p className="text-gray-600 leading-relaxed">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Mengakses dan memperbarui informasi pribadi Anda</li>
                <li>Meminta penghapusan data pribadi Anda</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi yang kami simpan</li>
                <li>Melaporkan kekhawatiran tentang privasi data Anda</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file kecil yang disimpan di browser Anda. 
                Anda dapat mengatur browser untuk menolak cookies, namun ini dapat mempengaruhi fungsionalitas website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kebijakan Anak-anak</h2>
              <p className="text-gray-600 leading-relaxed">
                Website kami tidak ditujukan untuk anak-anak di bawah 13 tahun. Kami tidak sengaja mengumpulkan informasi pribadi dari anak-anak. 
                Jika kami mengetahui telah mengumpulkan informasi dari anak di bawah 13 tahun, kami akan menghapus informasi tersebut segera.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                PT PUTRA RATO MAHKOTA dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini 
                dengan tanggal pembaruan terbaru. Kami mendorong Anda untuk secara berkala meninjau kebijakan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">Email:</span> privacy@putratatomahkota.co.id
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