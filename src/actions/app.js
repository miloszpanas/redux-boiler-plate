import {
  ADD_TODO,
  REMOVE_TODO,
  TOOGLE_TODO,
  ENTER_EDIT_MODE,
  EDIT_ITEM,
} from "../types";

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

const toggleTodo = (id) => ({
  type: TOOGLE_TODO,
  payload: id,
});

const enterEditMode = (id) => ({
  type: ENTER_EDIT_MODE,
  payload: {
    id,
  },
});

const editItem = (id, updatedItem) => ({
  type: EDIT_ITEM,
  payload: {
    id,
    updatedItem,
  },
});

export { addTodo, removeTodo, toggleTodo, enterEditMode, editItem };
