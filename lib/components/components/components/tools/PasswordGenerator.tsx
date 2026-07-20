'use client';

import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = '';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) return setPassword('');

    let result = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }
    setPassword(result);
  };

  React.useEffect(() => {
    generatePassword();
  }, [length, useUpper, useLower, useNumbers, useSymbols]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 bg-white dark:bg-[#16161C] border border-zinc-200 dark:border-[#26262E] rounded-2xl shadow-sm max-w-xl mx-auto">
      <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl mb-6">
        <span className="font-mono text-lg font-semibold text-zinc-900 dark:text-zinc-100 break-all">
          {password || 'Select at least one option'}
        </span>
        <div className="flex items-center gap-2">
          <button onClick={generatePassword} className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition">
            <RefreshCw className="w-5 h-5" />
          </button>
          <button onClick={copyToClipboard} className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm transition">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="flex justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            <span>Length: {length}</span>
          </label>
          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="rounded accent-indigo-600 w-4 h-4" />
            Uppercase (A-Z)
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="rounded accent-indigo-600 w-4 h-4" />
            Lowercase (a-z)
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className="rounded accent-indigo-600 w-4 h-4" />
            Digits (0-9)
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className="rounded accent-indigo-600 w-4 h-4" />
            Symbols (!@#$)
          </label>
        </div>
      </div>
    </div>
  );
}
