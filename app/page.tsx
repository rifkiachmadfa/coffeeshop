import Image from "next/image";
import CardListProduk from "@/components/cardListProduk";
import Template from "@/components/template/template";

export default function Home() {
  return (
    <>
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

        <div className="relative z-1  justify-center  top-[500px] pt-40 bg-white rounded-tr-[100px] rounded-tl-[100px]">
          <p>fitur shorting</p>
          <div className="flex justify-center grid grid-cols-4 gap-8 mx-20">
            <CardListProduk namaProduk="Aren Latte" deskripsi="Kopi Susu Aren" />
            <CardListProduk namaProduk="Brave Latte" deskripsi="Kopi Susu Lembut dan Kental" />
            <CardListProduk namaProduk="Caffe Americano" deskripsi="Kopi Rasa Espresso" />
            <CardListProduk namaProduk="Cappuccino" deskripsi="Espresso Sempurna Dengan Susu"/>
            <CardListProduk namaProduk="Caffe Mocha" deskripsi="Espresso dan Cokelat Ganache"/>
            <CardListProduk namaProduk="Timiri Oat Latte" deskripsi="Minuman Nge-hits Kita"/>
            <CardListProduk namaProduk="Caramel Macchiato" deskripsi="Espresso Dengan Sirup Karamel" />
            <CardListProduk namaProduk="Caffe Flat White" deskripsi="Cafe Latte Ala New Zealand"/>
          </div>
        </div>
      </Template>
    </>
  );
}
