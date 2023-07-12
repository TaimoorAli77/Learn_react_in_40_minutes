import React from "react";

const TodoList = ({todos}) => {
  return (
    <>
      <h1 className="header">Todo List</h1>
      {todos.length === 0 && "No Tasks"}
      {todos.map((todo) => {
        return (
          <ul className="list" key={todo.id}>
            <li>
              <label htmlFor="list">
                <input
                  type="checkbox"
                  className="box-round"
                  checked={todo.completed}
                  //   onChange={e=>toggleTodo(todo.id, e.target.checked)}
                />
                <span>{todo.title}</span>
              </label>
              <button
                className="btn-danger"
                // onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default TodoList;
