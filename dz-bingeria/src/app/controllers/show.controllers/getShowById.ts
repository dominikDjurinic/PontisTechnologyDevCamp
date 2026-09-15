import { RawShow, Show } from "@/app/lib/ShowsDataTypes";

export async function getShowById(id: number): Promise<Show | null> {
  try {
    const raw_data = await fetch(`https://api.tvmaze.com/shows/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!raw_data.ok) {
      return null;
    }

    const data: RawShow = await raw_data.json();

    const show: Show = {
      id: data.id,
      name: data.name,
      genres: data.genres,
      rating: data.rating.average,
      image: data.image?.original,
    };

    return show as Show;
  } catch (err) {
    console.error(err);
    return null;
  }
}
