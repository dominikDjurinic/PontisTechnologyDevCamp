import Header from "../components/Header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full">{children}</div>
    </div>
  );
}
