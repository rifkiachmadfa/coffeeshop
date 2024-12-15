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
}

export default function KeranjangKuning({ keranjang }: KeranjangKuningProps) {
  const produkDalamKeranjang = Object.entries(keranjang);

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
                  {jumlah}x {namaProduk} - Rp {harga.toLocaleString("id-ID")}
                </li>
              ))}
            </ul>
            <Link href="/checkout">
              <Button>Checkout</Button>
            </Link>
          </>
        ) : (
          <p>Keranjang kosong</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
