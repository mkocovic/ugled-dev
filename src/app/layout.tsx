import type { Metadata } from 'next';
import { Didact_Gothic } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { WebshopProvider } from '../components/webshop/WebshopContext';
<<<<<<< HEAD
import WebshopButton from '../components/webshop/WebshopButton';
import WebshopModal from '../components/webshop/WebshopModal';

const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: '400', 
=======

const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: '400',
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
});

export const metadata: Metadata = {
  title: 'Ugled - Stolarija',
  description: 'Kreiramo izuzetne stvari',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="sr" className={didactGothic.className}>
      <body>
        <WebshopProvider>
          <div className="relative min-h-screen overflow-hidden">
            <Header />
<<<<<<< HEAD
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WebshopButton />
            <WebshopModal />
=======
            <main className="flex-grow">{children}</main>
            <Footer />
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
          </div>
        </WebshopProvider>
      </body>
    </html>
  );
}
