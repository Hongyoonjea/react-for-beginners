import Button from "../Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
// useEffect 두개의 인자를 가지는 함수/ 첫번째 인자는 우리가 딱 한번만 실행하고픈 코드/ 두번째 인자는 매직 dependency(지켜보는것)

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run only once");
   }, []);
   useEffect(() => {
    console.log("i run when 'keyword' change ");
   }, [keyword]);
  //  keyword가 변화할때 코드를 실행할거/ 특정한 키워드가 업데이트 될때만 실행됨
  // useEffect는 컴포넌트가 처음 랜더될때 실행되고 다시는 실행되지 않는 함수를 넣어줄꺼
  // 한개의 키워드만 지켜보고 실행
  useEffect(() => {
    console.log("i run when 'counter' change");
   }, [counter]);
   useEffect(() => {
    console.log("i run when 'keyword' change && i run when 'counter' change");
   }, [keyword, counter]);
  //  코드를 언제 실행지 선택하는 useEffect/ react가 동작하는 관점에서 방어막같은거
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here... " 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
