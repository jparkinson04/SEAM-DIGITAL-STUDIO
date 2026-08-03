import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://seamdigitalstudio.com'),
  title: 'Seam Digital Studio, websites, branding and messaging for small businesses',
  description:
    'Websites that look right, sound right, and are built around how your customers actually think. Website design, branding and messaging for small businesses, based in Doncaster.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Seam Digital Studio',
    description:
      'Website design, branding and messaging for small businesses. Built around your story, and how your customers actually think.',
    url: 'https://seamdigitalstudio.com',
    siteName: 'Seam Digital Studio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Marks JS as available so reveal start-states only hide content when they can animate */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <SmoothScroll />
        <CustomCursor />
        <Nav />
        <main id="top">{children}</main>
        <CTABand />
        <Footer />
      </body>
    </html>
  );
}
