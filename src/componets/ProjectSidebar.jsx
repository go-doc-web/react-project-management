import React from "react";
import Button from "./Button";

const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject} text="+ Add Project" />
        <ul className="mt-8 flex flex-col justify-center gap-2">
          {projects &&
            projects.map((project) => {
              let classesButton;
              if (project.id === selectedProjectId) {
                classesButton =
                  "w-full px-2 py-2 text-left rounded-md text-stone-200 bg-stone-950 ";
              } else {
                classesButton =
                  "w-full px-2 py-2 text-left rounded-md text-stone-400 bg-stone-800 hover:text-stone-200 hover:bg-stone-950 ";
              }
              return (
                <li className="" key={project.id}>
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className={classesButton}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </aside>
  );
};

export default ProjectSidebar;
