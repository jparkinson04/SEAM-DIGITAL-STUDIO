import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://seamdigitalstudio.com'),
  title: 'Seam Digital Studio, the complete digital setup for small businesses',
  description:
    'A complete digital setup for small businesses. Website, bookings, reviews and content, all connected and working together. Based in Doncaster.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Seam Digital Studio',
    description:
      'A complete digital setup for small businesses. Website, bookings, reviews and content, all connected.',
    url: 'https://seamdigitalstudio.com',
    siteName: 'Seam Digital Studio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main id="top">{children}</main>
        <CTABand />
        <Footer />
      </body>
    </html>
  );
}
