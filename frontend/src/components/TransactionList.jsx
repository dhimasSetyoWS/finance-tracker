import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getAllTransaction, deleteTransaction } from "../services/transactionServices.js";
import { TYPE_TRANSACTION_REVERSE, PAYMENTMETHOD_TRANSACTION_REVERSE } from "../constants/transaction.js";
import Swal from "sweetalert2";
export default function TransactionList() {
  const [transactions, setTransaction] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let data = await getAllTransaction();
        data = data.map((item) => ({
          ...item,
          type: TYPE_TRANSACTION_REVERSE[item.type],
          payment_method: PAYMENTMETHOD_TRANSACTION_REVERSE[item.payment_method],
        }));
        setTransaction(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [transactions]);
  const handleDelete = (id) => {
    const dataTransaction = transactions.find((data) => data.id === id);
    Swal.fire({
      title: "Yakin?",
      text: `Yakin ingin hapus transaksi di tanggal ${dataTransaction.date.split("T")[0]} ?`,
      icon: "warning",
      showConfirmButton : true,
      showCancelButton : true,
    }).then(async (jawaban) => {
      if (jawaban.isConfirmed) {
        try {
          await deleteTransaction(id);
          Swal.fire({
            title : "Berhasil!",
            icon : "success"
          });
        } catch(err) {
          console.error(err);
        }
      }
    });
  };
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
            <th className="px-6 py-3 font-bold text-center">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 text-[#FA8112] border-b">
          {transactions.length > 0 &&
            transactions.map((transaction, index) => {
              return (
                <tr key={index} className="hover:bg-gray-800 font-medium transition-all">
                  <td className="px-6 py-3">{transaction.date.split("T")[0]}</td>
                  <td className="px-6 py-3">{transaction.title}</td>
                  <td className="px-6 py-3">{transaction.category}</td>
                  <td className="px-6 py-3">{transaction.type}</td>
                  <td className="px-6 py-3">{transaction.payment_method}</td>
                  <td className="px-6 py-3">{Number(transaction.amount).toLocaleString("id-ID")}</td>
                  <td className="px-6 py-3 flex items-center justify-center">
                    <button className="cursor-pointer">
                      <PencilSquareIcon className="size-6 text-blue-500" />
                    </button>
                    <button type="button" onClick={() => handleDelete(transaction.id)} className="cursor-pointer">
                      <TrashIcon className="size-6 text-blue-500" />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
