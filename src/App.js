import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo, enterEditMode, editItem } from "./actions/app";

function App() {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const todosState = useSelector((state) => state.app.todos);
  const dispatch = useDispatch();

  // console.log(todosState);

  const addNew = () => {
    if (inputValue === "") return;
    dispatch(
      addTodo({
        id: Math.random(),
        activity: inputValue,
      })
    );
  };

  const deleteItem = (id) => {
    dispatch(removeTodo(id));
  };

  const toggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const switchEditMode = (id) => {
    dispatch(enterEditMode(id));
  };

  const [input2Value, setInput2Value] = useState("");

  const onInput2Change = e => {
    setInput2Value(e.target.value);
  }

  const editInputValue = (id, updatedUser) => {
    dispatch(enterEditMode(id));
    dispatch(editItem(id, updatedUser));

  }

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={onInputChange} />
      <input type="button" value="add todo" onClick={addNew} />
      <ul>
        {todosState.map((item) => {
          if (item.edited) {
            return (
              <div key={item.id}>
                <input type="text" name="item" value={input2Value} onChange={onInput2Change}/>
                <button onClick={() => editInputValue(item.id, input2Value)}>Edit</button>
              </div>
              );
          } else {
            return (
              <li
                className={item.complete ? "lineThrough" : ""}
                onClick={() => toggle(item.id)}
                onDoubleClick={() => switchEditMode(item.id)}
                key={item.id}
              >
                {item.activity}
                <button onClick={() => deleteItem(item.id)}>x</button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default App;
