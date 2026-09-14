import { notFound } from "next/navigation";
import { Episode, RawShowDetails, ShowDetails } from "../lib/ShowsDataTypes";

export async function getShowDetailsData(id: string) {
  try {
    const raw_data_show_details = fetch(`https://api.tvmaze.com/shows/${id}`, {
      next: { revalidate: 3600 },
    });
    const raw_data_episodes = fetch(
      `https://api.tvmaze.com/shows/${id}/episodes`,
      {
        next: { revalidate: 3600 },
      },
    );

    const [show_details_resp, episodes_resp] = await Promise.all([
      raw_data_show_details,
      raw_data_episodes,
    ]);

    if (!show_details_resp.ok || !episodes_resp.ok) {
      notFound();
    }

    const [show_details_data, episodes_data]: [RawShowDetails, Episode[]] =
      await Promise.all([show_details_resp.json(), episodes_resp.json()]);

    const showDetails: ShowDetails = {
      id: show_details_data.id,
      name: show_details_data.name,
      genres: show_details_data.genres,
      rating: show_details_data.rating.average,
      image: show_details_data.image?.original,
      premiered: show_details_data.premiered,
      summary: show_details_data.summary,
    };

    const episodes: Episode[] = episodes_data.map((ep) => ({
      id: ep.id,
      name: ep.name,
    }));

    return [showDetails, episodes] as [ShowDetails, Episode[]];
  } catch {
    notFound();
  }
}
