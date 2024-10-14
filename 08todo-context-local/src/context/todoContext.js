import { createContext, useContext } from "react";

export const TodoContext = createContext([
  {
    todos: {
      id: 0,
      title: "",
      completed: false,
    },
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    clearTodos: () => {},
  },
]);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
