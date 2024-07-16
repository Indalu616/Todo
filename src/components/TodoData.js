import React from "react";
function TodoData({ items, changeStyle, deleteItem}) {
  return (
    <ul>
      {items?.map((item) => {
        return (
          <li key={item.id}>
            <div className="todo-item">
              <p onClick={(e) => changeStyle(e.target)}>{item.name}</p>
            </div>
            <div className="action">
              <button onClick={() => deleteItem(item.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoData;
