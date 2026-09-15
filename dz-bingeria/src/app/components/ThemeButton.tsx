"use client";
import React from "react";
import { useTheme } from "../store/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export default function ThemeButton() {
  const activeTheme = useTheme((s) => s.theme);
  const toggleTheme = useTheme((s) => s.toggle);

  return (
    <button
      onClick={() => toggleTheme()}
      className={`flex items-center justify-center gap-2 text-center w-60 uppercase bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 p-4 cursor-pointer rounded-2xl`}
    >
      {activeTheme === "light" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}{" "}
      {activeTheme} mode
    </button>
  );
}
