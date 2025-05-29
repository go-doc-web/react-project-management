import { useState } from "react";
import ProjectSidebar from "../componets/ProjectSidebar";
import NoProjectSelected from "../componets/NoProjectSelected";
import NewProgect from "../componets/NewProject";

const ProjectsPage = () => {
  return (
    <>
      <ProjectSidebar />
      {/* <NewProgect /> */}
      <NoProjectSelected title="No Project Selected" />
    </>
  );
};

export default ProjectsPage;
