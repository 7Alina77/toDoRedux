import TodoForm from '../TodoForm/TodoForm';
import './Main.css';

function Main({todos}) {
  return (
    <main className='main'>
      <TodoForm todos={todos}/>
    </main>
  )
}

export default Main;