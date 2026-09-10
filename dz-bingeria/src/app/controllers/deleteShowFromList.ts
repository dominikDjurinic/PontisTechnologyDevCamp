"use server";

import { revalidatePath } from "next/cache";
import { getSavedShows, saveShows } from "../lib/DataStorage";

export async function deleteShowFromList(id: number) {
  let shows = await getSavedShows();

  shows = shows.filter((show) => show.id !== id);

  await saveShows(shows);

  revalidatePath(`/serija/${id}`);
  revalidatePath("/lista");
}
