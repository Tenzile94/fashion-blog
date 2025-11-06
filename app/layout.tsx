import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StyleVogue - Fashion Blog",
  description: "Discover the latest trends, fashion tips, and style inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

