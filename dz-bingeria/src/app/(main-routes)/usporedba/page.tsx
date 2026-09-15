import CatalogueCard from "@/app/components/CatalogueCard";
import { getShowById } from "@/app/controllers/show.controllers/getShowById";
import { Show } from "@/app/lib/ShowsDataTypes";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function ComparisonPage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const params = await searchParams;

  const show_ids = params.ids
    ? params.ids.split(",").map(Number).filter(Boolean)
    : [];

  const showsData = await Promise.all(show_ids.map((id) => getShowById(id)));
  const selectedShows = showsData.filter((show): show is Show => show !== null);

  if (selectedShows.length === 0)
    return (
      <div className="w-full flex flex-col justify-center items-center p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Nema odabranih serija za usporedbu.
        </h1>
        <Link
          href={"/katalog"}
          prefetch={false}
          className="px-3 py-2 w-fit bg-red-500 hover:bg-red-400 dark:bg-gray-800 dark:hover:bg-gray-500 text-white text-sm font-bold rounded-2xl cursor-pointer flex items-center"
        >
          <ArrowLeftIcon className="w-5 h-5" /> <p>Povratak na katalog</p>
        </Link>
      </div>
    );

  return (
    <div className="w-full flex flex-col items-center gap-5 py-10">
      <h2 className="text-2xl md:text-4xl font-bold my-10">Usporedba serija</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
        {selectedShows.map((show) => {
          return <CatalogueCard key={show.id} show={show} />;
        })}
      </div>
    </div>
  );
}
