// components/TaskList.js
import Task from "./Task";

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  done,
}) {
  return (
    <section className="p-4 flex flex-col gap-3 w-full">
      <h2 className="text-lg font-semibold text-purple-200">
        {done
          ? `Done - ${tasks.length}`
          : `Tasks to do - ${tasks.length}`}
      </h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </section>
  );
}
