import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Button } from "./ui/button";

interface CardListProdukProps {
  namaProduk?: string;
  deskripsi?: string;
  gambar?: string;
}

export default function CardListProduk({
  namaProduk,
  deskripsi,
  gambar,
}: CardListProdukProps) {
  return (
    <>
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>{namaProduk}</CardTitle>
            <CardDescription>{deskripsi}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image alt="" src="/sampellistkopi.jpg" width={200} height={200} />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Tambahkan</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
