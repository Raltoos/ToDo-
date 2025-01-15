/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../reducers/todoSlice";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { openModal } from "../reducers/modalSlice";

const TaskComponent = ({ task }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(task.completed ? true : false);

  function handleDelete(id) {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const updatedTasks = existingTasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    
    dispatch(removeTodo(id));
  }
  return (
    <li
      className="w-full h-[5rem] text-black border-b border-b-black dark:text-white dark:border-b-gray-400"
    >
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
          <p className={`${completed ? "line-through" : ""} w-[100%] cursor-pointer`} onClick={() => dispatch(openModal(task))}>{task.text}</p>
        </div>
        <div>
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
