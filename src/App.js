import Header from "./AppHeader";
import Input from "./ToDoInput";
import ToDoList from "./ToDoList";
import { useState } from "react";
import "./CSS/App.css";

function App() {
  const [todoList, setToDoList] = useState([]);

  return (
    <div className="AppBox">
      <Header />
      <Input todoList={todoList} setToDoList={setToDoList} />
      <ToDoList
        title="Continue"
        todoList={todoList}
        setToDoList={setToDoList}
        checkedList={false}
      />
      <ToDoList
        title="Completed"
        todoList={todoList}
        setToDoList={setToDoList}
        checkedList={true}
      />
    </div>
  );
}

export default App;
