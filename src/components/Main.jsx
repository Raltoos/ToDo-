import { useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { addTodoInit } from "../reducers/todoSlice";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(savedTasks);
    
    savedTasks.forEach((task) => dispatch(addTodoInit(task)));
  }, []);

  return (
    <div className="w-full flex flex-col items-center overflow-y-auto">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Main;
