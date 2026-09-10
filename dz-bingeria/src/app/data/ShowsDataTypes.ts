export type Show = {
  id: number;
  name: string;
  genres: string[];
  rating: number | null;
  image: string | null | undefined;
};

export type RawShow = {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
};

export type ShowCardProps = {
  show: Show;
};

export type ShowDetails = {
  id: number;
  name: string;
  genres: string[];
  rating: number | null;
  image: string | null | undefined;
  premiered: string;
  summary: string;
};

export type RawShowDetails = {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  premiered: string;
  summary: string;
};

export type Episode = {
  id: number;
  name: string;
};

export type ShowDetailsCardProps = {
  show: ShowDetails;
  episodes: Episode[];
};
