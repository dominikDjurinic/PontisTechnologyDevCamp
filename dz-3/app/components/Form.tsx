import { addTask } from "../data/FormAction";

// Form za dodavanje novih zadataka - koristi action
export default function Form() {
  return (
    <form
      className="flex flex-col items-center gap-5 w-[500px] rounded-2xl bg-amber-200 p-10 text-center"
      action={addTask}
    >
      <h1 className="text-xl font-bold">Unos zadatka</h1>
      <input
        type="text"
        name="title"
        placeholder="Unesi novi zadatak"
        className="border-2 border-amber-500 w-full rounded-2xl p-2"
        required
      />
      <button
        type="submit"
        className="bg-amber-500 rounded-2xl cursor-pointer py-2 px-3 w-full font-bold text-white"
      >
        UNOS
      </button>
    </form>
  );
}
