import Dropdown from "./Dropdown";
import { useState } from "react";
export default function TransactionForm() {
  const [value, setValue] = useState("");

  //   Handle Uang
  const handleChange = (e) => {
    const raw = e.target.value.replace(/\D/g, ""); // hapus non-angka
    setValue(Number(raw).toLocaleString("id-ID")); // format: 1.000.000
  };
  return (
    <div className="p-8">
      <form action="" className="space-y-4">
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="deskripsi">
            Deskripsi Catatan
          </label>
          <input id="deskripsi" type="text" placeholder="Deskripsi" className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-1 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="block text-lg font-semibold" htmlFor="nominal">
            Nominal
          </label>
          <div className="relative">
            <input value={value} onChange={(e) => handleChange(e)} id="nominal" type="text" placeholder="0" className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-1 ps-12 transition-all" />
            <span className="bg-slate-200 text-black px-2 py-2 absolute left-0 rounded-s top-[1px]">Rp.</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 space-y-2">
          <div>
            <label className="block text-lg font-semibold">Kategori :</label>
            <Dropdown title="Kategori" items={["Makanan", "Transportasi", "Pendidikan", "Pribadi"]} />
          </div>
          <div>
            <label className="block text-lg font-semibold">Tipe :</label>
            <Dropdown title="Tipe" items={["Pengeluaran", "Pemasukan"]} />
          </div>
          <div>
            <label className="block text-lg font-semibold">Metode Pembayaran</label>
            <Dropdown title="Metode Bayar" items={["E-wallet", "Transfer", "Tunai"]} />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="cursor-pointer hover:bg-slate-700 rounded px-4 py-2 bg-slate-900">Catat</button>
        </div>
      </form>
    </div>
  );
}
