

export default function DashboardLayout ({
  children} : {
    children: React.ReactNode;
}) {
  return (
    <div>
      {/* left */}
      <div className="bg-red-300">
        left side
      </div>
      {/* right */}
      <div className="bg-blue-400">
        {children}
      </div>
    </div>
  )
}