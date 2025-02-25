import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Correct import for globals.css
import Header from '../components/Header/Header'; // Note the relative path from src/app to components
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ugled - Stolarija',
  description: 'Kreiramo izuzetne stvari',
};

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
      </body>
    </html>
  );
}
