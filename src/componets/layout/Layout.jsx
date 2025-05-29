import React from "react";
import ProjectSidebar from "../ProjectSidebar";
import NewProject from "../NewProject";
import NoProjectSelected from "../NoProjectSelected";

const Layout = () => {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject />
      <NoProjectSelected />
    </main>
  );
};

export default Layout;
