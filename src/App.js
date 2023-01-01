import Header from "./AppHeader";
import Input from "./ToDoInput";
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import "./CSS/App.css";

function App() {
  const [todoList, setToDoList] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const localTodoList = localStorage.getItem("todoList");
    if (localTodoList) {
      setToDoList(JSON.parse(localTodoList));
    }
    const localId = localStorage.getItem("id");
    if (localId) {
      setId(parseInt(localId));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("id", id);
  }, [todoList, id]);

  return (
    <div className="AppBox">
      <Header />
      <Input todoList={todoList} setToDoList={setToDoList} />
      <hr className="Line" />
      <ToDoList
        title="Continue"
        todoList={todoList}
        setToDoList={setToDoList}
        checkedList={false}
      />
      <hr className="CenterLine" />
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
