"use client"
import React, { useState } from 'react';

// Definisikan interface Product
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Checkout() {
  // Data produk yang dipesan oleh pelanggan
  const [order, setOrder] = useState<Product[]>([
    { id: 1, name: 'Product 1', price: 100, quantity: 2 },
    { id: 2, name: 'Product 2', price: 200, quantity: 1 },
  ]);

  // Menghitung total harga pesanan
  const calculateTotal = (): number => {
    return order.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  };

  // Fungsi untuk menangani klik tombol bayar
  const handlePayment = () => {
    alert("Proceeding to payment...");
    // Di sini Anda bisa menambahkan logika untuk melanjutkan ke halaman pembayaran
  };
return (
    <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
      <h1 className="font-bold text-2xl my-4 text-center text-blue-600">Checkout</h1>
      <hr className="mb-2" />

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Billing Details</h2>
        <div className="text-gray-700 mb-2">John Doe</div>
        <div className="text-gray-700 mb-2">123 Main St.</div>
        <div className="text-gray-700 mb-2">Anytown, USA 12345</div>
        <div className="text-gray-700">johndoe@example.com</div>
      </div>

      {/* Tabel untuk menampilkan produk yang dipesan */}
      <table className="w-full mb-8">
        <thead>
          <tr>
            <th className="text-left font-bold text-gray-700">Description</th>
            <th className="text-right font-bold text-gray-700">Amount</th>
          </tr>
        </thead>
        <tbody>
          {order.map((product) => (
            <tr key={product.id}>
              <td className="text-left text-gray-700">{product.name}</td>
              <td className="text-right text-gray-700">${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-left font-bold text-gray-700">Total</td>
            <td className="text-right font-bold text-gray-700">${calculateTotal()}</td>
          </tr>
        </tfoot>
      </table>

      {/* Tombol bayar untuk melanjutkan pembayaran */}
      <div className="mt-6 text-center">
        <button
          onClick={handlePayment}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}