import { useRef } from "react";

import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

const NewProject = ({ onAddProject, onCancelAddProject }) => {
  const modal = useRef();
  const titleRef = useRef(null);
  const descriptionRef = useRef();
  const dateRef = useRef();

  // !на данний час , ціль зробити виборку values за допомогою Refs без вкористання <form></form> and onChange for state

  function handleProgectSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    // validation
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date.trim() === ""
    ) {
      modal.current.open();

      return;
    }

    onAddProject({ title, description, date });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <>
          <h2 className="my-4 font-bold text-red-800 text-xl">Invalid Input</h2>
          <p className=" text-stone-400 mb-4">
            Oops ... Loks like you forgot to enter a value.
          </p>
          <p className=" text-stone-400 mb-4">
            Please make sure you provide a valid value for every input field.
          </p>
        </>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Button
              onClick={onCancelAddProject}
              text="Cancel"
              variant="secondery"
            />
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
    </>
  );
};

export default NewProject;
