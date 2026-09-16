import React, { memo } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { EpisodeItemProps } from "../lib/ShowsDataTypes";

function EpisodeItemComp({ episode, onToggle }: EpisodeItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-500  rounded-2xl">
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-red-400 dark:text-black font-bold">
          E{episode.number}
        </span>
        <h4 className="text-sm font-semibold text-black dark:text-white">
          {episode.name}
        </h4>
        <span className="text-xs text-gray-500 dark:text-white">
          {episode.airdate || "N/A"}
        </span>
      </div>

      <button
        onClick={() => onToggle(episode.id, !episode.watched)}
        className={`m-3 cursor-pointer ${episode.watched ? "text-red-500 dark:text-gray-800" : "text-gray-400 dark:text-white"}`}
      >
        {episode.watched ? (
          <EyeIcon className="w-5 h-5" />
        ) : (
          <EyeSlashIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export const EpisodeItem = memo(EpisodeItemComp);
