"use client";
import React from "react";
import { useShowComparison } from "../store/showsComparison";
import { ScaleIcon } from "@heroicons/react/20/solid";

export default function CompareButton({ id }: { id: number }) {
  const addShow = useShowComparison((s) => s.add);
  const showsCount = useShowComparison((s) => s.showsToCompare.length);
  const isDisabled = showsCount === 3;
  return (
    <button
      disabled={isDisabled}
      onClick={() => addShow(id)}
      className={`absolute left-3 top-2  m-auto w-max h-max ${isDisabled ? "bg-gray-500 opacity-30" : "bg-red-500 dark:bg-black hover:bg-red-400 dark:hover:bg-gray-900"} text-white text-xs px-3 py-3 rounded-full cursor-pointer`}
    >
      <ScaleIcon className="w-5 h-5" />
    </button>
  );
}
