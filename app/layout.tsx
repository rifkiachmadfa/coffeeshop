import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <main className=" w-[1280px] h-[100vh]">
          <div className=""></div>

          <div className="">
            {children}
           
          </div>
        </main>
      </body>
    </html>
  );
}
