import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DaftarPesananProps {
  action: () => JSX.Element; // Properti 'action' dengan tipe fungsi
}

const DaftarPesanan: React.FC<DaftarPesananProps> = ({ action }) => {
  return (
    <>
      <Table className="mt-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Pemesan</TableHead>
            <TableHead>Deskripsi</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Yugo</TableCell>
            <TableCell>Kopi Tubruk 1 X, Reguler, Rp 20.000, Diskon 10%</TableCell>
            <TableCell>Take Away</TableCell>
            {/* Memanggil fungsi 'action' untuk mendapatkan elemen JSX */}
            <TableCell className="text-right">{action()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default DaftarPesanan;
