import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../reducers/themeSlice";

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="w-full h-[4rem] px-5 flex items-center justify-between bg-gray-200 dark:bg-black">
      <div className="text-3xl dark:text-white">ToDo++</div>
      <div>
        <button className={`p-2 border border-black rounded-lg ${theme == 'dark' && 'bg-white text-black'}`} onClick={() => dispatch(toggleTheme())}>Toggle Mode</button>
      </div>
    </div>
  );
};

export default Header;
