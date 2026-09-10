import fs from "fs/promises";
import path from "path";
import { Show } from "./ShowsDataTypes";

const filePath = path.join(process.cwd(), "data.json");

export async function getSavedShows(): Promise<Show[]> {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    return []; // Ako datoteka ne postoji, vrati prazno polje
  }
}

export async function saveShows(shows: Show[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(shows, null, 2), "utf-8");
}
