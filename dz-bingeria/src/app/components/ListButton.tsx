"use client";

import { HeartIcon } from "@heroicons/react/20/solid";
import { Show } from "../lib/ShowsDataTypes";
import { addShowToList } from "../controllers/addShowToList";
import { deleteShowFromList } from "../controllers/deleteShowFromList";

export default function ListButton({
  show,
  isSaved,
}: {
  show: Show;
  isSaved: boolean;
}) {
  if (isSaved) {
    return (
      <button
        onClick={async (e: React.MouseEvent) => {
          e.stopPropagation();
          await deleteShowFromList(show.id);
        }}
        className="z-10 absolute top-0 right-0 px-2 py-1 text-gray-300 dark:text-gray-700 text-sm font-bold cursor-pointer flex items-center"
      >
        <HeartIcon className="w-10 h-10 text-red-500 dark:text-white" />
      </button>
    );
  }

  return (
    <button
      onClick={async (e: React.MouseEvent) => {
        e.stopPropagation();
        await addShowToList(show);
      }}
      className="z-10 px-4 py-2 absolute top-0 right-0 px-2 py-1 text-gray-300 dark:text-gray-700 text-sm font-bold cursor-pointer flex items-center"
    >
      <HeartIcon className="w-10 h-10 hover:text-red-500 dark:hover:text-white" />
    </button>
  );
}
