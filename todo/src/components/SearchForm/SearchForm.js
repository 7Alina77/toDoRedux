import { useState } from 'react';
import '../SearchForm/SearchForm.css';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../actions/actions';

function SearchForm() {
  const [isOpenInputToFindTask, setIsOpenInputToFindTask] = useState(false);
  const [formValue, setFormValue] = useState({search: ''});
  const dispatch = useDispatch();

  const handleOpenInputToFindTask = () => {
    setIsOpenInputToFindTask(!isOpenInputToFindTask);
  }

  const handleChangeSearch = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
    dispatch(searchTodo(value));
  }

  return (
    <section className='search-form'>
      <button onClick={handleOpenInputToFindTask} className='search-form__button hover'>Want to find the task?</button>
      {
        isOpenInputToFindTask &&
        <form className='search-form__form'>
          <input className='search-form__input'
          type='text'
          onChange={handleChangeSearch}
          name='search'
          form='search' 
          placeholder='Type to find'
          ></input>
        </form>
      }
    </section>
  )
}

export default SearchForm;