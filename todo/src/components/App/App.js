import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="App">
      <Header/>
      <Main todos={todos}/>
    </div>
  );
}

export default App;
