import React from "react";
import { Show } from "../../lib/ShowsDataTypes";
import { getShowData } from "../../controllers/show.controllers/getShowData";
import CatalogueCard from "../../components/CatalogueCard";
import SearchBar from "@/app/components/SearchBar";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Catalogue({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const data: Show[] = await getShowData();

  //const shows: Show[] = data?.slice(0, 24);

  const filteredShows = data.filter((show) =>
    show.name.toLowerCase().includes(q.toLowerCase().trim()),
  );

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-2xl md:text-4xl font-bold my-10">Katalog serija</h2>
      <SearchBar />
      <p>Broj serija: {filteredShows?.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        {filteredShows.map((show) => {
          return <CatalogueCard key={show.id} show={show} />;
        })}
      </div>
    </div>
  );
}
