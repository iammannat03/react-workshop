// components/TaskInput.js
import { Plus } from "lucide-react";
import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission to server and page reload
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  justify-center gap-2 p-4 w-full"
    >
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-white/5 text-white w-full py-2 px-4 outline-none border border-purple-700/50 rounded-lg"
      />
      <button
        type="submit"
        className="bg-purple-400 border border-purple-700/50 text-white rounded-lg hover:bg-purple-400/80 p-3"
      >
        <Plus className="h-5 w-5" />
      </button>
    </form>
  );
}
