export type Review = {
  id: string;
  show_id: string;
  rating: number;
  last_episode: number;
  comment: string;
  spoiler: boolean;
};

export type ReviewForm = {
  rating: number;
  last_episode: number;
  comment: string;
  spoiler: boolean;
};

export type ReviewResponse = {
  success: boolean;
  error: string;
  data?: Review;
};

export type ReviewCardProps = {
  review: Review;
};
