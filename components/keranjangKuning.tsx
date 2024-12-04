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
  keranjang: { [namaProduk: string]: number };
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
            {produkDalamKeranjang.map(([namaProduk, jumlah]) => (
                <li key={namaProduk}>
                  <p>
                  {jumlah}x {namaProduk}
                  </p>
              </li>
            ))}
          </ul>
          <div className="mt-5">

              <Link href="/customer/checkout"><Button>Checkout</Button></Link>
          </div>
            </>
        ) : (
          <p>Keranjang kosong</p>
        )}

        
      </PopoverContent>
    </Popover>
  );
}
