import { useState, useEffect } from "react";
import { uuid } from "./util";

const Todo = () => {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(localTodos || []);
  const [todoVal, setTodoVal] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    let todo = { id: uuid(8), content: todoVal };
    setTodos((todos) => [...todos, todo]);
    setTodoVal("");
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <form onSubmit={addTodo}>
                  <input
                    type="text"
                    className="form-control add-task"
                    placeholder="Enter New Task..."
                    value={todoVal}
                    onChange={(e) => setTodoVal(e.target.value)}
                  />
                </form>
                {todos && todos.length === 0 && (
                  <p className="text-primary my-3">NO TASKS TO COMPLETE</p>
                )}
                <div className="todo-list">
                  {todos &&
                    todos.map((todo) => (
                      <div
                        className="todo-item"
                        onClick={() => deleteTodo(todo?.id)}
                        key={todo?.id}
                      >
                        <p>{todo?.content}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
