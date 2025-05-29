import React from "react";
import Input from "./Input";
import Button from "./Button";
Button;
const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button text="Cancel" variant="secondery" />
        </li>
        <li>
          <Button text="Save" variant="primery" />
        </li>
      </menu>
      <div>
        <Input type="text" label="Title" />
        <Input textarea label="Description" />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
