const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (JSON.parse(localStorage.getItem("Todos"))) {
        state = Array.from(JSON.parse(localStorage.getItem("Todos")));
        state = [...state, action.item];
        localStorage.setItem("Todos", JSON.stringify(state));
      } else {
        state = [...state, action.item];
        localStorage.setItem("Todos", JSON.stringify(state));
      }
      return state;
    case "remove":
      return state;
    default:
      return state;
  }
};

export default todoReducer;
