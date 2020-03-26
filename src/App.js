import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./actions/app";

function App() {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const todosState = useSelector((state) => state.app.todos);
  const dispatch = useDispatch();

  console.log(todosState);

  const addNew = () => {
    if (inputValue === "") return;
    dispatch(addTodo({
      id: Math.random(),
      activity: inputValue
    }));
  }

  const deleteItem = id => {
    dispatch(removeTodo(id));
  }

  const toggle = id => {
    dispatch(toggleTodo(id))
  }

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={onInputChange}/>
      <input type="button" value="add todo" onClick={addNew}/>
      <ul>
        {todosState.map(item => (
          <li className={item.complete ? "lineThrough" : ""} onClick={() => toggle(item.id)} key={item.id}>{item.activity}<button onClick={() => deleteItem(item.id)}>x</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;