export type Show = {
  id: number;
  name: string;
  genres: string[];
  rating: number | null;
  image: string | null | undefined;
  addedAt?: string;
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
  list?: boolean;
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

export type Season = {
  id: number;
  number: number;
};

export type ShowDetailsCardProps = {
  show: ShowDetails;
  episodes: Episode[];
  seasons: Season[];
};

export type SeasonEpisode = {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  watched?: boolean;
};

export type EpisodeItemProps = {
  episode: SeasonEpisode;
  onToggle: (episodeId: number, watched: boolean) => void;
};
