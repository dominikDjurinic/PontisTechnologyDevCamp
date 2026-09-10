import fs from "fs/promises";
import path from "path";
import { Show } from "./ShowsDataTypes";
import { Review } from "./ReviewsDataTypes";

// Shows

const filePath = path.join(process.cwd(), "data.json");

export async function getSavedShows(): Promise<Show[]> {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}

export async function saveShows(shows: Show[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(shows, null, 2), "utf-8");
}

// Reviews

const reviewFilePath = path.join(process.cwd(), "review_data.json");

export async function getSavedReviews(): Promise<Review[]> {
  try {
    const fileContent = await fs.readFile(reviewFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}

export async function saveReviews(reviews: Review[]): Promise<void> {
  await fs.writeFile(reviewFilePath, JSON.stringify(reviews, null, 2), "utf-8");
}
