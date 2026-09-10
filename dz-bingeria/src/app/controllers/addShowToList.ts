"use server";

import { revalidatePath } from "next/cache";
import { getSavedShows, saveShows } from "../lib/DataStorage";
import { Show } from "../lib/ShowsDataTypes";

export async function addShowToList(newShow: Show) {
  const shows = await getSavedShows();

  const exist = shows.some((show) => show.id === newShow.id);

  if (!exist) {
    shows.push(newShow);
    await saveShows(shows);
  }

  revalidatePath(`/serija/${newShow.id}`);
}
