"use client";

import dynamic from "next/dynamic";
import { Episode, Season } from "@/app/lib/ShowsDataTypes";

const RatingChart = dynamic(
  () =>
    import("@/app/components/SeasonsRatingChart").then(
      (mod) => mod.RatingChart,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-[95%] md:w-[80%] h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center my-5">
        <p className="text-gray-500">Učitavanje grafikona...</p>
      </div>
    ),
  },
);

type Props = {
  seasons: Season[];
  episodes: Episode[];
};

export default function SeasonsChartContainer({ seasons, episodes }: Props) {
  return <RatingChart seasons={seasons} episodes={episodes} />;
}
