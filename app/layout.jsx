import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Dug's Blog",
  description: 'Created by Dug',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark:bg-slate-900`}>
        <Navbar />
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
