// Cleanup function 별로 중요 ㄴㄴ
   // return () => console.log("destroyed :(" );
    // clean up fuction //컴포넌트가 파괴될때도 함수를 실행하고싶으면 hyFn이 byFn을 리턴함
import { useState, useEffect } from "react";

const Hello = () =>{
  // const byFn = () =>{
  //   console.log("bye :(");
  // }
  // const hiFn = () =>{
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hiFn,[]);
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return<h1>Hello</h1>
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
