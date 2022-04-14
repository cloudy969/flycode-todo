import logo from './logo.svg';
import './App.css';
import {TodoListContainer} from './Containers/TodoListContainer';


function App() {
  return (
    <div className='container'>
      <h1 className='appTitle'>Todo list</h1>
      <TodoListContainer />
    </div>
  );
}

export default App;
