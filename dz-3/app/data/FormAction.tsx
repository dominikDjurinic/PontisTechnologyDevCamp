"use server";

import { revalidatePath } from "next/cache";
import { all_tasks } from "./Server";

// Server Action - dodavanje novog zadatka
export async function addTask(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title?.trim()) return;

  all_tasks.push({
    id: crypto.randomUUID(),
    title: title.trim(),
    done: false,
  });

  revalidatePath("/");
}
