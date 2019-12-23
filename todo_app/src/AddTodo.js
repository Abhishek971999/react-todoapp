import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <div className='form-group mx-sm-3 mb-2'>
              <input
                className='form-control'
                type='text'
                onChange={this.handleChange}
                value={this.state.content}
                placeholder='Enter the task'
              />
            </div>
          </div>
          <div className='col-4'>
            <button type='submit' className='btn subbutton mb-2'>
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
