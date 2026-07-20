export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: 'pdf' | 'image' | 'text' | 'developer' | 'calculators' | 'generators';
  description: string;
  keywords: string[];
  icon: string;
  popular?: boolean;
}

export const TOOLS: Tool[] = [
  // PDF
  { id: 'pdf-merge', name: 'Merge PDF', slug: 'merge-pdf', category: 'pdf', description: 'Combine multiple PDF files into one document in seconds.', keywords: ['combine', 'join', 'pdf'], icon: 'FilePlus', popular: true },
  { id: 'pdf-split', name: 'Split PDF', slug: 'split-pdf', category: 'pdf', description: 'Extract specific pages or ranges from your PDF.', keywords: ['cut', 'extract', 'pages'], icon: 'FileCode' },
  { id: 'pdf-compress', name: 'Compress PDF', slug: 'compress-pdf', category: 'pdf', description: 'Reduce PDF file size while maintaining quality.', keywords: ['shrink', 'reduce', 'size'], icon: 'Minimize2' },
  { id: 'pdf-to-jpg', name: 'PDF to JPG', slug: 'pdf-to-jpg', category: 'pdf', description: 'Convert every page of a PDF into high-quality JPG images.', keywords: ['convert', 'image', 'export'], icon: 'Image' },
  { id: 'jpg-to-pdf', name: 'JPG to PDF', slug: 'jpg-to-pdf', category: 'pdf', description: 'Convert images into a clean single PDF document.', keywords: ['png', 'jpeg', 'make pdf'], icon: 'FileType' },

  // Image
  { id: 'jpg-to-png', name: 'JPG to PNG', slug: 'jpg-to-png', category: 'image', description: 'Convert JPG images to PNG format with transparency support.', keywords: ['convert', 'format'], icon: 'RefreshCw' },
  { id: 'png-to-jpg', name: 'PNG to JPG', slug: 'png-to-jpg', category: 'image', description: 'Convert PNG images to JPG with custom background colors.', keywords: ['convert', 'flatten'], icon: 'RefreshCw' },
  { id: 'webp-to-jpg', name: 'WEBP to JPG', slug: 'webp-to-jpg', category: 'image', description: 'Convert modern WEBP graphics to universal JPG files.', keywords: ['webp', 'convert'], icon: 'Image' },
  { id: 'image-compressor', name: 'Image Compressor', slug: 'image-compressor', category: 'image', description: 'Compress PNG, JPG, and WEBP images without losing quality.', keywords: ['shrink', 'optimize'], icon: 'Zap', popular: true },
  { id: 'image-resizer', name: 'Image Resizer', slug: 'image-resizer', category: 'image', description: 'Resize image dimensions with custom width, height, and ratio lock.', keywords: ['dimensions', 'scale'], icon: 'Maximize2' },

  // Text
  { id: 'word-counter', name: 'Word & Character Counter', slug: 'word-counter', category: 'text', description: 'Count words, characters, sentences, paragraphs, and reading time.', keywords: ['length', 'stats'], icon: 'AlignLeft', popular: true },
  { id: 'case-converter', name: 'Case Converter', slug: 'case-converter', category: 'text', description: 'Transform text to UPPERCASE, lowercase, camelCase, snake_case.', keywords: ['capital', 'title'], icon: 'Type' },
  { id: 'lorem-generator', name: 'Lorem Ipsum Generator', slug: 'lorem-generator', category: 'text', description: 'Generate custom placeholder paragraphs, sentences, or words.', keywords: ['dummy', 'filler'], icon: 'FileText' },
  { id: 'whitespace-cleaner', name: 'Whitespace Cleaner', slug: 'whitespace-cleaner', category: 'text', description: 'Trim lines, collapse spaces, and remove blank lines.', keywords: ['trim', 'format'], icon: 'Sparkles' },
  { id: 'duplicate-remover', name: 'Duplicate Line Remover', slug: 'duplicate-remover', category: 'text', description: 'Remove repeated lines instantly from any text body.', keywords: ['clean', 'unique'], icon: 'ListFilter' },

  // Developer
  { id: 'json-formatter', name: 'JSON Formatter & Validator', slug: 'json-formatter', category: 'developer', description: 'Format, validate, and minify JSON strings with line errors.', keywords: ['beautify', 'lint', 'minify'], icon: 'Code', popular: true },
  { id: 'uuid-generator', name: 'UUID Generator', slug: 'uuid-generator', category: 'developer', description: 'Generate bulk v4 UUIDs instantly in your browser.', keywords: ['guid', 'unique id'], icon: 'Fingerprint' },
  { id: 'base64-encode', name: 'Base64 Encode / Decode', slug: 'base64-encode', category: 'developer', description: 'Encode or decode UTF-8 text to and from Base64.', keywords: ['binary', 'hash'], icon: 'Binary' },
  { id: 'jwt-decoder', name: 'JWT Decoder', slug: 'jwt-decoder', category: 'developer', description: 'Decode JSON Web Tokens and view payload and expiry locally.', keywords: ['token', 'auth'], icon: 'Key' },
  { id: 'color-converter', name: 'Color Picker & Converter', slug: 'color-converter', category: 'developer', description: 'Convert HEX, RGB, HSL and generate 5-shade palettes.', keywords: ['picker', 'palette', 'css'], icon: 'Palette' },

  // Calculators
  { id: 'bmi-calculator', name: 'BMI Calculator', slug: 'bmi-calculator', category: 'calculators', description: 'Calculate body mass index with standard and imperial metrics.', keywords: ['health', 'weight'], icon: 'Activity' },
  { id: 'age-calculator', name: 'Age Calculator', slug: 'age-calculator', category: 'calculators', description: 'Find your exact age in years, months, days, and next birthday.', keywords: ['birthday', 'date'], icon: 'Calendar' },
  { id: 'percentage-calculator', name: 'Percentage Calculator', slug: 'percentage-calculator', category: 'calculators', description: 'Calculate percentages, fractional increases, and differences.', keywords: ['math', 'ratio'], icon: 'Percent', popular: true },
  { id: 'vat-calculator', name: 'VAT Calculator', slug: 'vat-calculator', category: 'calculators', description: 'Add or remove sales tax / VAT with custom percentage rates.', keywords: ['tax', 'finance'], icon: 'Receipt' },
  { id: 'compound-interest', name: 'Compound Interest Calculator', slug: 'compound-interest', category: 'calculators', description: 'Calculate investment growth over time with regular deposits.', keywords: ['investment', 'return'], icon: 'TrendingUp' },

  // Generators
  { id: 'qr-generator', name: 'QR Code Generator', slug: 'qr-generator', category: 'generators', description: 'Create downloadable PNG QR codes from text or web URLs.', keywords: ['barcode', 'link'], icon: 'QrCode', popular: true },
  { id: 'password-generator', name: 'Password Generator', slug: 'password-generator', category: 'generators', description: 'Generate secure, customizable passwords with strength indicators.', keywords: ['security', 'auth'], icon: 'ShieldCheck', popular: true },
  { id: 'random-number', name: 'Random Number Generator', slug: 'random-number', category: 'generators', description: 'Generate custom ranges of unique or repeated random numbers.', keywords: ['dice', 'range'], icon: 'Hash' },
  { id: 'username-generator', name: 'Username Generator', slug: 'username-generator', category: 'generators', description: 'Create handle ideas based on styles, keywords, and topics.', keywords: ['handle', 'profile'], icon: 'UserCheck' },
  { id: 'business-name', name: 'Business Name Generator', slug: 'business-name', category: 'generators', description: 'Generate brandable startup and business name ideas.', keywords: ['startup', 'brand'], icon: 'Building' }
];
