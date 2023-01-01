import "./ToDoItem.css";

const ToDoItem = ({ todoItem, todoList, setToDoList }) => {
  const onChangeCheckBox = () => {
    const newToDoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setToDoList(newToDoList);
  };

  const onClickDelBtn = () => {
    const newToDoList = todoList.map((item) => ({
      ...item,
      deleted: item.id === todoItem.id ? true : item.deleted,
    }));
    setToDoList(newToDoList);
  };

  return (
    <div className="ToDoItemBox">
      <input
        type="checkbox"
        className="ToDOItemCheckBox"
        checked={todoItem.checked}
        onChange={onChangeCheckBox}
      />
      <span className="ToDoItemName">{todoItem.input}</span>

      <button type="button" className="ToDoItemDelBtn" onClick={onClickDelBtn}>
        ✖️
      </button>
    </div>
  );
};

export default ToDoItem;
