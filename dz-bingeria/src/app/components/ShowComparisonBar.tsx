"use client";

import { useEffect, useState } from "react";
import { getShowById } from "../controllers/getShowById";
import { Show } from "../lib/ShowsDataTypes";
import { useShowComparison } from "../store/showsComparison";
import Link from "next/link";
import ComparisonBarCard from "./ComparisonBarCard";
import { ScaleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function ShowComparisonBar() {
  const [shows, setShows] = useState<Show[]>([]);
  const showsToCompare = useShowComparison((s) => s.showsToCompare);
  const removeAll = useShowComparison((s) => s.removeAll);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const promises = showsToCompare.map((id) => getShowById(id));
        const data = await Promise.all(promises);
        const validShows = data.filter((show): show is Show => show !== null);
        setShows(validShows);
      } catch (error) {
        console.error("Greška:", error);
      }
    };
    fetchShows();
  }, [showsToCompare]);

  if (showsToCompare.length === 0) return null;

  return (
    <div className="w-full z-100 fixed bottom-0 flex justify-between gap-3 items-center flex-wrap bg-gray-200 dark:bg-gray-800 px-2 py-3 shadow-2xl shadow-gray-300 inset-shadow-sm ">
      <p className="flex items-center gap-3">
        Odabrane serije za usporedbu:
        <button
          onClick={() => removeAll()}
          className="flex items-center gap-2 w-fit bg-red-500 hover:bg-red-400 dark:bg-black dark:hover:bg-gray-900 text-white p-2 cursor-pointer rounded-2xl"
        >
          <XMarkIcon className="w-7 h-7" />
          Izbriši sve
        </button>
      </p>
      <div className="w-fit flex gap-2 text-black dark:text-white flex-wrap">
        {shows.map((show) => {
          return <ComparisonBarCard key={show.id} params={show} />;
        })}
      </div>
      <Link href={`/usporedba?ids=${showsToCompare.join(",")}`}>
        <button className="flex items-center gap-2 w-fit bg-red-500 hover:bg-red-400 dark:bg-black dark:hover:bg-gray-900 text-white p-2 cursor-pointer rounded-2xl">
          <ScaleIcon className="w-7 h-7" /> <p>Usporedi</p>
        </button>
      </Link>
    </div>
  );
}
