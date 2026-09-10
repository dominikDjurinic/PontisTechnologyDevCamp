import React from "react";
import { ShowDetailsCardProps } from "../lib/ShowsDataTypes";
import { RectangleStackIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import parse from "html-react-parser";
import { showExistInList } from "../controllers/showExistInList";
import ListButton from "./ListButton";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function ShowDetailsCard({
  show,
  episodes,
}: ShowDetailsCardProps) {
  const savedShow = await showExistInList(show.id);

  return (
    <div className="relative w-[95%] md:w-[80%] flex flex-col md:flex-row items-center justify-center gap-5 bg-gray-100 w-80 rounded-2xl p-12 text-center shadow-xs shadow-gray-300">
      <ListButton isSaved={savedShow} show={show} path={`/serija/${show.id}`} />
      <div className="w-full md:w-[50%] flex items-center justify-center">
        {show.image && (
          <Image
            className="w-auto h-auto"
            src={show.image}
            alt={show.name}
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="w-full md:w-[50%] flex flex-col items-start">
        <h2 className="font-bold text-3xl py-5">{show.name}</h2>

        <p className="flex flex-wrap gap-x-2 text-black">
          Žanrovi:{" "}
          {show.genres.map((genre) => {
            return <span key={genre}>{genre}</span>;
          })}
        </p>
        <div className="flex justify-center items-center gap-2 text-black">
          <p>Epizode: {episodes.length}</p>
          <RectangleStackIcon className="w-4 h-4" />
        </div>
        <p>Premijera: {show.premiered}</p>
        <div className="flex justify-center items-center gap-2 text-black">
          <p>Ocjena: {show.rating}</p>
          <StarIcon className="w-4 h-4" />
        </div>
        <div className="flex flex-col items-start gap-3">
          <p>Sažetak:</p>
          <span className="bg-white text-start p-3 rounded-2xl">
            {parse(show.summary)}
          </span>
        </div>
        {savedShow && (
          <Link
            href={`/nova-recenzija/${show.id}`}
            className="my-3 px-3 py-2 bg-red-500 hover:bg-red-400 text-white text-sm font-bold rounded-2xl cursor-pointer flex items-center gap-3"
          >
            <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />{" "}
            <p>Napiši recenziju</p>
          </Link>
        )}
      </div>
    </div>
  );
}
