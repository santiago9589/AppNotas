import AppRouter from "./components/container/AppRouter";
import ContextProvider from "./context/ContextProvider";


function App() {
  return (
    <div>
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
    </div>
  );
}

export default App;
