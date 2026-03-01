import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <header>
      <nav className="px-8 py-4 bg-slate-950 text-gray-300 font-medium flex justify-between items-center space-x-6">
		<div className="space-x-6">
          <a href="">FinTrack</a>
        </div>
        <div className="space-x-6">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </div>
        <div className="space-x-6">
          <NavLink to="/dashboard/main">Dashboard</NavLink>
        </div>
      </nav>
    </header>
  );
}
