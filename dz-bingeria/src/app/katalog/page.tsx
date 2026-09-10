import React from "react";
import { Show } from "../data/ShowsDataTypes";
import { getShowData } from "../controllers/getShowData";
import CatalogueCard from "../components/CatalogueCard";

export default async function Catalogue() {
  const data: Show[] | undefined = await getShowData();

  const shows: Show[] | undefined = data?.slice(0, 24);

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-4xl font-bold my-10">Katalog serija</h2>
      <p>Broj serija: {shows?.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        {shows?.map((show) => {
          return <CatalogueCard key={show.id} show={show} />;
        })}
      </div>
    </div>
  );
}
