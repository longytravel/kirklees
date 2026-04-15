import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirklees College | AI-Powered Intelligence Demos",
  description: "Prototype dashboards built with real data using AI-assisted development",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;1,6..12,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-kirklees-navy">{children}</body>
    </html>
  );
}
