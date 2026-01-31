import './globals.css';

export const metadata = {
  title: 'Indira Gandhi | Engineer',
  description: 'FAANG-level frontend portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
