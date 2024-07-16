import React, { useContext, useRef, useState } from "react";
import { todoContext } from "./Context/Context";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const inputRef = useRef();
  const [todo, setTodo] = useState();
  const { dispatch } = useContext(todoContext);
  console.log(todo);
  console.log(uuidv4());
  function handleTask() {
    dispatch({
      type: "add",
      item: { name: todo, id: uuidv4(), isComplete: false },
    });
    inputRef.current.value = "";
  }

  // window.addEventListener("keydown", (e) => {
  //   e.preventDefault()
  //   if (e.keyCode === 13) {
  //     handleTask();
  //   }
  // });

  return (
    <div className="add">
      <input
        type="text"
        name="todo"
        placeholder="Add tasks."
        // value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={() => handleTask()}>Add +</button>
    </div>
  );
}

export default Form;
