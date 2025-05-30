import noProjectIcon from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({ title, onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain  mx-auto"
        src={noProjectIcon}
        alt={title}
      />
      <h2 className="my-4 font-bold text-stone-500 text-xl">{title}</h2>
      <p className=" text-stone-600">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject} text="Create new project" />
      </p>
    </div>
  );
};

export default NoProjectSelected;
