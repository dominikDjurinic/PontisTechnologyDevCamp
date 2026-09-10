import ReviewForm from "@/app/components/ReviewForm";
import React from "react";

type Props = {
  params: Promise<{ showId: string }>;
};

export default async function ReviewPage({ params }: Props) {
  const { showId } = await params;

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h2 className="text-2xl md:text-4xl font-bold my-10">
        Recenzija serije - {showId}
      </h2>
      <ReviewForm showId={showId} />
    </div>
  );
}
