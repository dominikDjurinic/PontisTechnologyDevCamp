import Header from "../components/Header";
import ShowComparisonBar from "../components/ShowComparisonBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full">
        <ShowComparisonBar />
        {children}
      </div>
    </div>
  );
}
