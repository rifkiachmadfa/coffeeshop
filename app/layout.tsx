import "./globals.css";
import NavigasiHomePage from "@/components/navigasiHomepage";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <main className="antialiased w-[1280px] h-[100vh]">
          <div className=""></div>

          <div className="">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
