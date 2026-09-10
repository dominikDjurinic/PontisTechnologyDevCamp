"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { schema } from "../lib/zodSchema";
import { type ReviewForm, ReviewResponse } from "../lib/ReviewsDataTypes";
import { addNewReview } from "../controllers/addNewReview";

export default function ReviewForm({ showId }: { showId: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: ReviewForm) => {
    const resp: ReviewResponse = await addNewReview(data, showId);

    if (!resp.success) {
      console.log(resp.error);
    }
    router.push(`/serija/${resp.data?.show_id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5 w-[95%] md:w-[50%] bg-gray-100 p-10 rounded-2xl"
    >
      <label className="font-bold">Ocjena</label>
      <input
        type="number"
        {...register("rating", { valueAsNumber: true })}
        className="border border-black w-20 p-2 text-center rounded-2xl bg-white"
      />
      {errors.rating && (
        <span className="text-red-500">{errors.rating.message}</span>
      )}
      <label className="font-bold">Epizoda</label>
      <input
        type="number"
        {...register("last_episode", { valueAsNumber: true })}
        className="border border-black w-20 p-2 text-center rounded-2xl bg-white"
      />
      {errors.last_episode && (
        <span className="text-red-500">{errors.last_episode.message}</span>
      )}
      <label className="font-bold">Komentar</label>
      <textarea
        {...register("comment")}
        className="border border-black w-[90%] md:w-100 p-2 rounded-2xl bg-white"
      />
      {errors.comment && (
        <span className="text-red-500">{errors.comment.message}</span>
      )}
      <label className="font-bold">Spoiler</label>
      <input
        type="checkbox"
        {...register("spoiler")}
        className="border border-black w-full p-2 rounded-2xl bg-white"
      />
      {errors.spoiler && (
        <span className="text-red-500">{errors.spoiler.message}</span>
      )}
      <button
        type="submit"
        className="w-[90%] md:w-100 bg-red-500 font-bold text-white p-5 cursor-pointer rounded-2xl"
      >
        Unos
      </button>
    </form>
  );
}
