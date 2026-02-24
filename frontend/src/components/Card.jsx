export default function Card({ children, head }) {
  return (
    <div className="bg-slate-200 max-w-sm p-6 rounded shadow-xs">
      <h5 className="text-slate-900 mb-3 text-2xl font-semibold leading-8">{head}</h5>
      <div className="text-[#FA8112] font-semibold">{children}</div>
    </div>
  );
}