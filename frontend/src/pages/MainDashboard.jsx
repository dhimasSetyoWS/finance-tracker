import DashboardLayout from "../layouts/DashboardLayout";
import TransactionList from "../components/TransactionList";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
export default function MainDashboard() {
  return (
    <DashboardLayout>
      <div className="p-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card head="Total Saldo">Rp. 900000</Card>
          <Card head="Total Pemasukan">Rp. 109000</Card>
          <Card head="Total Pengeluaran">Rp. 219019</Card>
        </div>
        <SearchBar />
        <TransactionList />
      </div>
    </DashboardLayout>
  );
}
