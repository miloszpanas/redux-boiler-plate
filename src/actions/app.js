import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from "../types";

const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});

const toggleTodo = id => ({
  type: TOOGLE_TODO,
  payload: id
})


export {
  addTodo,
  removeTodo,
  toggleTodo
};