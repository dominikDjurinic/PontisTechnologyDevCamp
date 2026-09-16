import {
  Episode,
  RawShowDetails,
  Season,
  ShowDetails,
} from "@/app/lib/ShowsDataTypes";
import { notFound } from "next/navigation";

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
    const raw_data_seasons = fetch(
      `https://api.tvmaze.com/shows/${id}/seasons`,
      {
        next: { revalidate: 3600 },
      },
    );

    const [show_details_resp, episodes_resp, seasons_resp] = await Promise.all([
      raw_data_show_details,
      raw_data_episodes,
      raw_data_seasons,
    ]);

    if (!show_details_resp.ok || !episodes_resp.ok || !seasons_resp.ok) {
      notFound();
    }

    const [show_details_data, episodes_data, seasons_data]: [
      RawShowDetails,
      Episode[],
      Season[],
    ] = await Promise.all([
      show_details_resp.json(),
      episodes_resp.json(),
      seasons_resp.json(),
    ]);

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
      season: ep.season,
      rating: ep.rating,
    }));

    const seasons: Season[] = seasons_data.map((s) => ({
      id: s.id,
      number: s.number,
    }));

    return [showDetails, episodes, seasons] as [
      ShowDetails,
      Episode[],
      Season[],
    ];
  } catch {
    notFound();
  }
}
