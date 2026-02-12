import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './ThemeProvider';

export const metadata: Metadata = {
  title: 'WordPlayX - Word Puzzle Game | Sharpen Your Mind',
  description:
    'WordPlayX is a fun and challenging word puzzle game. Form valid words, complete levels, use power-ups, and expand your vocabulary. Available on iOS and Android.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
