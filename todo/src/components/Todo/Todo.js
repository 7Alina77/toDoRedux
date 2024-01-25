import { useDispatch } from 'react-redux';
import './Todo.css';
import { editTodo, makeTodoImportant, removeTodo, toggleTodo } from '../../actions/actions';
import { useState } from 'react';

function Todo({todo}) {
  const {id, text, isDone, isDisplayed, isImportant} = todo;
  const [formValue, setFormValue] = useState(text);
  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    const value = e.target.value;
    setFormValue(value);
  }
  
  const handleSaveEdited = (e) => {
    dispatch(editTodo(id, formValue))
  }
  
  return (
    <>
    {isDisplayed &&
    <li key={id} className='todos__item'>
      <div className='todos__box'>
        <input className='hover' onChange={() =>dispatch(toggleTodo(id))} checked={isDone}  type="checkbox" id="isDone" name="toggleTodo" />
        {/* <label onClick={() =>console.log(text)} className={`todos__lable ${isDone === true && `todos__item_type_done`}`} htmlFor="toggleTodo">{text}</label> */}
        <input
        className={`todos__lable ${isDone === true && `todos__item_type_done`}`}
        onChange={handleChangeSearch} 
        value={formValue}></input>
      </div>
      <div className='todos__buttons'>
        <button onClick={() => dispatch(makeTodoImportant(id))} className={`todos__btn ${isImportant === true && `todos__btn_type_important`} hover`}>Urgently</button>
        <button onClick={handleSaveEdited} className='todos__btn todos__btn_type_edit hover'>Save edited</button>
        <button onClick={() => dispatch(removeTodo(id))} className='todos__btn todos__btn_type_delete hover'>Delete</button>
      </div>
    </li>
    }
    </>
  )
}

export default Todo;