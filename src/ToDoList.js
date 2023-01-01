import ToDoItem from "./ToDoItem";
import "./CSS/ToDoList.css";

const ToDoList = ({ title, todoList, setToDoList, checkedList }) => {
  return (
    <div className="ListBox">
      <div className="title">🌟{title}</div>
      <hr className="Line" />

      {todoList.map((item) => {
        if (item.deleted) return null;
        if (checkedList !== item.checked) return null;
        return (
          <div>
            <ToDoItem
              key={item.key}
              todoItem={item}
              todoList={todoList}
              setToDoList={setToDoList}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
