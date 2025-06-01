import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4 mb-3">
      <input
        onChange={handleChange}
        className="w-64 py-1 px-2 rounded-sm bg-stone-200 placeholder:text-[16px]"
        type="text"
        placeholder="typing..."
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
        type="text"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
