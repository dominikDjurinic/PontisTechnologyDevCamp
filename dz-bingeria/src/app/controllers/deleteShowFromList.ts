import { revalidatePath } from "next/cache";
import { getSavedShows, saveShows } from "../lib/DataStorage";

export async function deleteShowFromList(id: number, path: string) {
  let shows = await getSavedShows();

  shows = shows.filter((show) => show.id !== id);

  await saveShows(shows);

  revalidatePath(path);
}
