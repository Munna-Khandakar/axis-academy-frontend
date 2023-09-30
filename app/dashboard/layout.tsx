import Sidebar from "@/components/dashboard/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-6 h-[100vh]">
      <div className="grid col-span-1 bg-blue-100">
        <Sidebar />
      </div>
      <div className="grid col-span-5 p-5">{children}</div>
    </div>
  );
}
