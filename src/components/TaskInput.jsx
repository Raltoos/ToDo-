import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const [task, setTask] = useState("");

  function handleTaskCreation() {
    dispatch(addTodo(task));
    setTask("");
  }

  return (
    <div
      className={`w-[95%] h-[10rem] mt-5 p-2 ${
        theme == "light" &&
        "bg-gradient-to-b from-[#F3FAF4] via-[#EAF2EB] to-[#E5EEE6]"
      }  shadow-md dark:bg-[#2F3630] flex flex-col items-center rounded-sm`}
    >
      <input
        type="text"
        placeholder="Add a Task"
        className="placeholder:text-[#2F3630] bg-transparent dark:placeholder:text-white w-full p-3 h-[75%] focus:outline-none dark:text-white"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <div className="w-full h-[25%] flex justify-between items-center">
        <div>
          <button>X</button>
          <button>Y</button>
          <button>Z</button>
        </div>
        <div>
          <button
            className="bg-[#c3d5c4] p-2 text-[#2D6930] hover:bg-[#c2dac3] rounded-md text-sm dark:bg-[#4a5e44] dark:text-[#e2f0d4] dark:hover:bg-[#3f563f]"
            onClick={handleTaskCreation}
          >
            ADD TASK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
