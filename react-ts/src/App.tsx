import "./App.css";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import TodosProvider from "./store/todos-context";

function App() {


  return (
    <TodosProvider>
      <NewTodo />
      <Todos />
    </TodosProvider>
  );
}

export default App;
