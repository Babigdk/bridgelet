import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bridgelet',
  description: 'Bridgelet Payment Flows',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50">{children}</body>
    </html>
  );
}