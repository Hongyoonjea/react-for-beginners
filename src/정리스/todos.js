import { useState } from "react";

const App = () =>{
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) =>{
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 현재의 투두를 받아서 새로운 어래이로 리턴하는것
    setToDo("");
  };
  return(
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ui>     
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ui>
    </div>
  )
}

export default App;