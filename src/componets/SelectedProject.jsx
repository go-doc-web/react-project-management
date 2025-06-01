import Button from "./Button";
import Task from "./Task";

const SelectedProject = ({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formatedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const filtered = tasks.filter((task) => task.projectId === project.id);
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button onClick={onDeleteProject} variant="secondery" text="Delete" />
        </div>
        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task
        filteredTasks={filtered}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
};

export default SelectedProject;
