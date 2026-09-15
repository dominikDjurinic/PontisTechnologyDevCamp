import { getSavedReviews } from "@/app/lib/DataStorage";
import { Review } from "@/app/lib/ReviewsDataTypes";

export async function getReviewsByShowId(showId: string) {
  const reviews = await getSavedReviews();

  const selectedReviews = reviews.filter((review) => review.show_id === showId);

  if (!selectedReviews) return [] as Review[];

  return selectedReviews;
}
