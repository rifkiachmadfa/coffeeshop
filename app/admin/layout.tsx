import NavigasiAdmin from "@/components/NavigasiAdmin";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavigasiAdmin />
      <section className="m-10">{children}</section>
    </div>
  );
}
