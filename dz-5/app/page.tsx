import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="">Registracija korisnika</h1>
      <Link href={"/registracija"} className="w-[100px]">
        <button className="w-full bg-purple-600 font-bold text-white">
          Registracija korisnika
        </button>
      </Link>
    </div>
  );
}
