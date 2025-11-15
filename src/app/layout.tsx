import type { Metadata } from "next";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VyomGarud",
  description: "Advanced UAV Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />

        <main className="pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
