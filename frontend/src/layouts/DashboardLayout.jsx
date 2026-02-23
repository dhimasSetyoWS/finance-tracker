import Sidebar from "../components/Sidebar";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div id="body" className="flex-1 text-slate-100 p-8">
        {children}
      </div>
    </div>
  );
}
