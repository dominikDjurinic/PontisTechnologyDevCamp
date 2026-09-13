import { memo } from "react";
import { FoodDrinks } from "./ListByQuery";

export const ListItem = memo(function ListItem({ item }: { item: FoodDrinks }) {
  return (
    <p className="p-3 bg-white border-b border-black cursor-pointer">
      {item.id} | {item.title}
    </p>
  );
});
