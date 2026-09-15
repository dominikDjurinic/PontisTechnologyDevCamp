import Image from "next/image";
import React from "react";

export default function RulesPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-5 text-center gap-5">
      <h2 className="text-2xl md:text-4xl font-bold my-10">
        Pravila na projektu - Bingeria
      </h2>
      <p>
        Pravila na projektu Bingeria je moguće preuzeti u PDF formatu i detaljno
        pročitati.
      </p>
      <div className="flex justify-center items-center w-full gap-5 flex-wrap">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={"/rules.png"}
            alt="rules"
            width={300}
            height={100}
            className="w-80 border-2 border-black"
          />
          <a
            href="/PontisTechDevCamp2026-zadaca-Bingeria.pdf"
            download="Pravila-PontisTechDevCamp2026 - zadaca - Bingeria.pdf"
            className="w-fit px-4 py-2 bg-red-500 dark:bg-gray-800 text-white rounded-lg hover:bg-red-400 dark:hover:bg-gray-500"
          >
            Preuzmite PDF
          </a>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={"/rules2.png"}
            alt="rules"
            width={300}
            height={100}
            className="w-100 border-2 border-black"
          />
          <a
            href="/PontisTechDevCamp2026-zadaca-Bingeria-part2.pdf"
            download="Pravila-PontisTechDevCamp2026-zadaca-Bingeria-part2.pdf"
            className=" w-fit px-4 py-2 bg-red-500 dark:bg-gray-800 text-white rounded-lg hover:bg-red-400 dark:hover:bg-gray-500"
          >
            Preuzmite PDF
          </a>
        </div>
      </div>
    </div>
  );
}
