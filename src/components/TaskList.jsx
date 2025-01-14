import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reducers/todoSlice";
import { MdDeleteOutline } from "react-icons/md";

const TaskList = () => {
  const taskList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeTodo(id));
  }

  return (
    <div className="w-[95%] h-full">
      <ul>
        {taskList.map((task) => {
          return (
            <li
              className="w-full h-[5rem] text-black border-b border-b-black dark:text-white dark:border-b-gray-400"
              key={task.id}
            >
              <div className="flex justify-between items-center h-full px-5">
                <div>{task.text}</div>
                <div>
                  <MdDeleteOutline className="size-6" onClick={()=>handleDelete(task.id)}/>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
