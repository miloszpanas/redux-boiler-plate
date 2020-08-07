import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO, ENTER_EDIT_MODE, EDIT_ITEM } from "../types/";

const initialState = {
  todos: [
    {
      id: 0,
      activity: "whatever",
      complete: false,
      edited: false,
    },
    {
      id: 1,
      activity: "whatever2",
      complete: false,
      edited: false
    }
  ]
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case TOOGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id !== action.payload
            ? todo
            : {...todo, complete: !todo.complete }
        )
      };
    case ENTER_EDIT_MODE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return (
            todo.id !== action.payload.id ? todo : {
              ...todo, edited: !todo.edited
            }
          )
        })
      }
    case EDIT_ITEM:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return (
            todo.id !== action.payload.id ? todo : {
              ...todo, activity: action.payload.updatedItem
            }
          )
        })
      }
    default:
      return state;
  }
}
