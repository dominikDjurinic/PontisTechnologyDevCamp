"use client";

import { useState } from "react";
import Image from "next/image";

// Brojac lajkova - klijentska komponenta
export default function LikeCounter() {
  const [total, setTotal] = useState<number>(0);

  return (
    <div
      className="absolute top-1 right-1 flex gap-2 cursor-pointer m-3 px-3 py-2 rounded-xl bg-white select-none text-black"
      onClick={() => setTotal((prevTotal) => prevTotal + 1)}
    >
      <Image
        className="w-auto h-auto"
        src={total > 0 ? "/like2.png" : "/like.png"}
        alt="like-icon"
        width={20}
        height={20}
      />
      <p className="font-bold">{total}</p>
    </div>
  );
}
