"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Season, SeasonEpisode } from "../lib/ShowsDataTypes";
import { getEpisodesBySeason } from "../controllers/show.controllers/getEpisodesBySeason";
import { setEpisodeWatched } from "../controllers/show.controllers/setEpisodeWatched";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

type SeasonEpisodeProps = {
  showId: number;
  seasons: Season[];
};

export default function SeasonsEpisodesContainer({
  showId,
  seasons,
}: SeasonEpisodeProps) {
  const queryClient = useQueryClient();
  const [selectedSeasonId, setSelectedSeasonId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const queryKey = ["shows", showId, "seasons", selectedSeasonId, "episodes"];

  const {
    data: episodes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => getEpisodesBySeason(selectedSeasonId!),
    enabled: selectedSeasonId !== null,
    staleTime: 1000 * 60 * 15,
  });

  const mutation = useMutation({
    mutationFn: setEpisodeWatched,
    onMutate: async (newState) => {
      setErrorMessage(null);

      await queryClient.cancelQueries({ queryKey });

      const prevEpisodes = queryClient.getQueryData<SeasonEpisode[]>(queryKey);

      queryClient.setQueryData<SeasonEpisode[]>(queryKey, (old) => {
        if (!old) return [];
        return old.map((ep) =>
          ep.id === newState.episodeId
            ? { ...ep, watched: newState.watched }
            : ep,
        );
      });

      return { prevEpisodes };
    },
    onError: (err, newState, context) => {
      if (context?.prevEpisodes) {
        queryClient.setQueryData(queryKey, context.prevEpisodes);
      }
      setErrorMessage("Greška pri spremanju statusa epizode!");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return (
    <div className="w-[95%] md:w-[80%] flex flex-col gap-5 bg-gray-100 dark:bg-gray-800 w-80 rounded-2xl p-12 text-center shadow-xs shadow-gray-300">
      {errorMessage && (
        <div className="p-3 bg-red-900/50 border border-red-500 text-red-200 rounded text-sm">
          {errorMessage}
        </div>
      )}

      <div className="flex flex-wrap gap-2 items-center">
        <span className="font-semibold text-black dark:text-white">
          Sezone:
        </span>
        {seasons.map((season) => (
          <button
            key={season.id}
            onClick={() => setSelectedSeasonId(season.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              selectedSeasonId === season.id
                ? "bg-red-500 text-white dark:bg-gray-500"
                : "bg-gray-300 dark:bg-gray-400 text-white hover:bg-red-400 dark:hover:bg-gray-400"
            }`}
          >
            Sezona {season.number}
          </button>
        ))}
      </div>

      {selectedSeasonId === null && (
        <p className="text-gray-400 text-sm italic">
          Odaberite sezonu za prikaz epizoda.
        </p>
      )}

      {isLoading && selectedSeasonId !== null && (
        <div className="p-6 text-center text-slate-400">
          Učitavanje epizoda...
        </div>
      )}

      {isError && (
        <div className="p-4 bg-red-900/30 border border-red-800 text-red-400 rounded-lg">
          Greška pri dohvaćanju: {(error as Error).message}
        </div>
      )}

      {episodes && episodes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className="flex items-center justify-between p-3 bg-white dark:bg-gray-500  rounded-2xl"
            >
              <div>
                <span className="text-xs text-red-400 dark:text-black font-bold">
                  E{ep.number}
                </span>
                <h4 className="text-sm font-semibold text-black dark:text-white">
                  {ep.name}
                </h4>
                <span className="text-xs text-gray-500 dark:text-white">
                  {ep.airdate || "N/A"}
                </span>
              </div>

              <button
                onClick={() =>
                  mutation.mutate({
                    episodeId: ep.id,
                    watched: !ep.watched,
                  })
                }
                className={`m-3 cursor-pointer ${ep.watched ? "text-red-500 dark:text-gray-800" : "text-gray-400 dark:text-white"}`}
              >
                {ep.watched ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
