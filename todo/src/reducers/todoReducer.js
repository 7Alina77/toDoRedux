import { ADD_TODO, EDIT_TODO, MAKE_TODO_IMPORTANT, REMOVE_TODO, SEARCH_TODO, SHOW_ALL_TODOS, SORT_BY_DATE, SORT_BY_IMPORTANCE, SORT_BY_NAME, TOGGLE_TODO } from "../actions/actionTypes";

let todoId = 0;

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: ++todoId,
          text: action.payload.addTodo,
          isDone: false,
          createdAt: new Date(),
          isDisplayed: true,
          isImportant: false,
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );

    case EDIT_TODO:
      return state.map((todo) => 
        todo.id === action.payload.todoId
          ? { ...todo, text: action.payload.text}
          : todo
      );
    
    case REMOVE_TODO: 
      return state.filter(task => action.payload !== task.id);

    case SEARCH_TODO:
      return state.map((todo) => 
        !todo.text.includes(action.payload) 
        ? {...todo, isDisplayed: false}
        : {...todo, isDisplayed: true}
      );
    
    case MAKE_TODO_IMPORTANT:
      return state.map((todo) => 
        todo.id === action.payload
          ? {...todo, isImportant: !todo.isImportant}
          : todo
      );
    
    case SORT_BY_IMPORTANCE:
      return state.map((todo) => 
        todo.isImportant === true
          ? {...todo, isDisplayed: true}
          : {...todo, isDisplayed: false}
      );

    case SHOW_ALL_TODOS:
      return state.map((todo) => 
        todo.isDisplayed === false 
          ? {...todo, isDisplayed: true}
          : todo
      );

    case SORT_BY_DATE:
      return [...state.sort(function(a,b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      })];

    case SORT_BY_NAME:
      return [...state.sort(function(a,b) {
        if(a.text > b.text) {
          return 1
        } 
        if (a.text < b.text) {
          return -1
        } 
        return 0;
      })];
            
    default:
      return state;
  }
};

export default todoReducer;