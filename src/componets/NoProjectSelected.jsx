import React from "react";
import noProjectIcon from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({ title }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain  mx-auto"
        src={noProjectIcon}
        alt={title}
      />
      <h2 className="my-4 font-bold text-stone-500 text-xl">{title}</h2>
      <p className="opacity-45 text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button text="Create new project" />
      </p>
    </div>
  );
};

export default NoProjectSelected;
