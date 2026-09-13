import Image from "next/image";
import CashRegister from "./components/CashRegister";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <CashRegister />
      <Image
        src={"/cashRegister.png"}
        alt="icon"
        width={500}
        height={500}
        className="absolute top-5 p-10 w-200 h-auto opacity-15"
      />
    </div>
  );
}
