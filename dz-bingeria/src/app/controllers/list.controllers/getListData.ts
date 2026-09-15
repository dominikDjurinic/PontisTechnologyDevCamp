import { getSavedShows } from "@/app/lib/DataStorage";
import { Show } from "@/app/lib/ShowsDataTypes";

export async function getListData() {
  const listData: Show[] = await getSavedShows();

  return listData;
}
