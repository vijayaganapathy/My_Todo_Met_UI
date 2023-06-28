import React from "react";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";
function App() {
  return (
    <div className="App"><h1>...My Todo List...</h1>
    <AddTodo />
    <TodoLists />
    </div>
  );
}

export default App;
