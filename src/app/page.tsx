'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Package, Truck, Award, Users, ChevronRight, Menu, X, CheckCircle } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Tentang</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Produk</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">PT PUTRA RATO MAHKOTA</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Perdagangan Besar Alat Olahraga
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Supplier terpercaya untuk semua kebutuhan alat olahraga berkualitas tinggi. 
                Menyediakan berbagai macam peralatan olahraga untuk institusi, sekolah, dan distributor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Hubungi Kami
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Lihat Katalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/store-hero.jpg" 
                alt="PT PUTRA RATO MAHKOTA Store" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-orange-600/80 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-sm">Produk</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">1000+</div>
                      <div className="text-sm">Pelanggan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">10+</div>
                      <div className="text-sm">Tahun Pengalaman</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">24/7</div>
                      <div className="text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">PT PUTRA RATO MAHKOTA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami adalah mitra terpercaya dalam perdagangan besar alat olahraga, 
              menyediakan produk berkualitas dengan harga kompetitif.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Produk Berkualitas</h3>
                <p className="text-gray-600">
                  Semua produk kami tersertifikasi dan memenuhi standar kualitas internasional untuk keselamatan olahraga.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pengiriman Cepat</h3>
                <p className="text-gray-600">
                  Jaringan distribusi luas memastikan pengiriman tepat waktu ke seluruh Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Harga Kompetitif</h3>
                <p className="text-gray-600">
                  Harga grosir terbaik untuk pembelian quantity dengan berbagai opsi pembayaran.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategori Produk Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lengkapnya peralatan olahraga untuk berbagai kebutuhan dan segmen pasar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Bola & Sepak Bola', items: '50+ Produk' },
              { name: 'Bola Basket & Voli', items: '40+ Produk' },
              { name: 'Alat Fitness', items: '80+ Produk' },
              { name: 'Tenis & Badminton', items: '60+ Produk' },
              { name: 'Renang & Air', items: '35+ Produk' },
              { name: 'Bela Diri', items: '45+ Produk' },
              { name: 'Atletik', items: '55+ Produk' },
              { name: 'Outdoor Sport', items: '70+ Produk' }
            ].map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warehouse Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/warehouse.jpg" 
                alt="PT PUTRA RATO MAHKOTA Warehouse" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Fasilitas Gudang Modern
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Gudang kami dilengkapi dengan sistem manajemen inventory modern, memastikan ketersediaan produk 
                dan pengiriman yang cepat dan akurat ke seluruh Indonesia.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inventory Management</h4>
                    <p className="text-gray-600">Sistem tracking real-time untuk semua produk</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Truck className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Logistics Expert</h4>
                    <p className="text-gray-600">Jaringan distribusi nasional yang luas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-600">PT PUTRA RATO MAHKOTA</span>
            </h2>
            <p className="text-lg text-gray-600">
              Siap melayani kebutuhan alat olahraga Anda dengan profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      JL. GAJAH MADA 3-5, KOMP, DUTA MERLIN BLOK F NO. 4<br />
                      Desa/Kelurahan Petojo Utara, Kec. Gambir<br />
                      Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">082382466172</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@putratatomahkota.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Masukkan nama Anda"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telepon (Opsional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tuliskan pesan Anda..."
                        required
                      ></textarea>
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-green-800">Pesan Anda telah berhasil dikirim!</span>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <span className="text-red-800">Terjadi kesalahan. Silakan coba lagi.</span>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="PT PUTRA RATO MAHKOTA" className="h-10 w-auto mr-3" />
                <div>
                  <h3 className="text-lg font-bold">PT PUTRA RATO MAHKOTA</h3>
                  <p className="text-xs text-gray-400">Perdagangan Besar Alat Olahraga</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Mitra terpercaya untuk semua kebutuhan alat olahraga berkualitas tinggi di Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  082382466172
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@putratatomahkota.co.id
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>Jakarta Pusat</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PT PUTRA RATO MAHKOTA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}