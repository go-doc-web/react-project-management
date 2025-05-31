import { useState } from "react";
import uuid from "react-uuid";
import ProjectSidebar from "../componets/ProjectSidebar";
import NoProjectSelected from "../componets/NoProjectSelected";
import SelectedProject from "../componets/SelectedProject";
import NewProject from "../componets/NewProject";

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
        selectedProjectId: undefined,
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

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
        currentView: PROJECT_MODES.PROJECT_SELECTED,
      };
    });
  }

  let content;

  if (projectState.currentView === PROJECT_MODES.ADDING_NEW_PROJECT) {
    content = (
      <NewProject
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
  } else if (projectState.currentView === PROJECT_MODES.PROJECT_SELECTED) {
    const selectedProject = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = <SelectedProject project={selectedProject} />;
  } else {
    content = <p>Nothing ...</p>;
  }

  return (
    <>
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </>
  );
};

export default ProjectsPage;
