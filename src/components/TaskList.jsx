import { useSelector } from "react-redux";
import TaskComponent from "./TaskComponent";
import TaskModal from "./TaskModal";
import { useState } from "react";

const TaskList = () => {
  const taskList = useSelector((state) => state.todo.todos);
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const [priorityFilter, setPriorityFilter] = useState("");

  const priorityOrder = { high: 1, medium: 2, low: 3 };

  const sortByPriority = (tasks) => {
    return tasks.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  };

  const activeTasks = sortByPriority(
    taskList.filter((task) => !task.completed && (!priorityFilter || task.priority === priorityFilter))
  );
  const completedTasks = sortByPriority(
    taskList.filter((task) => task.completed && (!priorityFilter || task.priority === priorityFilter))
  );

  return (
    <div className="w-[95%] h-full mt-5">
      <div className="mb-4">
        <label
          htmlFor="priority-filter"
          className="justify-self-end mt-5 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Filter by Priority:
        </label>
        <select
          id="priority-filter"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="justify-self-end block md:w-[200px] w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-gray-200"
        >
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="space-y-4">
        <h3 className=" mt-5 text-lg font-semibold text-gray-900 dark:text-white">
          Active Tasks
        </h3>
        <ul className="space-y-3">
          {activeTasks.map((task) => (
            <TaskComponent task={task} key={task.id} />
          ))}
          {activeTasks.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No active tasks found.
            </p>
          )}
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
          {completedTasks.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No completed tasks found.
            </p>
          )}
        </ul>
      </div>

      {/* Task Modal */}
      {isModalOpen && <TaskModal />}
    </div>
  );
};

export default TaskList;
