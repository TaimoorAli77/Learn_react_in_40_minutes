import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);

 function addTodo(title){
    setTodos((currenttodos) => {
      return [
        ...currenttodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },];});};


  function toggleTodo(id , completed){
    setTodos((currentTodos)=>{
      return  currentTodos.map(todo=>{
        if(todo.id===id){
          return {...todo , completed}
        }
        return todo;
      })
    })

  }

  const deleteTodo = (id)=>{
    
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!=id)
    }
    )

  }





  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  );
}
