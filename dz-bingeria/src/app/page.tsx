import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="w-full flex flex-col items-center justify-center bg-red-500 dark:bg-gray-800 gap-10 h-[50%]">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        <h1 className="font-bold text-6xl md:text-9xl text-white text-shadow-gray-300 text-shadow-sm">
          Bingeria
        </h1>
      </div>
      <div className="w-full h-[50%] flex flex-col items-center justify-center gap-5">
        <p className="w-[80%] md:w-[40%] text-xl md:text-2xl text-center">
          Aplikacija za praćenje serija. Omogućuje korisniku pregled kataloga
          serija, detaljan prikaz i uvid u odabranu seriju, pohranu serije na
          vlastitu listu za gledanje i ocjenjivanje serija kroz recenziju.
        </p>
        <Link href={"/katalog"}>
          <button className="m-10 px-10 py-5 bg-red-500 dark:bg-gray-800 hover:bg-red-400 dark:hover:bg-gray-500 text-white text-2xl font-bold rounded-2xl cursor-pointer flex items-center">
            Ulaz <ChevronRightIcon className="w-10" />
          </button>
        </Link>
      </div>
    </div>
  );
}
