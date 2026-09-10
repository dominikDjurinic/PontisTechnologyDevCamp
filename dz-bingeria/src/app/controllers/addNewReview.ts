"use server";

import { getSavedReviews, saveReviews } from "../lib/DataStorage";
import { Review, ReviewForm } from "../lib/ReviewsDataTypes";
import { schema } from "../lib/zodSchema";

export async function addNewReview(formData: ReviewForm, showId: string) {
  const validReviewData = schema.safeParse(formData); //dodatna zod validacija

  if (!validReviewData.success) {
    console.log(validReviewData.error);
    return {
      success: false,
      error: validReviewData.error.message,
    };
  }

  const newReview: Review = {
    id: crypto.randomUUID(),
    show_id: showId,
    rating: validReviewData.data.rating,
    last_episode: validReviewData.data.last_episode,
    comment: validReviewData.data.comment,
    spoiler: validReviewData.data.spoiler,
  };

  const reviews = await getSavedReviews();

  const updatedReviews = [...reviews, newReview];
  await saveReviews(updatedReviews);

  return {
    success: true,
    error: "",
    data: newReview,
  };

  //revalidatePath("/registracija");
}
