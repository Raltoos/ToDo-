import { useSelector } from "react-redux";
import TaskComponent from "./TaskComponent";
import TaskModal from "./TaskModal";

const TaskList = () => {
  const taskList = useSelector((state) => state.todo.todos);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  const activeTasks = taskList.filter((task) => !task.completed);
  const completedTasks = taskList.filter((task) => task.completed);

  return (
    <div className="w-[95%] h-full mt-5">
      <div className="space-y-4">
        <ul className="space-y-3">
          {activeTasks.map((task) => (
            <TaskComponent task={task} key={task.id} />
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Completed Tasks
        </h3>
        <ul className="space-y-3">
          {completedTasks.map((task) => (
            <TaskComponent task={task} key={task.id} />
          ))}
        </ul>
      </div>

      {isModalOpen && <TaskModal />}
    </div>
  );
};

export default TaskList;