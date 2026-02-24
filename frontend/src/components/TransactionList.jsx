export default function TransactionList() {
  return (
    <div className="my-3 rounded">
      <table className="w-full text-left">
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
			<tr className="hover:bg-gray-800 font-medium transition-all">
				<td className="px-6 py-3">22/11/2025</td>
				<td className="px-6 py-3">Makan seafood bakaran</td>
				<td className="px-6 py-3">Makanan</td>
				<td className="px-6 py-3">Pengeluaran</td>
				<td className="px-6 py-3">E-Wallet</td>
				<td className="px-6 py-3">32000</td>
				<td className="px-6 py-3"></td>
			</tr>
		</tbody>
      </table>
    </div>
  );
}
