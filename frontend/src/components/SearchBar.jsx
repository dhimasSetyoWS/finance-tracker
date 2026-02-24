export default function SearchBar() {
	return(
		<div className="relative">
			<input placeholder="Search" type="text" className="w-full border border-white rounded-lg my-3 px-4 py-2 focus:outline-none focus:shadow-xs shadow-amber-200"/>
			<button type="button" className="bg-[#FA8112] px-2 absolute end-2 bottom-5 rounded font-semibold cursor-pointer hover:bg-amber-600">Cari</button>
		</div>
	)
}