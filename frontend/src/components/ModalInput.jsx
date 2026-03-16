import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Swal from "sweetalert2";
import { TYPE_TRANSACTION, PAYMENTMETHOD_TRANSACTION } from "../constants/transaction.js";
import { updateTransaction } from "../services/transactionServices.js";

export default function ModalInput({ setIsEdit, settempTransaction, tempTransaction, handleChange }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...tempTransaction,
        amount: parseFloat(tempTransaction.amount.replace(/\./g, "")),
        type: TYPE_TRANSACTION[tempTransaction.type],
        payment_method: PAYMENTMETHOD_TRANSACTION[tempTransaction.payment_method],
      };
      await updateTransaction(data.id, data);
      handleClose();
      Swal.fire({
        title: "Berhasil!",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleNumberChange = (e) => {
    const raw = e.target.value.replace(/\D/g, ""); // hapus non-angka
    settempTransaction({
      ...tempTransaction,
      [e.target.name]: Number(raw).toLocaleString("id-ID"),
    }); // format: 1.000.000
  };
  const handleClose = () => {
    setIsEdit(false);
    settempTransaction({});
  };
  return (
    <>
      <div onClick={handleClose} className="fixed inset-0 bg-black/50 z-40s"></div>
      <div id="modal" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 w-md py-4 px-2 z-50 shadow-2xl rounded-lg space-y-2">
        <h3 className="text-2xl text-center font-semibold">Edit Transaksi</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="flex flex-col space-y-2">
              <label htmlFor="title" className="px-2 font-semibold">
                Deskripsi
              </label>
              <input id="title" name="title" type="text" value={tempTransaction.title} onChange={handleChange} className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-1 transition-all" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="amount" className="px-2 font-semibold">
                Nominal
              </label>
              <input id="amount" name="amount" type="text" value={tempTransaction.amount} onChange={handleNumberChange} className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-1 transition-all" />
            </div>
            <div className="grid grid-cols-3 px-2">
              <div className="mx-auto">
                <label className="block text-lg font-semibold">Kategori :</label>
                <Dropdown value={tempTransaction.category} handleChange={handleChange} name="category" title="Kategori" items={["Makanan", "Transportasi", "Pendidikan", "Pribadi"]} />
              </div>
              <div className="mx-auto">
                <label className="block text-lg font-semibold">Tipe :</label>
                <Dropdown value={tempTransaction.type} handleChange={handleChange} name="type" title="Tipe" items={["Pengeluaran", "Pemasukan"]} />
              </div>
              <div className="mx-auto">
                <label className="block text-lg font-semibold">Metode</label>
                <Dropdown value={tempTransaction.payment_method} handleChange={handleChange} name="payment_method" title="Metode Bayar" items={["E-Wallet", "Transfer", "Tunai"]} />
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <button type="submit" className="cursor-pointer hover:bg-slate-700 rounded px-4 py-2 bg-slate-900 border border-slate-50">
                Simpan
              </button>
              <button type="button" onClick={handleClose} className="cursor-pointer hover:bg-slate-700 rounded px-4 py-2 bg-slate-900 border border-red-500">
                Batal
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
