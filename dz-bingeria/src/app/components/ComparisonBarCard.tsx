import Image from "next/image";
import React from "react";
import { Show } from "../lib/ShowsDataTypes";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useShowComparison } from "../store/showsComparison";

export default function ComparisonBarCard({ params }: { params: Show }) {
  const removeShow = useShowComparison((s) => s.remove);

  return (
    <div className=" flex  items-center justify-between gap-5 bg-gray-100 dark:bg-gray-800 w-50 rounded-2xl px-3 py-1 text-center shadow-xs shadow-gray-300">
      <div
        onClick={() => removeShow(params.id)}
        className="p-1 dark:text-white dark:hover:bg-gray-500 hover:bg-red-500 hover:text-white rounded-full"
      >
        <XMarkIcon className="w-5 h-5" />
      </div>
      {params.image && (
        <Image
          className="w-auto h-auto"
          src={params.image}
          alt={params.name}
          width={20}
          height={20}
        />
      )}

      <h2 className="">{params.name}</h2>
    </div>
  );
}
