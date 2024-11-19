import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArtificialBrain - Tu Cerebro Digital con IA',
  description: 'Transforma tu vida digital con ArtificialBrain - Un cerebro digital potenciado por IA que organiza y mejora tu mundo digital.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-black via-gray-900 to-slate-900 text-white min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}