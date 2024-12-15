// app/api/produk/route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests
export async function GET() {
  try {
    const produk = await prisma.produk.findMany();
    return new Response(JSON.stringify(produk), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Failed to fetch data", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
