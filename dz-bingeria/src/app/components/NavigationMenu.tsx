"use client";

import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <Bars3Icon
        className="w-8 h-8 text-white cursor-pointer m-3"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div
          className="z-20 flex flex-col bg-red-500 dark:bg-gray-800 w-full text-white"
          onClick={() => setOpen(!open)}
        >
          <Link href={"/katalog"}>
            <div className="text-center w-full hover:bg-red-400 dark:hover:bg-gray-700 p-5">
              Katalog
            </div>
          </Link>
          <Link href={"/lista"}>
            <div className="text-center w-full hover:bg-red-400 dark:hover:bg-gray-700 p-5">
              Moja lista
            </div>
          </Link>
          <Link href={"/o-projektu"}>
            <div className="text-center w-full hover:bg-red-400 dark:hover:bg-gray-700 p-5">
              O projektu
            </div>
          </Link>
          <Link href={"/pravila"}>
            <div className="text-center w-full hover:bg-red-400 dark:hover:bg-gray-700 p-5">
              Pravila
            </div>
          </Link>
          <div className="w-full flex justify-center p-2">
            <ThemeButton />
          </div>
        </div>
      )}
    </div>
  );
}
