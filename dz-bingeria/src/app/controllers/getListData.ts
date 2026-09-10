import { getSavedShows } from "../lib/DataStorage";
import { Show } from "../lib/ShowsDataTypes";

export async function getListData() {
  const listData: Show[] = await getSavedShows();

  return listData;
}
