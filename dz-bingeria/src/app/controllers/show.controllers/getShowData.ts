import { RawShow, Show } from "@/app/lib/ShowsDataTypes";
import { notFound } from "next/navigation";

export async function getShowData() {
  try {
    const raw_data = await fetch("https://api.tvmaze.com/shows?page=0", {
      next: { revalidate: 3600 },
    });

    if (!raw_data.ok) {
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
    return [];
  }
}
