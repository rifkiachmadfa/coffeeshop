import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";

const ListVoucher = () => {
  return (
    <>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nama Voucher</TableHead>
            <TableHead>Jumlah</TableHead>
            <TableHead className="md:table-auto">Periode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Late</TableCell>
            <TableCell>Deskripsi Menu</TableCell>
            <TableCell>
              <Button className="mx-4">Edit</Button>
              <Button>Hapus</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ListVoucher;
