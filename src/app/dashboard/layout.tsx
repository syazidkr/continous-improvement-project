

export default function DashboardLayout ({
  children} : {
    children: React.ReactNode;
}) {
  return (
    <div>
      {/* left */}
      <div className="bg-">
        left side
      </div>
      {/* right */}
      <div className="">
        {children}
      </div>
    </div>
  )
}