import ToDoItem from "./ToDoItem";

const ToDoList = ({ title, todoList, setToDoList, checkedList }) => {
  return (
    <div>
      <p>{title}</p>
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
