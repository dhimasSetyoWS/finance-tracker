import { NavLink } from "react-router";

export default function Sidebar() {
  const links = [
    {
      label: "Main Dashboard",
      target: "/dashboard",
    },
    {
      label: "Main Dashboard",
      target: "/dashboard",
    },
    {
      label: "Main Dashboard",
      target: "/dashboard",
    },
  ];
  return (
    <aside className="bg-slate-200 w-64 h-full rounded-e-2xl py-2 space-y-12">
      <div id="sidebar_head" className="flex justify-center">
        <p className="text-2xl">Fintrack</p>
      </div>
      <div id="list-links" className="flex flex-col space-y-3 items-center px-2 font-semibold">
        {links.map((link) => {
          return (
            <NavLink to={link.target} className="flex items-center gap-5 py-2 px-4 w-full transition-all rounded hover:bg-black hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {link.label}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}
