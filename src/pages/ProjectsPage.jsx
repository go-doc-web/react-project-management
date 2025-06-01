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
    tasks: [],
  });

  function handleAddTask(taskText) {
    const newTask = {
      text: taskText,
      taskId: uuid(),
      projectId: projectState.selectedProjectId,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

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

  function handleDeleteSelectedProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        currentView: PROJECT_MODES.NO_PROJECT_SELECTED,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
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
    content = (
      <SelectedProject
        onDeleteProject={handleDeleteSelectedProject}
        project={selectedProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  } else {
    content = <p>Nothing ...</p>;
  }

  return (
    <>
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </>
  );
};

export default ProjectsPage;
