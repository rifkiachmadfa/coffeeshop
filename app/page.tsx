"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import CardListProduk from "@/components/cardListProduk";
import Template from "@/components/template/template";
import KeranjangKuning from "@/components/keranjangKuning";


interface Product {
  id: number;
  namaProduk: string;
  deskripsi: string;
  harga: number;
  gambar: string;
  stok: number;
  createdAt: Date;
  updateAt: Date; // Fix the typo here, make it updatedAt
}


export default function Home() {
  // State for products fetched from database
  const [products, setProducts] = useState<Product[]>([]);
  
  // State for keranjang (cart)
  const [keranjang, setKeranjang] = useState<{
    [namaProduk: string]: { jumlah: number; harga: number };
  }>({});

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/produk');  // Panggil API Route
      const data = await response.json();
      setProducts(data);  
    };
    fetchProducts();
  }, []);


  const tambahProduk = (namaProduk: string, harga: number) => {
    setKeranjang((prev) => ({
      ...prev,
      [namaProduk]: {
        jumlah: (prev[namaProduk]?.jumlah || 0) + 1,
        harga,
      },
    }));
  };

  const kurangProduk = (namaProduk: string) => {
    setKeranjang((prev) => {
      const updatedJumlah = (prev[namaProduk]?.jumlah || 0) - 1;

      if (updatedJumlah <= 0) {
        const updatedCart = { ...prev };
        delete updatedCart[namaProduk];
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
      <div className="absolute">
        <Image
          src="/sampleimage.jpg"
          alt=""
          width={1280}
          height={500}
          className="mb-10"
        />
      </div>

      <div className="relative z-1 justify-center top-[500px] pt-40 bg-white rounded-tr-[100px] rounded-tl-[100px] h-[400px]">
        <p>Fitur Shorting</p>

        <div className="fixed top-[650px] right-[120px] z-1000 rounded-lg border-2 w-[40px] h-[40px] flex justify-center bg-primary text-white">
          <KeranjangKuning keranjang={keranjang} />
        </div>

        <div className="grid grid-cols-4 gap-8 mx-20">
          {products.map((product) => (
            <CardListProduk
              key={product.id}
              gambar={product.gambar || "/sampleimage.jpg"} // Use the correct image
              namaProduk={product.namaProduk}
              deskripsi={product.deskripsi}
              harga={product.harga}
              tambahProduk={tambahProduk}
              kurangProduk={kurangProduk}
              jumlah={keranjang[product.namaProduk]?.jumlah || 0}
            />
          ))}
        </div>
      </div>
    </Template>
  );
}
