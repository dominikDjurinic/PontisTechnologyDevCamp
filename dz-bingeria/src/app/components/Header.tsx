import React from "react";
import Image from "next/image";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-red-500 gap-10 pt-10">
      <h1 className="font-bold text-5xl text-white text-shadow-gray-300 text-shadow-sm flex items-center gap-5">
        Bingeria{" "}
        <span>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </span>
      </h1>
      <NavigationMenu />
    </div>
  );
}
