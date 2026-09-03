"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import { Task } from "../data/Server";
import { toggleTaskAction } from "../data/ToggleTaskAction";

type TaskProps = {
  task: Task;
};

// Komponenta Check Box na zadatku
export default function TaskCheckBox({ task }: TaskProps) {
  const handleToggleTask = async () => {
    await toggleTaskAction(task.id);
  };

  return (
    <div
      className="w-[10%] flex justify-center items-center border-black border-1 h-10 cursor-pointer"
      onClick={() => handleToggleTask()}
    >
      {task.done && <CheckIcon className="w-5 h-5" />}
    </div>
  );
}
