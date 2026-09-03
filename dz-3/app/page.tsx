import { getTasks, Task } from "./data/Server";
import Form from "./components/Form";
import StatusCounter from "./components/StatusCounter";
import TaskCheckBox from "./components/TaskCheckBox";

// Pocetna stranica sa formom i listom zadataka
export default async function Home() {
  const tasks: Task[] = await getTasks(); // Dohvat podataka sa servera

  return (
    <div className="w-full flex flex-col items-center py-10 gap-10">
      <Form />
      <div className="flex flex-col text-center w-[500px] m-5">
        <div className="flex items-center justify-center gap-5 bg-amber-500 p-3 font-bold">
          <h3 className="w-[10%]"></h3>
          <h3 className="w-[80%]">Zadaci</h3>
          <h3 className="w-[10%]">Status</h3>
        </div>
        {tasks.map((task, index) => {
          return (
            <div
              key={task.id}
              className="flex items-center justify-center gap-5 bg-amber-200 p-3 border-b-1"
            >
              <p className="w-[10%]">{index + 1}.</p>
              <p className="w-[90%] text-wrap">{task.title}</p>
              <TaskCheckBox task={task} />
            </div>
          );
        })}
      </div>
      <StatusCounter tasks={tasks} />
    </div>
  );
}
