  import Header from "./components/Header";
  import Main from "./components/Main";
  import LoginPage from "./components/Login";
  import { ThemeProvider } from "./components/ThemeProvider";
  import { useSelector } from "react-redux";

  const App = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    console.log(isAuth);
    
    return (
      <ThemeProvider>
        <div className="w-screen h-[100vh] bg-[#fbfdfc] dark:bg-[#1f1f1f] overflow-x-hidden">
          <Header />
          {!isAuth && <LoginPage />}
          
          {isAuth && <Main />}
        </div>
      </ThemeProvider>
    );
  };

  export default App;
