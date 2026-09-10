import { notFound } from "next/navigation";
import { RawShow, Show } from "../data/ShowsDataTypes";

export async function getShowData() {
  try {
    const raw_data = await fetch("https://api.tvmaze.com/shows?page=0");

    if (!raw_data) {
      notFound();
    }

    const data: RawShow[] = await raw_data.json();

    const shows: Show[] = data.map((show) => ({
      id: show.id,
      name: show.name,
      genres: show.genres,
      rating: show.rating.average,
      image: show.image?.original,
    }));

    return shows as Show[];
  } catch (err) {
    console.error(err);
    notFound();
  }
}
