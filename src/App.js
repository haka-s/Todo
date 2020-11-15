import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
//import { useGlobalContext } from './context';

function App({ inputText }) {
  return (
    <div className='App'>
      <header>
        <h1>Todo app</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
