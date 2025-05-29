import { useState } from "react";
import ProjectSidebar from "../componets/ProjectSidebar";
import NoProjectSelected from "../componets/NoProjectSelected";
import NewProgect from "../componets/NewProject";

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
        currentView: "ADDING_NEW_PROJECT",
      };
    });
  }
  let content;

  if (projectState.currentView === "ADDING_NEW_PROJECT") {
    content = <NewProgect />;
  } else if (projectState.currentView === "NO_PROJECT_SELECTED") {
    content = (
      <NoProjectSelected
        onStartAddProject={handleStartAddProject}
        title="No Project Selected"
      />
    );
  }

  return (
    <>
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </>
  );
};

export default ProjectsPage;
