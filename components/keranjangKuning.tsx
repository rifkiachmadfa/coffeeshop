"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlBasket } from "react-icons/sl";
import { Button } from "./ui/button";

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
                {namaProduk}: {jumlah}
              </li>
            ))}
          </ul>
          <div>

              <Button>Checkout</Button>
          </div>
            </>
        ) : (
          <p>Keranjang kosong</p>
        )}

        
      </PopoverContent>
    </Popover>
  );
}
