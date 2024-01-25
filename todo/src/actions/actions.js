import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO, SEARCH_TODO, SORT_BY_DATE, MAKE_TODO_IMPORTANT, SORT_BY_NAME, SORT_BY_IMPORTANCE, SHOW_ALL_TODOS } from "./actionTypes"


export const addTodo = text => ({
  type: ADD_TODO,
  payload: text,
})

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId, 
})

export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId,
})

export const editTodo = ( todoId, text ) => ({
  type: EDIT_TODO,
  payload: {todoId, text},
})

export const searchTodo = (text) => ({
  type: SEARCH_TODO,
  payload: text,
});

export const makeTodoImportant = (todoId) => ({
  type: MAKE_TODO_IMPORTANT,
  payload: todoId,
})

export const sortTodoByDate = (text) => ({
  type: SORT_BY_DATE,
  payload: text,
})

export const sortTodoByName = (text) => ({
  type: SORT_BY_NAME,
  payload: text,
})

export const sortTodoByImportance = (text) => ({
  type: SORT_BY_IMPORTANCE,
  payload: text,
})

export const showAllTodos = () => ({
  type: SHOW_ALL_TODOS,
})