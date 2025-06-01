import React from "react";
import NewTask from "./NewTask";

const Task = ({ onAddTask, onDeleteTask, filteredTasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-600 mb-3 ">Tasks</h2>

      <NewTask onAdd={onAddTask} />
      {filteredTasks.length === 0 && (
        <p className="text-xl text-stone-400">
          This project does not have any tasks yet
        </p>
      )}
      <ul>
        {filteredTasks.length > 0 &&
          filteredTasks.map((task) => (
            <li className="flex justify-between" key={task.taskId}>
              <span>{task.text}</span>
              <button onClick={() => onDeleteTask(task.taskId)} type="button">
                Clear
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Task;
