import '@/app/globals.css';

export const metadata = {
  title: 'STC College - Ojuelegba',
  description: 'Official website of STC College, Ojuelegba, Surulere, Lagos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 w-full max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}