"use client";

import { useState } from "react";

export function useSpoiler(isSpoiler: boolean) {
  const [isRevealed, setIsRevealed] = useState(!isSpoiler);

  const reveal = () => setIsRevealed(true);
  const blurClass = !isRevealed ? " blur-md select-none cursor-pointer" : "";

  return { isRevealed, reveal, blurClass };
}
