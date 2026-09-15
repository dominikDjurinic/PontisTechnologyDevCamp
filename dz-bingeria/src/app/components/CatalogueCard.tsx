import React from "react";
import Image from "next/image";
import { ShowCardProps } from "../lib/ShowsDataTypes";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { showExistInList } from "../controllers/showExistInList";
import ListButton from "./ListButton";
import CompareButton from "./CompareButton";

export default async function CatalogCard({ show, list }: ShowCardProps) {
  const savedShow = await showExistInList(show.id);

  return (
    <div className="relative">
      {list && <ListButton isSaved={savedShow} show={show} />}
      <CompareButton id={show.id} />
      <Link
        href={`/serija/${show.id}`}
        className=" hover:text-red-500 dark:hover:text-gray-400"
      >
        <div className=" h-100 flex flex-col items-center justify-center gap-5 bg-gray-100 dark:bg-gray-800 w-80 rounded-2xl px-10 py-5 text-center shadow-xs shadow-gray-300">
          {show.image && (
            <Image
              className="w-auto h-auto"
              src={show.image}
              alt={show.name}
              width={100}
              height={100}
            />
          )}

          <h2 className="font-bold text-xl">{show.name}</h2>

          <p className="flex justify-center flex-wrap gap-x-2 text-black dark:text-white">
            Žanrovi:{" "}
            {show.genres.map((genre) => {
              return <span key={genre}>{genre}</span>;
            })}
          </p>
          <div className="flex justify-center items-center gap-2 text-black dark:text-white">
            <p>Ocjena: {show.rating}</p>
            <StarIcon className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </div>
  );
}
