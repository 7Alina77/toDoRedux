import DropDownList from '../DropDownList/DropDownList';
import SearchForm from '../SearchForm/SearchForm';
import './SearchAndSort';

function SearchAndSort() {
  return (
    <section className='search-and-sort'>
      <SearchForm />
      <DropDownList />
    </section>
  )
}

export default SearchAndSort;