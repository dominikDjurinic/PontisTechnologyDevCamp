"use client";

import { Task } from "../data/Server";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type TaskListProps = {
  tasks: Task[];
};

// Brojac nedovrsenih zadataka
export default function StatusCounter({ tasks }: TaskListProps) {
  const unfinishedCount = tasks.filter((task) => !task.done).length;

  useDocumentTitle(unfinishedCount); // Poziv custom hook

  return (
    <div>
      Broj nedovršenih zadataka: <span>{unfinishedCount}</span>
    </div>
  );
}
