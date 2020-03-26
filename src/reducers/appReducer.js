import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from "../types/";

const initialState = {
  todos: [
    {
      id: 0,
      activity: "whatever",
      complete: false
    },
    {
      id: 1,
      activity: "whatever2",
      complete: false
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
    default:
      return state;
  }
}
