import React from 'react';

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <h3
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </h3>
        </div>
      );
    })
  ) : (
    <p>no toodos</p>
  );

  return <div>{todoList}</div>;
};

export default Todo;
