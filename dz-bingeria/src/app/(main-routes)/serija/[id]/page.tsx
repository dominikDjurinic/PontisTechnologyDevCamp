import ReviewCard from "@/app/components/ReviewCard";
import SeasonsEpisodesContainer from "@/app/components/SeasonsEpisodeContainer";
import ShowDetailsCard from "@/app/components/ShowDetailsCard";
import { getReviewsByShowId } from "@/app/controllers/review.controllers/getReviewsByShowId";
import { getShowDetailsData } from "@/app/controllers/show.controllers/getShowDetailsData";
import { Episode, Season, ShowDetails } from "@/app/lib/ShowsDataTypes";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DetailsPage({ params }: Props) {
  const { id } = await params;

  const [showDetails, episodes, seasons]: [ShowDetails, Episode[], Season[]] =
    await getShowDetailsData(id);

  const reviews = await getReviewsByShowId(id);

  return (
    <div className="w-full flex flex-col items-center gap-5 py-10">
      <h2 className="text-2xl md:text-4xl font-bold my-10">
        Detaljni pregled serije
      </h2>
      <Link
        href={"/katalog"}
        prefetch={false}
        className="px-3 py-2 bg-red-500 hover:bg-red-400 dark:bg-gray-800 dark:hover:bg-gray-500 text-white text-sm font-bold rounded-2xl cursor-pointer flex items-center"
      >
        <ArrowLeftIcon className="w-5 h-5" /> <p>Povratak na katalog</p>
      </Link>
      <ShowDetailsCard
        show={showDetails}
        episodes={episodes}
        seasons={seasons}
      />
      <SeasonsEpisodesContainer showId={showDetails.id} seasons={seasons} />
      <h2 className="text-2xl md:text-4xl font-bold my-10">
        Recenzije - {reviews.length}
      </h2>
      <div className="relative w-[95%] md:w-[80%] grid grid-cols-3 items-center justify-evenly bg-gray-100 dark:bg-gray-800  w-80 rounded-2xl p-10 text-center shadow-xs shadow-gray-300">
        <p>Ocjena</p>
        <p>Posljednja epizoda</p>
        <p>Komentar</p>
      </div>
      {reviews.map((review) => {
        return <ReviewCard key={review.id} review={review} />;
      })}
    </div>
  );
}
