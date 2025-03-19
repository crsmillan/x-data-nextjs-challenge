import { DashboardContent } from "@/components/dashboard-content";
import { Sidebar } from "@/components/sidebar";


export default function DashboardPage() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <DashboardContent />
    </div>
  )
}

