'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>A Software Developer's Tech Notes</title>
        <meta charset='UTF-8' />
        <meta
          name='description'
          content='A blog about learning software development'
        />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, NextJS, MongoDB, Firebase, NextAuth, TailwindCSS, Chakra-UI, NodeJS'
        />
        <meta name='author' content='Jerry Doran' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body className='dark:bg-slate-900 text-slate-900 bg-slate-300'>
        <ThemeProvider attribute='class'>
          <Header />
          <main className='mx-auto max-w-4xl px-6'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
