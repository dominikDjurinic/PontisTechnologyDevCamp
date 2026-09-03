export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export const all_tasks: Task[] = [
  {
    id: crypto.randomUUID(),
    title: "Naučiti state, hooks i dohvat podataka u Next.js",
    done: true,
  },
];

// Simulacija servera s podacima
export const getTasks = async (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...all_tasks]);
    }, 1000); // 1 sec odgoda
  });
};
