import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducers/authSlice";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [{ email, password }, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(loginSuccess({ user: email }));
    }, 1000);
  };

  const inputClasses = "appearance-none w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200";

  return (
    <div className="mt-20 flex items-center justify-center bg-gray-50px-4 sm:px-6 lg:px-8 m-5">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Please sign in to your account</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {[
              { id: "email", label: "Email address", type: "email", value: email, icon: Mail },
              { id: "password", label: "Password", type: showPassword ? "text" : "password", value: password, icon: Lock }
            ].map(({ id, label, type, value, icon: Icon }) => (
              <div key={id}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {label}
                </label>
                <div className="relative">
                  <Icon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    id={id}
                    required
                    type={type}
                    value={value}
                    className={inputClasses}
                    placeholder={`Enter your ${id}`}
                    onChange={(e) => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
                  />
                  {id === "password" && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" /> : <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            {loading ? (
              <svg className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            ) : (
              <button type="submit" className="w-full py-2 px-4 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                Sign in
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;