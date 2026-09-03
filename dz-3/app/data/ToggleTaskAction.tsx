"use server";

import { revalidatePath } from "next/cache";
import { all_tasks } from "./Server";

// Server Action - postavljanje zadatka dovrsenim ili nedovrsenim
export async function toggleTaskAction(id: string) {
  const task_ind = all_tasks.findIndex((task) => task.id === id);

  all_tasks[task_ind] = {
    ...all_tasks[task_ind],
    done: !all_tasks[task_ind].done,
  };

  revalidatePath("/");
}
