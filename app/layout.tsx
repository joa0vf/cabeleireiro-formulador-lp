import type { Metadata } from 'next';
import { Inter, Arima } from 'next/font/google';
import Script from 'next/script';
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
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1946553129283243');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1946553129283243&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
