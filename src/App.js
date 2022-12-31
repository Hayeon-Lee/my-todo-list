import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi:)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>HELLO</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

//가끔은특정코드 실행 안시키고 싶어요: useEffect
//컴포넌트가 삭제될 때 뭔가를 보여주고 싶다면, effect function 이 새로운 것을 리턴해야 함
