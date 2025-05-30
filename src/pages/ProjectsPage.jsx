import { useState } from "react";
import uuid from "react-uuid";
import ProjectSidebar from "../componets/ProjectSidebar";
import NoProjectSelected from "../componets/NoProjectSelected";
import NewProgect from "../componets/NewProject";

import { PROJECT_MODES } from "../constants/projectModes";

const ProjectsPage = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    currentView: "NO_PROJECT_SELECTED",
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        currentView: PROJECT_MODES.ADDING_NEW_PROJECT,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        currentView: PROJECT_MODES.NO_PROJECT_SELECTED,
      };
    });
  }

  function handleAddProject(dataProject) {
    const newProject = {
      ...dataProject,

      id: uuid(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        currentView: PROJECT_MODES.NO_PROJECT_SELECTED,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log("Projects", projectState);

  let content;

  if (projectState.currentView === PROJECT_MODES.ADDING_NEW_PROJECT) {
    content = (
      <NewProgect
        onAddProject={handleAddProject}
        onCancelAddProject={handleCancelAddProject}
      />
    );
  } else if (projectState.currentView === PROJECT_MODES.NO_PROJECT_SELECTED) {
    content = (
      <NoProjectSelected
        onStartAddProject={handleStartAddProject}
        title="No Project Selected"
      />
    );
  }

  return (
    <>
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </>
  );
};

export default ProjectsPage;
