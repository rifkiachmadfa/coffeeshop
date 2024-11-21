import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Image from "next/image"
import { Button } from "./ui/button"


  export default function CardListProduk(){
    return(
        <>
        <div className="">

        <Card>
            <CardHeader>
                <CardTitle>Aren Latte</CardTitle>
                <CardDescription>Arabica Aren Latte</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <Image
                    alt=""
                    src="/sampellistkopi.jpg"
                    width={200}
                    height={200}
                    />
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button>Tambahkan</Button>
            </CardFooter>
        </Card>
        </div>

        </>
    )
  }