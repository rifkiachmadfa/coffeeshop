-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "namaProduk" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "stok" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);
