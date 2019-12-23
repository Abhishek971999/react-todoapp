import React from 'react';

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <div>
            <button
              className='btn delbtn mb-1 mr-3'
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              X
            </button>
            <span>{todo.content}</span>
          </div>
        </div>
      );
    })
  ) : (
    <h3>No todos to complete</h3>
  );

  return <div>{todoList}</div>;
};

export default Todo;
