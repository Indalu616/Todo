import React, { useContext } from "react";
import "./Todo.css";
import Form from "./Form";
import { todoContext } from "./Context/Context";
import NoData from "./NoData";
import TodoData from "./TodoData";

function Todo() {
  const { todos } = useContext(todoContext);
  console.log(todos);
  let items = JSON.parse(localStorage.getItem("Todos"));

  function deleteItem(id) {
    const itemFound = items.find((item) => item.id === id);
    if (itemFound) {
      console.log(itemFound);
      const Filtereditems = items.filter((item) => item.id !== id);
      localStorage.removeItem("Todos");
      localStorage.setItem("Todos", JSON.stringify(Filtereditems));
      window.location.reload();
    }
  }
  function changeStyle(item) {
    item.classList.toggle("underLine");
  }


  return (
    <div className="todos">
      <div className="container">
        <div className="todo-container">
          <h2>What are you going to do Today?</h2>
          <hr></hr>
          <Form myTodo/>
          {items.length ? (
            <TodoData
              items={items}
              deleteItem={deleteItem}
              changeStyle={changeStyle}
            />
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
