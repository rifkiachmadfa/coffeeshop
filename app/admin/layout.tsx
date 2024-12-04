import NavigasiAdmin from "@/components/NavigasiAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <NavigasiAdmin />
      <main className="p-10">{children}</main>
    </section>
  );
}
