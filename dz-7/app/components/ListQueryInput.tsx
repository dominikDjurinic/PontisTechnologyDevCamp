"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useUIState } from "../store/uiState";
import { FoodDrinks } from "./ListByQuery";

export default function ListQueryInput() {
  const [query, setQuery] = useState("");
  const queryClient = useQueryClient();
  const activeModal = useUIState((s) => s.activeModal);

  const qk = activeModal === "BAR" ? "drinks" : "food";

  const { mutate } = useMutation({
    mutationFn: (title: string) =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({ title }),
      }),
    /*
    onSuccess: (novi) => {
      console.log("Dodan: " + novi.json());
      queryClient.invalidateQueries({ queryKey: [qk] });
    },
    */
    onMutate: async (newTitle) => {
      await queryClient.cancelQueries({ queryKey: [qk] });

      const previousItems = queryClient.getQueryData<FoodDrinks[]>([qk]);

      const optimisticItem = {
        id: Date.now(),
        title: newTitle,
      };

      queryClient.setQueryData<FoodDrinks[]>([qk], (old = []) => [
        ...old,
        optimisticItem,
      ]);

      setQuery("");

      return { previousItems };
    },

    onError: (err, newTitle, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData([qk], context.previousItems);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [qk] });
    },
  });

  return (
    <div className="flex flex-col gap-5 w-[90%] rounded-2xl bg-gray-200 p-10 text-center">
      <input
        type="text"
        name="item-title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Unesi novi proizvod"
        className="border-2 border-gray-400 rounded-2xl p-2"
      />
      <button
        className="bg-blue-500 rounded-2xl text-white p-2 cursor-pointer"
        onClick={() => mutate(query)}
      >
        Unesi
      </button>
    </div>
  );
}
