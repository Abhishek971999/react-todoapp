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
        <div className='row justify-content-center mt-4'>
          <div className='col-md-6 col-xs-12'>
            <div className='card card-sec'>
              <div className='card-body'>
                <h5 className='card-title text-center'>ToDo List</h5>
                <AddTodo addTodo={this.addTodo} />
                <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
