import React from "react";
import CatalogueCard from "../components/CatalogueCard";
import { Show } from "../lib/ShowsDataTypes";
import { getListData } from "../controllers/getListData";

export default async function MyListPage() {
  const shows: Show[] = await getListData();

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-2xl md:text-4xl font-bold my-10">
        Lista serija favorita
      </h2>
      <p>Broj serija favorita: {shows?.length}</p>
      {shows.length === 0 && <p>Trenutno nema odabranih serija favorita.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        {shows?.map((show) => {
          return <CatalogueCard key={show.id} show={show} list={true} />;
        })}
      </div>
    </div>
  );
}
