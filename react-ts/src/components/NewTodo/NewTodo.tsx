import { useContext, useRef } from "react";
import { TodosContext } from "../../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {

  const ctx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTodo = inputRef.current!.value;
    if (enteredTodo?.trim() === "") return;

    ctx.addTodo(enteredTodo);
    inputRef.current!.focus();    
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">New Todo</label>
      <input ref={inputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
