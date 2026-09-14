"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [text, setText] = useState(initialQuery);

  const debouncedQuery = useDebounce(text, 400);

  useEffect(() => {
    const currentQuery = searchParams.get("q") || "";

    if (debouncedQuery === currentQuery) return;

    const params = new URLSearchParams(searchParams.toString());

    if (debouncedQuery) {
      params.set("q", debouncedQuery);
    } else {
      params.delete("q");
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(newUrl);
  }, [debouncedQuery, pathname, router]);

  return (
    <div className="my-4 flex items-center gap-5 bg-gray-100 shadow-xs shadow-gray-300 p-5 rounded-2xl">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pretraga serije..."
        className="w-full px-4 py-2 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
      />
      <MagnifyingGlassIcon className="w-5 h-5" />
    </div>
  );
}
