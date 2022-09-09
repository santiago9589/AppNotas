import { useContext } from "react";
import AppRouter from "./components/container/AppRouter";
import { ContextApp } from "./context/context";



function App() {

  const { userRegister, setUserRegister } = useContext(ContextApp)

  return (
    <div className="bg-slate-200 h-screen w-screen flex flex-col items-center flex-wrap overflow-scroll sm:flex-row sm:items-start sm:justify-center">

      <AppRouter />
      {/* {
        !userRegister ?
          (<div className="hidden p-2 h-full sm:w-1/2 sm:bg-[url('https://i.pinimg.com/736x/1e/6c/ae/1e6cae8d53ac733a14560cb87fafd068.jpg')]
        sm:bg-no-repeat sm:bg-cover sm:flex items-end justify-center">
            <p className="sm:text-2xl sm:text-white">APP NOTES 2022</p>
          </div>
          ) : null
      } */}
    </div>
  );
}

export default App;
