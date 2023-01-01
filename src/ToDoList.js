import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = ({ title, todoList, setToDoList, checkedList }) => {
  return (
    <div className="ListBox">
      <h3 className="title">{title}</h3>
      {todoList.map((item) => {
        if (item.deleted) return null;
        if (checkedList !== item.checked) return null;
        return (
          <ToDoItem
            key={item.key}
            todoItem={item}
            todoList={todoList}
            setToDoList={setToDoList}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
