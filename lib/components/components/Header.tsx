'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Sun, Moon, Star } from 'lucide-react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-[#26262E] bg-white/80 dark:bg-[#0B0B0F]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo simovLab */}
        <Link href="/" className="text-xl font-bold tracking-tight font-space text-zinc-900 dark:text-white">
          simov<span className="text-indigo-600 dark:text-indigo-400">Lab</span>
        </Link>

        {/* Barre de recherche d'en-tête */}
        <div className="flex-1 max-w-md hidden md:block">
          <SearchBar isHero={false} />
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <Link href="/favorites" className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">Favorites</span>
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}
