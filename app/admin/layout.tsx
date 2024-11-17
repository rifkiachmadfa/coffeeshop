export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="m-10">
        {children}
      </section>
    )
  }