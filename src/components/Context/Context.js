import React, { createContext, useReducer } from "react";
import todoReducer from "./TodoReducer";
export const todoContext = createContext();
function Context({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {children}
    </todoContext.Provider>
  );
}

export default Context;
