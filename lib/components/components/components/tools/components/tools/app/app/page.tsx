import React from 'react';
import SearchBar from '@/components/SearchBar';
import { TOOLS } from '@/lib/tools';
import Link from 'next/link';
import { Shield, Zap, Lock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-space text-zinc-900 dark:text-white mb-6">
          Every tool you need.<br />
          <span className="text-indigo-600 dark:text-indigo-400">Free, fast, private.</span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          30 free tools that run entirely in your browser — your files never leave your device.
        </p>

        {/* Oversized Search Bar */}
        <SearchBar isHero={true} />

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-indigo-600" /> No signup</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-600" /> 100% Client-side</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-500" /> Free forever</span>
        </div>
      </section>

      {/* Popular Tools Grid */}
      <section className="mt-16">
        <h2 className="text-xl font-bold font-space mb-6 text-zinc-900 dark:text-white">Popular Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/${tool.category}/${tool.slug}`}
              className="p-5 bg-white dark:bg-[#16161C] border border-zinc-200 dark:border-[#26262E] rounded-2xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-150 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                    {tool.category}
                  </span>
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                  {tool.name}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
