import ActionPesanan from "@/components/actionpesanan";
import DaftarPesanan from "@/components/daftarpesanan";
import ProsesPesanan from "@/components/prosespesanan";

export default function Admin() {
  // Fungsi yang menghasilkan elemen JSX
  function actionPesanan() {
    return <ActionPesanan />;
  }

  return (
    <>
       <ProsesPesanan />
      {/* Kirim fungsi 'actionPesanan' ke DaftarPesanan */}
      <DaftarPesanan action={actionPesanan} />
    </>
  );
}
