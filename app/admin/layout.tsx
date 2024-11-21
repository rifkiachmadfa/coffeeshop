import NavigasiAdmin from "@/components/NavigasiAdmin"

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <NavigasiAdmin/>
      <section className="m-10">
  
        {children}
      </section>
      </>
    )
  }