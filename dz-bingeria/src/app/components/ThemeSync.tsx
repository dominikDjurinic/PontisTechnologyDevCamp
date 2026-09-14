"use client";

import { useEffect } from "react";
import { useTheme } from "../store/theme";

export default function ThemeSync() {
  const activeTheme = useTheme((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (activeTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [activeTheme]);

  return null;
}
