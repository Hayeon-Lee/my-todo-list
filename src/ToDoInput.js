import { useState } from "react";
import "./CSS/ToDoInput.css";

const Input = ({ todoList, setToDoList }) => {
  const [input, setInput] = useState("");
  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onClick = () => {
    if (input === "") return;

    const newToDoList = todoList.concat({
      id: todoList.length,
      input,
      checked: false,
      deleted: false,
    });
    setToDoList(newToDoList);

    setInput("");
  };

  //useEffect(() => console.log(todoList), [todoList]);

  return (
    <div className="InputForm">
      <input
        type="text"
        placeholder="Do It Your Best"
        value={input}
        onChange={onChange}
        className="InputBox"
      />
      <button type="submit" onClick={onClick} className="InputBtn">
        ✏️
      </button>
    </div>
  );
};

export default Input;
