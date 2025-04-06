import type { Metadata } from 'next';
<<<<<<< HEAD
import { Didact_Gothic } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import WebshopButton from '../components/WebshopButton';
import { WebshopProvider } from '../components/webshop/WebshopContext';
import dynamic from 'next/dynamic';

const WebshopModal = dynamic(() => import('../components/webshop/WebshopModal'), {
  ssr: false,
});

const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: '400', 
});
=======
import { Inter } from 'next/font/google';
import './globals.css'; // Correct import for globals.css
import Header from '../components/Header/Header'; // Note the relative path from src/app to components
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01

export const metadata: Metadata = {
  title: 'Ugled - Stolarija',
  description: 'Kreiramo izuzetne stvari',
};

<<<<<<< HEAD
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="sr" className={didactGothic.className}>
      <body>
        <WebshopProvider>
          <div className="relative min-h-screen overflow-hidden">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WebshopButton />
            <WebshopModal />
          </div>
        </WebshopProvider>
=======
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <div className="relative min-h-screen overflow-hidden">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
      </body>
    </html>
  );
}
