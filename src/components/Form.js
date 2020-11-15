import React from 'react';
import { useGlobalContext } from './../context';

export default function Form() {
  const {
    inputHandler,
    submitHandler,
    inputText,
    statusHandler,
  } = useGlobalContext();
  return (
    <form>
      <input
        value={inputText}
        onChange={inputHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitHandler} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
