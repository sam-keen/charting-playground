import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chart Evaluations',
  description: 'Exploring some charting libraries',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="antialiased h-screen">
      <main className="container mx-auto py-8">{children}</main>
    </body>
  </html>
);

export default RootLayout;
