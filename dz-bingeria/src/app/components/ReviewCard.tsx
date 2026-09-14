"use client";

import React from "react";
import { ReviewCardProps } from "../lib/ReviewsDataTypes";
import { useSpoiler } from "../hooks/useSpoiler";

export default function ReviewCard({ review }: ReviewCardProps) {
  const { isRevealed, reveal, blurClass } = useSpoiler(review.spoiler);

  return (
    <div className="relative w-[95%] md:w-[80%] grid grid-cols-3 items-center justify-evenly bg-gray-50 dark:bg-gray-800  rounded-2xl p-10 text-center shadow-xs shadow-gray-300">
      <p>{review.rating}</p>
      <p>{review.last_episode}</p>
      <p className={blurClass}>{review.comment}</p>
      {review.spoiler && !isRevealed && (
        <button
          onClick={reveal}
          className="absolute right-3  m-auto w-max h-max bg-red-500 dark:bg-black text-white text-xs px-3 py-1 rounded cursor-pointer"
        >
          Prikaži
        </button>
      )}
    </div>
  );
}
