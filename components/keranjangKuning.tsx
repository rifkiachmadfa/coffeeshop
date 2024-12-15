"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlBasket } from "react-icons/sl";
import { Button } from "./ui/button";
import Link from "next/link";

interface KeranjangKuningProps {
  keranjang: {
    [namaProduk: string]: {
      jumlah: number;
      harga: number;
    };
  };
  totalHarga: number;
}

export default function KeranjangKuning({ keranjang, totalHarga }: KeranjangKuningProps) {
  const produkDalamKeranjang = Object.entries(keranjang);

  // Format angka ke format Rupiah
  const formatRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <Popover>
      <PopoverTrigger>
        <SlBasket />
      </PopoverTrigger>
      <PopoverContent>
        {produkDalamKeranjang.length > 0 ? (
          <>
            <ul>
              {produkDalamKeranjang.map(([namaProduk, { jumlah, harga }]) => (
                <li key={namaProduk}>
                  {jumlah}x {namaProduk} - {formatRupiah.format(harga)}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <p className="font-bold">
                Total Harga: {formatRupiah.format(totalHarga)}
              </p>
              <Link href="/customer/checkout">
                <Button>Checkout</Button>
              </Link>
            </div>
          </>
        ) : (
          <p>Keranjang kosong</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
