import { useRef } from "react";

import Input from "./Input";
import Button from "./Button";
Button;
const NewProject = ({ onAddProject }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  function handleProgectSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    // validation

    onAddProject({ title, description, date });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button text="Cancel" variant="secondery" />
        </li>
        <li>
          <Button onClick={handleProgectSave} text="Save" variant="primery" />
        </li>
      </menu>
      <div>
        <Input ref={titleRef} type="text" label="Title" />
        <Input ref={descriptionRef} textarea label="Description" />
        <Input ref={dateRef} type={"date"} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
