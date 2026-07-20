'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Upload, FileText, Download, Trash2 } from 'lucide-react';

export default function PdfMerger() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const mergePdfs = async () => {
    if (files.length < 2) return;
    setIsProcessing(true);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged_simovlab.pdf';
      link.click();
    } catch (err) {
      alert('Error merging PDFs. Ensure files are valid and unencrypted.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-[#16161C] border border-zinc-200 dark:border-[#26262E] rounded-2xl shadow-sm max-w-2xl mx-auto text-center">
      <label className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-600 transition mb-6">
        <Upload className="w-10 h-10 text-zinc-400 mb-3" />
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">Click to upload or drag & drop PDFs</span>
        <span className="text-xs text-zinc-500 mt-1">Files stay on your browser</span>
        <input type="file" multiple accept="application/pdf" onChange={handleFileChange} className="hidden" />
      </label>

      {files.length > 0 && (
        <div className="space-y-2 mb-6 text-left">
          {files.map((file, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="flex items-center gap-3 truncate">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">{file.name}</span>
              </div>
              <button onClick={() => removeFile(idx)} className="text-red-500 hover:text-red-600 p-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={mergePdfs}
        disabled={files.length < 2 || isProcessing}
        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
      >
        <Download className="w-5 h-5" />
        {isProcessing ? 'Merging PDF files...' : `Merge ${files.length} PDFs`}
      </button>
    </div>
  );
}
