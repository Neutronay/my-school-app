import '@/app/globals.css';

export const metadata = {
  title: 'STC College - Ojuelegba',
  description: 'Official website of STC College, Ojuelegba, Surulere, Lagos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}