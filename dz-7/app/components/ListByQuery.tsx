"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useUIState } from "../store/uiState";
import { ListItem } from "./ListItem";

export type FoodDrinks = {
  id: number;
  title: string;
};

type QueryData = {
  qK: string;
  api: string;
};

export default function ListByQuery() {
  const activeModal = useUIState((s) => s.activeModal);

  const api: QueryData =
    activeModal === "BAR"
      ? { qK: "drinks", api: "https://api.sampleapis.com/coffee/hot" }
      : { qK: "food", api: "https://api.sampleapis.com/recipes/recipes" };

  const { data, isPending, isError } = useQuery({
    queryKey: [api.qK],
    queryFn: async () => {
      const res = await fetch(api.api);
      if (!res.ok) throw new Error("Greska");
      const data: FoodDrinks[] = await res.json();
      return data;
    },
  });

  if (isPending) return <p>Učitavanje...</p>;
  if (isError) return <p>Neuspjelo učitavanje.</p>;

  return (
    <div className="my-5 h-100 grid grid-cols-1 gap-3 md:grid-cols-3 p-5 bg-gray-200 overflow-y-auto ">
      {data?.map((item) => {
        return <ListItem key={item.id} item={item} />;
        /*
        return (
          <p
            key={item.id}
            className="p-3 bg-white border-b border-black cursor-pointer"
          >
            {item.id} | {item.title}
          </p>
        );
        */
      })}
    </div>
  );
}
