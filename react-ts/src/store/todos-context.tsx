import React from "react";
import { createContext, useState } from "react";
import Todo from "../models/todo";

type todosType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<todosType>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {    
    const newTodo = new Todo(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodoHandler = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const value: todosType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={value}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
