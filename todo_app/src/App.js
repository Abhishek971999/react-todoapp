import React, { Component } from 'react';
import Todo from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy milk' },
      { id: 2, content: 'Sleeppp' }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className='App'>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
