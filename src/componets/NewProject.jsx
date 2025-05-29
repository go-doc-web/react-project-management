import React from "react";
import Input from "./Input";
const NewProject = () => {
  return (
    <div className="w-[35rem]">
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>

        <div>
          <Input type="text" label="Title" />
          <Input textarea label="Description" />
          <Input label="Due Date" />
        </div>
      </menu>
    </div>
  );
};

export default NewProject;
