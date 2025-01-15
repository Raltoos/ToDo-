import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../reducers/modalSlice";
import { removeTodo, toggleComplete } from "../reducers/todoSlice";
import { useState } from "react";
import { X, Calendar, Bell, RepeatIcon, Plus } from "lucide-react";
import Calendar1 from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TaskModal = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.modal.selectedTask);
  const [showCalendar, setShowCalendar] = useState(false);
  const [completed, setCompleted] = useState(task.completed);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center z-50">
      <div
        className="bg-[#fbfdfc] dark:bg-[#2c2c2c] w-full sm:max-w-md sm:rounded-lg shadow-xl 
                   min-h-[50vh] sm:min-h-0 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => {
                dispatch(toggleComplete(task.id));
                setCompleted((prev) => !prev);
              }}
              className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600
                       checked:bg-blue-500 checked:border-blue-500 transition-colors"
            />
            <input
              type="text"
              value={task.text}
              disabled
              className="text-lg font-normal text-gray-900 dark:text-white bg-transparent 
                       border-none focus:outline-none focus:ring-0 w-full"
            />
          </div>
          <button
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 
                     dark:hover:text-gray-300 transition-colors"
            onClick={() => dispatch(closeModal())}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <button
            onClick={() => {}}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 
                     dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                      transition-colors text-left border-b border-b-gray-400"
          >
            <Plus className="w-5 h-5" />
            Add Step
          </button>

          <button
            onClick={() => {}}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 
                     dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                     rounded-md transition-colors text-left border-b border-b-gray-400"
          >
            <Bell className="w-5 h-5" />
            Set Reminder
          </button>

          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 
                     dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                     rounded-md transition-colors text-left border-b border-b-gray-400"
          >
            <Calendar className="w-5 h-5" />
            Add Due Date
          </button>

          {showCalendar && (
            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <Calendar1 />
              </div>
            </div>
          )}

          <button
            onClick={() => {}}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 
                     dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                     rounded-md transition-colors text-left border-b border-b-gray-400"
          >
            <RepeatIcon className="w-5 h-5" />
            Repeat
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Created Today
          </span>
          <button
            onClick={() => {
              dispatch(removeTodo(task.id));
              dispatch(closeModal());
            }}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 
                     dark:hover:text-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
