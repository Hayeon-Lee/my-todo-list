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
    <li>
      <input
        type="checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckBox}
      />
      <span>{todoItem.input}</span>

      <button type="button">✏️</button>
      <button type="button" onClick={onClickDelBtn}>
        🗑️
      </button>
    </li>
  );
};

export default ToDoItem;
