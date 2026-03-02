import { useEffect, useState } from "react";
import { getAllTransaction } from "../services/transactionServices.js";
export default function TransactionList() {
  const [transactions, setTransaction] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getAllTransaction();
      setTransaction(data);
    };
    getData();
  }, []);
  return (
    <div className="lg:block hidden my-3 rounded text-left w-full">
      <table className="w-full">
        <thead className="text-sm bg-black text-[#FA8112] border-b rounded">
          <tr>
            <th className="px-6 py-3 font-bold">Tanggal</th>
            <th className="px-6 py-3 font-bold">Deskripsi</th>
            <th className="px-6 py-3 font-bold">Kategori</th>
            <th className="px-6 py-3 font-bold">Tipe</th>
            <th className="px-6 py-3 font-bold">Metode Bayar</th>
            <th className="px-6 py-3 font-bold">Jumlah</th>
            <th className="px-6 py-3 font-bold">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 text-[#FA8112] border-b">
          {transactions.map((transaction, index) => {
            return (
            <tr key={index} className="hover:bg-gray-800 font-medium transition-all">
              <td className="px-6 py-3">{transaction.date.split("T")[0]}</td>
              <td className="px-6 py-3">{transaction.title}</td>
              <td className="px-6 py-3">{transaction.category}</td>
              <td className="px-6 py-3">{transaction.type === 'EXPENSE' ? 'Pengeluaran' : 'Pemasukan'}</td>
              <td className="px-6 py-3">{transaction.payment_method}</td>
              <td className="px-6 py-3">{transaction.amount}</td>
              <td className="px-6 py-3"></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
