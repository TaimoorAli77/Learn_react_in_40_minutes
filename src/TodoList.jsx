import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos ,deleteTodo , toggleTodo }) => {
  return (
    <>
      {todos.length === 0 && "No Tasks"}
      {todos.map((todo) => {
        return (
          <ul className="list">
            <TodoItem  {...todo}  key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          </ul>
        );
      })}
    </>
  );
};

export default TodoList;
