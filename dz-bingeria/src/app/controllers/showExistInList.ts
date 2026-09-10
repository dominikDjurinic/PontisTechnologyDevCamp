import { getSavedShows } from "../lib/DataStorage";

export async function showExistInList(id: number) {
  const shows = await getSavedShows();

  const exist = shows.some((show) => show.id === id);

  return exist;
}
