import React from "react";
import Image from "next/image";
import { ShowCardProps } from "../lib/ShowsDataTypes";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ListButton from "./ListButton";
import CompareButton from "./CompareButton";

export default function CatalogCard({
  show,
  list,
  isSaved = false,
}: ShowCardProps) {
  return (
    <div className="relative">
      {list && <ListButton isSaved={isSaved} show={show} />}
      <CompareButton id={show.id} />
      <Link
        href={`/serija/${show.id}`}
        className=" hover:text-red-500 dark:hover:text-gray-400"
      >
        <div className=" h-100 flex flex-col items-center justify-center gap-5 bg-gray-100 dark:bg-gray-800 w-80 rounded-2xl px-10 py-5 text-center shadow-xs shadow-gray-300">
          {show.image && (
            <Image
              src={show.image}
              alt={show.name}
              width={150}
              height={150}
              className="w-35 h-auto"
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
