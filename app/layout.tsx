import "./globals.css";
import NavigasiHomePage from "@/components/navigasiHomepage";
import Footer from "@/components/footer";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <div className="antialiased w-[1280px] h-[100vh] relative">
          {/* Gambar hanya di layout utama */}
         
          <div className="mt-10 mb-5 z-10">
            <NavigasiHomePage />
          </div>
          <div className="relative z-1 ">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
