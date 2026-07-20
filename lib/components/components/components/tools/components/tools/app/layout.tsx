import React from 'react';
import Header from '@/components/Header';
import '@/app/globals.css';

export const metadata = {
  title: 'simovLab — 30 Free Client-Side Online Tools',
  description: 'Free, fast, and private tools running entirely in your browser.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#FAFAFA] dark:bg-[#0B0B0F] text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
