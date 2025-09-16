import Sidebar from "@/components/Sidebar";

export default function DashboardLayout ({
  children} : {
    children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* left */}
      <div className="w-[65px] lg:w-[200px]">
        <Sidebar/>
      </div>
      {/* right */}
      <div className="bg-gray-100 flex-1">
        {children}
      </div>
    </div>
  )
}