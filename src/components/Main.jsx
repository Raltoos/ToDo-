import { useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { addTodo } from "../reducers/todoSlice";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((task) => dispatch(addTodo(task)));
  }, []);

  return (
    <div className="w-full flex flex-col items-center overflow-y-auto">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Main;
