import { useEffect, useState } from "react";

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

  useEffect(() => console.log(todoList), [todoList]);

  return (
    <div>
      <input
        type="text"
        placeholder="Do It Your Best"
        value={input}
        onChange={onChange}
      />
      <button type="submit" onClick={onClick}>
        ✅
      </button>
      <hr />
    </div>
  );
};

export default Input;
