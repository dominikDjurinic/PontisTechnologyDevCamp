import Link from "next/link";

// Header komponenta
export default function Header() {
  return (
    <div className="w-full flex flex-col items-center text-center bg-amber-500 py-5">
      <h1 className="text-4xl font-bold my-5 uppercase p-2">To Do List</h1>
      <div className="flex flex-col md:flex-row gap-5">
        <Link href="/">
          <p>Početna</p>
        </Link>
      </div>
    </div>
  );
}
