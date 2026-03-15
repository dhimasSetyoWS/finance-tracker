import Dropdown from "./Dropdown";
import { useState } from "react";
import { createTransaction } from "../services/transactionServices.js";
import { TYPE_TRANSACTION, PAYMENTMETHOD_TRANSACTION } from "../constants/transaction.js";
export default function TransactionForm() {
  const [value, setValue] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    type: "",
    payment_method: "",
  });
  //   Handle Uang
  const handleNumberChange = (e) => {
    const raw = e.target.value.replace(/\D/g, ""); // hapus non-angka
    setValue({
      ...value,
      [e.target.name]: Number(raw).toLocaleString("id-ID"),
    }); // format: 1.000.000
  };
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...value,
        amount : parseFloat(value.amount.replace(/\./g, "")),
        type : TYPE_TRANSACTION[value.type],
        payment_method : PAYMENTMETHOD_TRANSACTION[value.payment_method]
      }
      await createTransaction(data);
      setValue({ title: "", amount: "", date: "", category: "", type: "", payment_method: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="deskripsi">
            Deskripsi Catatan
          </label>
          <input name="title" value={value.title} onChange={handleChange} id="deskripsi" type="text" placeholder="Deskripsi" className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-1 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="nominal">
            Nominal
          </label>
          <div className="relative">
            <input value={value.amount} onChange={handleNumberChange} id="nominal" name="amount" type="text" placeholder="0" className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-1 ps-12 transition-all" />
            <span className="bg-slate-200 text-black px-2 py-2 absolute left-0 rounded-s top-[1px]">Rp.</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 space-y-2">
          <div>
            <label className="block text-lg font-semibold">Kategori :</label>
            <Dropdown value={value.category} handleChange={handleChange} name="category" title="Kategori" items={["Makanan", "Transportasi", "Pendidikan", "Pribadi"]} />
          </div>
          <div>
            <label className="block text-lg font-semibold">Tipe :</label>
            <Dropdown value={value.type} handleChange={handleChange} name="type" title="Tipe" items={["Pengeluaran", "Pemasukan"]} />
          </div>
          <div>
            <label className="block text-lg font-semibold">Metode Pembayaran</label>
            <Dropdown value={value.payment_method} handleChange={handleChange} name="payment_method" title="Metode Bayar" items={["E-Wallet", "Transfer", "Tunai"]} />
          </div>
        </div>
        <div>
          <label className="block text-lg font-semibold">Tanggal Transaksi</label>
          <input value={value.date} onChange={handleChange} name="date" type="date" className="border p-4 rounded hover:scale-105 transition-all" />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="cursor-pointer hover:bg-slate-700 rounded px-4 py-2 bg-slate-900">
            Catat
          </button>
        </div>
      </form>
    </div>
  );
}
