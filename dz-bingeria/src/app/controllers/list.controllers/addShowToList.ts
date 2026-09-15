"use server";

import { revalidatePath } from "next/cache";

import { Show } from "@/app/lib/ShowsDataTypes";
import { getSavedShows, saveShows } from "@/app/lib/DataStorage";

export async function addShowToList(newShow: Show) {
  const shows = await getSavedShows();

  const exist = shows.some((show) => show.id === newShow.id);

  if (!exist) {
    const newShowWithDate: Show = {
      ...newShow,
      addedAt: new Date().toISOString(),
    };
    const updatedShows = [...shows, newShowWithDate];
    await saveShows(updatedShows);
  }

  revalidatePath(`/serija/${newShow.id}`);
  revalidatePath("/lista");
}
