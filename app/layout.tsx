import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willem de Wit — Webdeveloper",
  description:
    "Derdejaars student Software Development uit Eindhoven. Ik bouw websites en webshops met Next.js, React en PHP.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,400..800&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
