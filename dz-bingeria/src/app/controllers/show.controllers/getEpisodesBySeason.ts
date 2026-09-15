import { SeasonEpisode } from "@/app/lib/ShowsDataTypes";

export async function getEpisodesBySeason(
  seasonId: number,
): Promise<SeasonEpisode[]> {
  const res = await fetch(
    `https://api.tvmaze.com/seasons/${seasonId}/episodes`,
  );
  if (!res.ok) {
    throw new Error("Neuspešno dohvaćanje epizoda za odabranu sezonu.");
  }
  const episodes: SeasonEpisode[] = await res.json();

  const watchedStorage = JSON.parse(
    localStorage.getItem("watched_episodes") || "{}",
  );

  return episodes.map((ep) => ({
    ...ep,
    watched: watchedStorage[ep.id] === true,
  }));
}
