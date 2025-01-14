import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-screen h-[100vh] bg-[#fbfdfc] dark:bg-[#1f1f1f] overflow-x-hidden">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;
