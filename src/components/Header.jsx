import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../reducers/themeSlice";
import { logout } from "../reducers/authSlice";
import { Sun, Moon, LogOut } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="w-full h-16 px-5 flex items-center justify-between bg-white dark:bg-transparent shadow-sm transition-colors duration-200">
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        ToDo++
      </div>
      
      <div className="flex items-center gap-4">
        {isAuth && (
          <button 
            onClick={() => dispatch(logout())}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        )}
        
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;