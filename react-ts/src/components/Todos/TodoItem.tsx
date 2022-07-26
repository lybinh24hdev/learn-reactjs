import React, { useContext } from "react";
import classes from "./TodoItem.module.css";
import Todo from "../../models/todo"
import { TodosContext } from "../../store/todos-context";

const TodoItem: React.FC<{
  item: Todo;
}> = ({ item }) => {

  const ctx = useContext(TodosContext)

  return (
    <li className={classes.item} onClick={() => ctx.removeTodo(item.id)}>
      {item.text}
    </li>
  );
};

export default TodoItem;
