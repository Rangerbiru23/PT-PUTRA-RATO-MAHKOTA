import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT PUTRA RATO MAHKOTA - Perdagangan Besar Alat Olahraga",
  description: "Supplier terpercaya untuk semua kebutuhan alat olahraga berkualitas tinggi. Menyediakan berbagai macam peralatan olahraga untuk institusi, sekolah, dan distributor.",
  keywords: ["PT PUTRA RATO MAHKOTA", "alat olahraga", "sports equipment", "perdagangan besar", "supplier olahraga", "jakarta", "indonesia"],
  authors: [{ name: "PT PUTRA RATO MAHKOTA" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PT PUTRA RATO MAHKOTA - Perdagangan Besar Alat Olahraga",
    description: "Supplier terpercaya untuk semua kebutuhan alat olahraga berkualitas tinggi di Indonesia",
    siteName: "PT PUTRA RATO MAHKOTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT PUTRA RATO MAHKOTA - Perdagangan Besar Alat Olahraga",
    description: "Supplier terpercaya untuk semua kebutuhan alat olahraga berkualitas tinggi di Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="6r1i0vax7mw5q0r64enw8tregjvmiz" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
