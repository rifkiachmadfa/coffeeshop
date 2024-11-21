import Image from "next/image";
import CardListProduk from "@/components/cardListProduk";

export default function Home() {
  return (
    <>


    <div className=" flex justify-center grid grid-cols-4 gap-4 ">

    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>
    <CardListProduk/>

    </div>

    </>
  );
}
