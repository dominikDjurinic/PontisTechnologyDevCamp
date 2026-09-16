import React from "react";
import { getShowData } from "../../controllers/show.controllers/getShowData";
import CatalogueCard from "../../components/CatalogueCard";
import SearchBar from "@/app/components/SearchBar";
import { getListData } from "@/app/controllers/list.controllers/getListData";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Catalogue({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const [data, savedShow] = await Promise.all([
    getShowData(),
    getListData(), // Vraća npr. Array ili Set pohranjenih ID-eva odjednom
  ]);

  const filteredShows = data.filter((show) =>
    show.name.toLowerCase().includes(q.toLowerCase().trim()),
  );

  const visibleShows = filteredShows.slice(0, 24);

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-2xl md:text-4xl font-bold my-10">Katalog serija</h2>
      <SearchBar />
      <p>Broj serija: {visibleShows?.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        {visibleShows.map((show) => {
          return (
            <CatalogueCard
              key={show.id}
              show={show}
              isSaved={savedShow.includes(show)}
            />
          );
        })}
      </div>
    </div>
  );
}
