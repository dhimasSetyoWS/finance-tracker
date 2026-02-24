import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
export default function MainDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card head="Total Saldo">Halo Semuanya</Card>
        <Card head="Total Pemasukan">Halo Semuanya</Card>
        <Card head="Total Pengeluaran">Halo Semuanya</Card>
      </div>
    </DashboardLayout>
  );
}
