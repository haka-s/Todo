import React from 'react';
import { useGlobalContext } from './../context';
import Todo from './Todo';

export default function TodoList() {
  const { filteredTodos } = useGlobalContext();
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo todo={todo} text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
