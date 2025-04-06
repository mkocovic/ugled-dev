import type { Metadata } from 'next';
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
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WebshopButton />
            <WebshopModal />
          </div>
        </WebshopProvider>
      </body>
    </html>
  );
}
