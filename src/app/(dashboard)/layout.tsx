import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="flex min-h-screen">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 !important">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-1">
          <Image src="/new logo.png" alt="logo" width={60} height={60}></Image> 
          <span className="hidden lg:block font-bold text-xl">ZENITH</span>      
        </Link>
        <Sidebar />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] flex flex-col">
        {children}
      </div>
   </div>
  );
}
