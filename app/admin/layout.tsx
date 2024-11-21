import NavigasiAdmin from "@/components/NavigasiAdmin"

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      
      <html lang="en">
      <body className="">
        
      <NavigasiAdmin/>
      <section className="m-10">
        {children}
      </section>
      </body>
      </html>
    )
  }