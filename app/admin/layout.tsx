import NavigasiAdmin from "@/components/NavigasiAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Navigasi khusus untuk halaman admin */}
      <NavigasiAdmin />
      <main className="p-10">{children}</main>
    </div>
  );
}
