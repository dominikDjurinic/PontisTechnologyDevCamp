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
      <Image
        src={"/rules.png"}
        alt="rules"
        width={300}
        height={100}
        className="w-auto h-auto"
      />
      <a
        href="/PontisTechDevCamp2026-zadaca-Bingeria.pdf"
        download="Pravila-PontisTechDevCamp2026 - zadaca - Bingeria.pdf"
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
      >
        Preuzmite PDF
      </a>
    </div>
  );
}
