import { useState } from 'react';
import './DropDownList.css';
import { useDispatch } from 'react-redux';
import { showAllTodos, sortTodoByDate, sortTodoByImportance, sortTodoByName } from '../../actions/actions';

function DropDownList() {
  const [dropDownValue, setDropDownValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDropDownValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(dropDownValue === 'name') {
      dispatch(sortTodoByName(dropDownValue));
    } else if(dropDownValue === 'date') {
      dispatch(sortTodoByDate(dropDownValue));
    } else if (dropDownValue === 'importance') {
      dispatch(sortTodoByImportance(dropDownValue))
    } else {
      alert('Choose the option to sort')
    }
  }

  const handleReturnAllTodos = () => {
    dispatch(showAllTodos());
  }

  return (
    <section className='list'>
      <form onSubmit={handleSubmit} className='list__form'>
        <label className='list__title'>
          Sort todos by: 
          <select value={dropDownValue} onChange={handleChange} className='list__items'>
            <option className='list__item'>Choose the option</option>
            <option className='list__item'>name</option>
            <option className='list__item'>date</option>
            <option className='list__item'>importance</option>
          </select>
        </label>
        <button className='list__btn hover'>Sort</button>
      </form>
      <button onClick={handleReturnAllTodos} className='list__btn list__btn_type_all hover'>Show all todos</button>
    </section>
  )
}

export default DropDownList;