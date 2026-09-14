"use client";
import React from "react";
import { useTheme } from "../store/theme";

export default function ThemeButton() {
  const activeTheme = useTheme((s) => s.theme);
  const toggleTheme = useTheme((s) => s.toggle);

  return (
    <button onClick={() => toggleTheme()} className="">
      {activeTheme} mode
    </button>
  );
}
