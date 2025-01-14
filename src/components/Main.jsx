import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Main = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Main;
