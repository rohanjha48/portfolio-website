import './globals.css';

export const metadata = {
  title: 'Rohan Kumar Jha | Portfolio',
  description: 'Full-Stack Developer & AI Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
