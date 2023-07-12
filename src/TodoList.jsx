import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos ,deleteTodo , toggleTodo }) => {
  return (
    <>
      {todos.length === 0 && "No Tasks"}
      {todos.map((todo) => {
        return (
          <ul className="list"  key={todo.id}>
            <TodoItem  {...todo}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          </ul>
        );
      })}
    </>
  );
};

export default TodoList;
