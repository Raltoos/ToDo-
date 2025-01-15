/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete, updatePriority } from "../reducers/todoSlice";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { openModal } from "../reducers/modalSlice";
import { Flag } from "lucide-react";

const TaskComponent = ({ task }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(task.completed ? true : false);
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);

  function handleDelete(id) {
    dispatch(removeTodo(id));
  }

  const priorityColors = {
    high: "text-red-600 dark:text-red-400",
    medium: "text-yellow-600 dark:text-yellow-400",
    low: "text-green-600 dark:text-green-400"
  };

  function handlePriorityChange(priority) {
    dispatch(updatePriority({ id: task.id, priority }));
    setShowPriorityMenu(false);
  }

  return (
    <li className="w-full h-[5rem] text-black border-b border-b-black dark:text-white dark:border-b-gray-400">
      <div className="flex justify-between items-center h-full px-5">
        <div className="h-full flex items-center gap-5">
          <input
            type="checkbox"
            className="size-4"
            checked={completed}
            onChange={() => {
              setCompleted((prev) => !prev);
              dispatch(toggleComplete(task.id));
            }}
          />
          <p 
            className={`${completed ? "line-through" : ""} w-[100%] cursor-pointer`}
            onClick={() => dispatch(openModal(task))}
          >
            {task.text}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setShowPriorityMenu(!showPriorityMenu)}
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Flag className={`size-5 ${priorityColors[task.priority || 'medium']}`} />
            </button>
            
            {showPriorityMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                {['high', 'medium', 'low'].map((priority) => (
                  <button
                    key={priority}
                    onClick={() => handlePriorityChange(priority)}
                    className={`w-full px-4 py-2 text-left capitalize hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      task.priority === priority ? 'bg-gray-50 dark:bg-gray-700' : ''
                    } ${priorityColors[priority]} first:rounded-t-lg last:rounded-b-lg`}
                  >
                    {priority}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <MdDeleteOutline
            className="size-6 cursor-pointer"
            onClick={() => handleDelete(task.id)}
          />
        </div>
      </div>
    </li>
  );
};

export default TaskComponent;