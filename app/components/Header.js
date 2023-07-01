'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  function pathMatchRoute(route) {
    if (route === pathname) return true;
  }

  function renderThemeChanger() {
    if (!mounted) return null;

    const currentTheme = theme === 'dark' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='w-9 h-9 text-yellow-500 transition p-1.5 rounded hover:bg-slate-700'
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-9 h-9 p-1.5 transition rounded hover:bg-slate-100'
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  }

  return (
    <header
      className={`${
        isScroll && 'dark:bg-[#20222a]/90 bg-slate-300/90 sticky top-0 '
      }`}
    >
      <nav className='py-8 flex mx-auto px-6 max-w-4xl items-center'>
        <div className='flex space-x-6 dark:text-white'>
          <Link
            href='/'
            className={`font-semibold border-b-[2px] border-b-transparent transition hover:text-violet-400 ${
              pathMatchRoute('/') && 'border-b-violet-400'
            }`}
          >
            Home
          </Link>
        </div>

        <div className='ml-auto'>{renderThemeChanger()}</div>
      </nav>
    </header>
  );
}
