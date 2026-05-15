import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petrobras: estude com cursos completos até a prova | Gran Cursos",
  description: "Prepare-se para o concurso Petrobras com a plataforma líder em aprovação. Salários de até R$ 14 mil, +1 mil vagas previstas. Videoaulas, PDFs, Audiobooks e cronograma de estudos.",
  keywords: "concurso petrobras, preparatório petrobras, curso petrobras, edital petrobras, vagas petrobras",
  openGraph: {
    title: "Petrobras: estude com cursos completos até a prova | Gran Cursos",
    description: "Prepare-se para o concurso Petrobras com a plataforma líder em aprovação. Salários de até R$ 14 mil.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#00A651",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
