import { useState } from 'react';
import { useDispatch } from "react-redux";
import './TodoForm.css';
import TodoList from '../TodoList/TodoList';
import { addTodo } from '../../actions/actions';
import question from '../../img/faq.png';
import SearchAndSort from '../SearchAndSort/SearchAndSort';

function TodoForm({todos}) {
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();

  function formSubmit(e) {
    e.preventDefault();
    setFormValue({});
  }

  const handleChangeSearch = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  return (
    <>
      <form className='form' onSubmit={formSubmit}>
        <input placeholder='Type to add the task'
        type='text' 
        className='form__input'
        value={formValue.addTodo ?? ''}
        name='addTodo'
        onChange={handleChangeSearch} 
        ></input>
        <button onClick={() => dispatch(addTodo(formValue))} className='form__btn hover' type="submit">Add Todo</button>
        <img
        title='Чтобы изменить задачу: 1. Кликни на текст задачи
        2. Введи новый текст
        3. Нажми кнопку "Save edited"'
        className='form__info hover' alt='иконка вопроса' src={question}/>
      </form>
      {todos.length !==0 && <SearchAndSort />}
      <TodoList todos={todos}/>
    </>
  )
}

export default TodoForm;