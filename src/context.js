import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState();
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }, []);

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, status]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== '') {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: new Date().getTime().toString(),
        },
      ]);
    }

    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        setInputText,
        inputHandler,
        todos,
        setTodos,
        submitHandler,
        inputText,
        statusHandler,
        status,
        filteredTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
