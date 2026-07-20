'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Command } from 'lucide-react';
import { TOOLS, Tool } from '@/lib/tools';
import Link from 'next/link';

export default function SearchBar({ isHero = false }: { isHero?: boolean }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredTools = query.trim()
    ? TOOLS.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.description.toLowerCase().includes(query.toLowerCase()) ||
          t.keywords.some((k) => k.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div
        className={`relative flex items-center bg-white dark:bg-[#16161C] border border-zinc-200 dark:border-[#26262E] rounded-2xl shadow-sm transition-all ${
          isHero ? 'p-4 text-lg' : 'p-2.5 text-sm'
        } focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/20`}
      >
        <Search className={`text-zinc-400 mr-3 ${isHero ? 'w-6 h-6' : 'w-4 h-4'}`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search 30+ free tools (e.g. merge pdf, password generator)..."
          className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400 font-sans"
        />
        <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-mono text-zinc-500">
          <Command className="w-3 h-3" />
          <span>/</span>
        </div>
      </div>

      {/* Résultats en temps réel */}
      {isOpen && filteredTools.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-[#16161C] border border-zinc-200 dark:border-[#26262E] rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto p-2">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/${tool.category}/${tool.slug}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
            >
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                  {tool.name}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{tool.description}</div>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                {tool.category}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
