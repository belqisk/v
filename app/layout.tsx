import './globals.css';
import { Providers } from '../components/Providers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VocabFlow - Learn Words',
  description: 'A minimalist, gesture-based vocabulary learning application.',
};

/**
 * 组件用途 (Component Purpose):
 * 根布局组件，包含HTML结构和全局Providers。
 * Root layout component, containing HTML structure and global Providers.
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
