export default function Card({children, head}) {
	return (
		<div className="bg-slate-200 w-72 text-slate-800 rounded h-6/12">
			<div className="bg-slate-900 text-slate-50 rounded-t">
				{head}
			</div>
			{children}
		</div>
	)
}