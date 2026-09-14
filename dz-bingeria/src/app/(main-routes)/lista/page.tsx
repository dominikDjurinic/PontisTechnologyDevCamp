import React from "react";
import CatalogueCard from "../../components/CatalogueCard";
import { getListData } from "../../controllers/getListData";
import { SortButtons } from "../../components/SortButtons";
import { getSavedReviews } from "../../lib/DataStorage";

type Props = {
  searchParams: Promise<{ sortBy?: string; order?: string }>;
};

export default async function MyListPage({ searchParams }: Props) {
  const { sortBy = "date", order = "desc" } = await searchParams;
  const shows = await getListData();
  const reviews = await getSavedReviews();

  const filteredReviews = reviews.filter((review) =>
    shows.some((show) => show.id === Number(review.show_id)),
  );

  const uniqueShowIdsWithReviews = new Set(
    filteredReviews.map((r) => r.show_id),
  );

  const showsWithReviewsCount = uniqueShowIdsWithReviews.size;
  const showListCount = shows.length;

  const sumRating = filteredReviews.reduce(
    (sum, review) => sum + review.rating,
    0,
  );
  const averageRating =
    filteredReviews.length !== 0 ? sumRating / filteredReviews.length : 0;

  const sortedShows = [...shows].sort((a, b) => {
    let result = 0;

    if (sortBy === "rating") {
      const ratingA = a.rating ? a.rating : 0;
      const ratingB = b.rating ? b.rating : 0;
      result = ratingA - ratingB;
    } else {
      const dateA = new Date(a.addedAt || 0).getTime();
      const dateB = new Date(b.addedAt || 0).getTime();
      result = dateA - dateB;
    }

    return order === "desc" ? -result : result;
  });

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-2xl md:text-4xl font-bold my-10">
        Moja lista serija
      </h2>
      <div className="w-[95%] md:w-[80%] flex flex-col md:flex-row items-center justify-center gap-5 bg-gray-100 dark:bg-gray-800 w-80 rounded-2xl p-12 text-center shadow-xs shadow-gray-300">
        <p>
          Broj serija: <span className="font-bold">{showListCount}</span>
        </p>
        <p>
          Broj recenziranih serija:{" "}
          <span className="font-bold">
            {showsWithReviewsCount}/{showListCount}
          </span>
        </p>
        <p>
          Prosječna ocjena svih recenzija:{" "}
          <span className="font-bold">{averageRating.toFixed(1)}</span>
        </p>
      </div>

      <SortButtons />
      {shows.length === 0 && <p>Trenutno nema odabranih serija favorita.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        {sortedShows?.map((show) => {
          return <CatalogueCard key={show.id} show={show} list={true} />;
        })}
      </div>
    </div>
  );
}
