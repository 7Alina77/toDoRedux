import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList({todos}) {
  if(todos.length) {
    return (
      <ul className='todos'>
        {todos.map((todo) => {
          return (
            <Todo 
            key={todo.id}
            todo={todo}
          />)
        })}
      </ul>
    )
  }
}

export default TodoList;