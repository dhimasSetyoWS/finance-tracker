import { useState } from "react";

export default function Dropdown({ title, items }) {
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState("");
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="space-y-2 relative">
      <button type="button" onClick={toggleDropdown} className="bg-slate-500 px-4 py-2 gap-1 rounded flex items-center cursor-pointer transition-all">
        {selected || title}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 transition-transform duration-350 ${dropdown && "rotate-180"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {dropdown && (
        <div className="z-10 border shadow-xs shadow-amber-50 bg-slate-500 rounded absolute">
          <ul className="p-2 space-y-2">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected(item);
                      setDropdown(false);
                    }}
                    className={`inline-flex w-full p-2 rounded-sm hover:bg-slate-600 cursor-pointer ${item === selected && "bg-slate-600"}`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
