export async function setEpisodeWatched({
  episodeId,
  watched,
}: {
  episodeId: number;
  watched: boolean;
}): Promise<{ episodeId: number; watched: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const watchedStorage = JSON.parse(
    localStorage.getItem("watched_episodes") || "{}",
  );
  if (watched) {
    watchedStorage[episodeId] = true;
  } else {
    delete watchedStorage[episodeId];
  }
  localStorage.setItem("watched_episodes", JSON.stringify(watchedStorage));

  return { episodeId, watched };
}
