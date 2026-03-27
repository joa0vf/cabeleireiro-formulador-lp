import type { Metadata } from 'next';
import { Inter, Arima } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const arima = Arima({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Cabeleireiro Científico Formulador | De Aplicador a Formulador',
  description: 'Descubra o Método Cabeleireiro Científico Formulador e torne-se referência em cosmetologia capilar.',
    icons: {
      icon: [
        {
          url: '/images/ccficone_branco.png',
          type: 'image/png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/images/ccficone_preto.png',
          type: 'image/png',
          media: '(prefers-color-scheme: light)',
        },
      ],
      apple: '/images/ccficone_preto.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${arima.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#FDFBF7] text-[#1A1A1A] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
