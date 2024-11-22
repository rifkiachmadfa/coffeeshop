"use client";

import "./globals.css";
import NavigasiHomePage from "@/components/navigasiHomepage";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isRoot = pathname === "/"; // Cek jika berada di halaman root

  return (
    <html lang="en">
      <body className="flex justify-center">
        <main className="antialiased w-[1280px] h-[100vh] relative">
          {/* Navigasi hanya di halaman root */}
          {isRoot && (
            <div className="mt-10 mb-5 z-10">
              <NavigasiHomePage />
            </div>
          )}
          <div className="relative z-1">
            {children}
            {/* Footer hanya di halaman root */}
            {isRoot && <Footer />}
          </div>
        </main>
      </body>
    </html>
  );
}
