"use client";

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
import { Input } from "./ui/input";

interface CardListProdukProps {
  namaProduk: string;
  deskripsi: string;
  tambahProduk: (namaProduk: string) => void;
  kurangProduk: (namaProduk: string) => void;
  harga : number;
  jumlah: number;
}

export default function CardListProduk({
  namaProduk,
  deskripsi,
  tambahProduk,
  kurangProduk,
  jumlah,
  harga,
}: CardListProdukProps) {
  return (
    <div className="">
      <Card className=" items-center">
        <CardHeader>
          <CardTitle>{namaProduk}</CardTitle>
          <CardDescription>{deskripsi}</CardDescription>
        </CardHeader>
        <CardContent className="justify-center items-center">
          <Image alt="" src="/sampellistkopi.jpg" width={200} height={200} />
          <div >

          <p>Rp {harga}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button onClick={() => kurangProduk(namaProduk)}>-</Button>
          <Input className="w-[42px] text-center" value={jumlah} readOnly />
          <Button onClick={() => tambahProduk(namaProduk)}>+</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
