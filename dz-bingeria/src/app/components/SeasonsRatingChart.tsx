"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Episode, Season } from "@/app/lib/ShowsDataTypes";

type RatingChartProps = {
  seasons: Season[];
  episodes: Episode[];
};

export function RatingChart({ seasons, episodes }: RatingChartProps) {
  const chartData = seasons.map((season) => {
    const seasonEpisodes = episodes.filter(
      (ep) =>
        ep.season === season.number &&
        ep.rating.average &&
        ep.rating.average > 0,
    );

    const totalRating = seasonEpisodes.reduce(
      (sum, ep) => sum + (ep.rating.average || 0),
      0,
    );
    const avgRating =
      seasonEpisodes.length > 0
        ? Number((totalRating / seasonEpisodes.length).toFixed(1))
        : 0;

    return {
      seasonName: `Sezona ${season.number}`,
      avgRating,
    };
  });

  return (
    <div className="w-[95%] md:w-[80%] bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 my-5 shadow-xs shadow-gray-300">
      <h3 className="text-xl font-bold mb-4 text-center">
        Prosječna ocjena po sezonama
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="seasonName" stroke="#888888" />
            <YAxis domain={[0, 10]} stroke="#888888" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar
              dataKey="avgRating"
              fill="#ee3a3a"
              radius={[6, 6, 0, 0]}
              name="Prosječna ocjena"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
