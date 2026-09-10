import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-5 text-center gap-5">
      <h2 className="text-2xl md:text-4xl font-bold my-10">
        O projektu - Bingeria
      </h2>
      <p>
        Projekt je izrađen u sklopu redovnih domaćih zadataka u Pontis
        Technology DevCamp 2026.
      </p>
      <p>
        Integrativni projekt nakon predavanja iz Frontend dijela programa
        DevCampa: F1, F2 i F3.
      </p>
      <p>
        Aplikaciju za praćenje serija. Korisnik pretražuje katalog, otvara
        detalje serije, dodaje je na svoju listu za gledanje i piše recenziju s
        ocjenom.
      </p>
      <Image
        src={"/logoPontisTech.png"}
        alt="logoPontis"
        width={500}
        height={100}
        className="w-auto h-auto m-5"
      />
    </div>
  );
}
