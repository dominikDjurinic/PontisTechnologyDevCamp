import Header from "../components/Header";
import ShowComparisonBar from "../components/ShowComparisonBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <p className="m-5 text-gray-400">Info stranice</p>
      <div className="w-full">
        <ShowComparisonBar />
        {children}
      </div>
    </div>
  );
}
