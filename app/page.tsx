import Image from "next/image";
import CardListProduk from "@/components/cardListProduk";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 z-0">
        <Image
          src="/sampleimage.jpg"
          alt=""
          width={1280}
          height={500}
          className="mb-10"
        />
      </div>

      <div className="relative z-1  justify-center  top-[500px] pt-40 bg-white rounded-tr-[100px] rounded-tl-[100px]">
        <p>fitur shorting</p>
        <div className="flex justify-center grid grid-cols-4 gap-8 mx-20">
          <CardListProduk namaProduk="aren Latte" deskripsi="kopi mantap" />
          <CardListProduk namaProduk="aren Latte" deskripsi="kopi mantap" />
          <CardListProduk namaProduk="americano" deskripsi="kopi enak" />
          <CardListProduk />
          <CardListProduk />
          <CardListProduk />
          <CardListProduk />
          <CardListProduk />
          <CardListProduk />
          <CardListProduk />
          <CardListProduk />
          <CardListProduk />
        </div>
      </div>
    </>
  );
}
