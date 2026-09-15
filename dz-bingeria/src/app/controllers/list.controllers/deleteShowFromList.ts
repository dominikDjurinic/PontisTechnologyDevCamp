"use server";

import { getSavedShows, saveShows } from "@/app/lib/DataStorage";
import { revalidatePath } from "next/cache";

export async function deleteShowFromList(id: number) {
  let shows = await getSavedShows();

  shows = shows.filter((show) => show.id !== id);

  await saveShows(shows);

  revalidatePath(`/serija/${id}`);
  revalidatePath("/lista");
}
