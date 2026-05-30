import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PadTerm - iPad Developer Terminal',
  description: 'AI-First iPad Developer Terminal powered by GitHub Codespaces',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'PadTerm',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/icon-192.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0d1117" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="bg-terminal-bg text-terminal-fg font-mono overflow-hidden">
        {children}
      </body>
    </html>
  );
}
