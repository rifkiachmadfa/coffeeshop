"use client";

import Image from "next/image";
import CardListProduk from "@/components/cardListProduk";
import Template from "@/components/template/template";
import KeranjangKuning from "@/components/keranjangKuning";
import { useState } from "react";

export default function Home() {
  // State `keranjang` menyimpan jumlah dan harga produk
  const [keranjang, setKeranjang] = useState<{
    [namaProduk: string]: { jumlah: number; harga: number };
  }>({});

  // Handler untuk menambah jumlah produk
  const tambahProduk = (namaProduk: string, harga: number) => {
    setKeranjang((prev) => ({
      ...prev,
      [namaProduk]: {
        jumlah: (prev[namaProduk]?.jumlah || 0) + 1,
        harga, // Harga tetap
      },
    }));
  };

  // Handler untuk mengurangi jumlah produk
  const kurangProduk = (namaProduk: string) => {
    setKeranjang((prev) => {
      const updatedJumlah = (prev[namaProduk]?.jumlah || 0) - 1;
  
      if (updatedJumlah <= 0) {
        const updatedCart = { ...prev }; // Salin objek
        delete updatedCart[namaProduk]; // Hapus properti
        return updatedCart;
      }
  
      return {
        ...prev,
        [namaProduk]: {
          ...prev[namaProduk],
          jumlah: updatedJumlah,
        },
      };
    });
  };
  
  


  return (
    <Template>
      {/* Gambar Header */}
      <div className="absolute">
        <Image
          src="/sampleimage.jpg"
          alt=""
          width={1280}
          height={500}
          className="mb-10"
        />
      </div>

      {/* Konten Utama */}
      <div className="relative z-1 justify-center top-[500px] pt-40 bg-white rounded-tr-[100px] rounded-tl-[100px]">
        <p>Fitur Shorting</p>

        {/* Keranjang Kuning */}
        <div className="fixed top-[650px] right-[120px] z-1000 rounded-lg border-2 w-[40px] h-[40px] flex justify-center bg-primary text-white">
          <KeranjangKuning keranjang={keranjang} />
        </div>

        {/* Daftar Produk */}
        <div className="grid grid-cols-4 gap-8 mx-20">
          <CardListProduk
            namaProduk="Aren Latte"
            deskripsi="Kopi Mantap"
            harga={19000}
            tambahProduk={tambahProduk}
            kurangProduk={kurangProduk}
            jumlah={keranjang["Aren Latte"]?.jumlah || 0}
          />
          <CardListProduk
            namaProduk="Americano"
            deskripsi="Kopi Enak"
            harga={25000}
            tambahProduk={tambahProduk}
            kurangProduk={kurangProduk}
            jumlah={keranjang["Americano"]?.jumlah || 0}
          />
        </div>
      </div>
    </Template>
  );
}
