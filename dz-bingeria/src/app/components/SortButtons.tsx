"use client";

import { ArrowLongDownIcon, ArrowLongUpIcon } from "@heroicons/react/20/solid";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function SortButtons() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSortBy = searchParams.get("sortBy") || "date";
  const currentOrder = searchParams.get("order") || "desc";

  const handleSort = (type: "date" | "rating") => {
    const params = new URLSearchParams(searchParams.toString());

    if (currentSortBy === type) {
      params.set("order", currentOrder === "desc" ? "asc" : "desc");
    } else {
      params.set("sortBy", type);
      params.set("order", "desc");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-3 items-center my-4">
      <span>Sortiraj po:</span>

      <button
        onClick={() => handleSort("date")}
        className={`px-3 py-1.5 rounded-lg border text-sm font-medium flex items-center ${
          currentSortBy === "date"
            ? "bg-red-500 dark:bg-gray-800 text-white"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        Datum{" "}
        {currentSortBy === "date" ? (
          currentOrder === "desc" ? (
            <ArrowLongDownIcon className="w-5 h-5" />
          ) : (
            <ArrowLongUpIcon className="w-5 h-5" />
          )
        ) : (
          ""
        )}
      </button>

      <button
        onClick={() => handleSort("rating")}
        className={`px-3 py-1.5 rounded-lg border text-sm font-medium flex items-center ${
          currentSortBy === "rating"
            ? "bg-red-500 dark:bg-gray-800 text-white"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        Ocjena{" "}
        {currentSortBy === "rating" ? (
          currentOrder === "desc" ? (
            <ArrowLongDownIcon className="w-5 h-5" />
          ) : (
            <ArrowLongUpIcon className="w-5 h-5" />
          )
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
