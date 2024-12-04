import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function ActionPesanan() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Action" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Diterima</SelectItem>
          <SelectItem value="dark">Diproses</SelectItem>
          <SelectItem value="system">Selesai</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
