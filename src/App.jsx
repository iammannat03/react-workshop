"use client";
// App.js
import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import JokeModal from "./components/JokeModal";
import ScratchToRevealDemo from "./components/ScratchCardDemo";

const dummy = [
  {
    id: 1,
    text: "Complete React project setup",
    done: false,
  },
  {
    id: 2,
    text: "Fix Vite dynamic import issue",
    done: false,
  },
  { id: 3, text: "Review pull requests", done: true },
  {
    id: 4,
    text: "Write unit tests for TaskList component",
    done: false,
  },
  { id: 5, text: "Prepare for project demo", done: true },
];

export default function App() {
  const [tasks, setTasks] = useState(dummy);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, done: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto flex flex-col justify-start items-center py-20 md:grid md:grid-cols-2 gap-x-10">
      <div className="hidden md:block md:col-span-1 h-full w-full flex-col justify-between items-center">
        <div className="w-full flex-col justify-start items-center">
          <Timer />
          <JokeModal />
        </div>
        <ScratchToRevealDemo />
      </div>
      <div className="h-full flex flex-col justify-start items-center md:col-span-1 w-full px-5">
        <TaskInput addTask={addTask} />
        <div className="gap-y-5 flex flex-col justify-center items-center w-full">
          <TaskList
            tasks={tasks.filter((task) => !task.done)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            done={false}
          />
          <TaskList
            tasks={tasks.filter((task) => task.done)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            done={true}
          />
        </div>
      </div>
    </div>
  );
}
