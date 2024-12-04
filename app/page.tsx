"use client";

import Image from "next/image";
import CardListProduk from "@/components/cardListProduk";
import Template from "@/components/template/template";
import KeranjangKuning from "@/components/keranjangKuning";
import { useState } from "react";

export default function Home() {
  // State untuk menyimpan jumlah produk dalam keranjang
  const [keranjang, setKeranjang] = useState<{ [namaProduk: string]: number }>({});

  // Handler untuk menambah jumlah produk
  const tambahProduk = (namaProduk: string) => {
    setKeranjang((prev) => ({
      ...prev,
      [namaProduk]: (prev[namaProduk] || 0) + 1, // Tambahkan 1 atau default ke 1
    }));
  };

  // Handler untuk mengurangi jumlah produk
  const kurangProduk = (namaProduk: string) => {
    setKeranjang((prev) => ({
      ...prev,
      [namaProduk]: Math.max((prev[namaProduk] || 0) - 1, 0), // Kurangi 1 tapi tidak boleh negatif
    }));
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
            harga = {19000}
            tambahProduk={tambahProduk}
            kurangProduk={kurangProduk}
            jumlah={keranjang["Aren Latte"] || 0} // Ambil jumlah dari state keranjang
          />
          <CardListProduk
            namaProduk="Americano"
            deskripsi="Kopi Enak"
            harga = {25000}
            tambahProduk={tambahProduk}
            kurangProduk={kurangProduk}
            jumlah={keranjang["Americano"] || 0}
          />
          <CardListProduk
            namaProduk="Arabica"
            deskripsi="Kopi Enak"
            harga = {21000}
            tambahProduk={tambahProduk}
            kurangProduk={kurangProduk}
            jumlah={keranjang["Arabica"] || 0}
          />
          <CardListProduk
            namaProduk="Non coffee"
            deskripsi="Kopi Enak"
            harga = {22000}
            tambahProduk={tambahProduk}
            kurangProduk={kurangProduk}
            jumlah={keranjang["Non coffee"] || 0}
          />
        </div>
      </div>
    </Template>
  );
}
