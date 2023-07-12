import NewTodoForm from "./NewTodoForm";
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
      {todos.length===0 && "No Tasks"}
      {todos.map((todo) => {
        return (
          <ul className="list" key={todo.id}>
            <li>
              <label htmlFor="list">
                <input
                  type="checkbox"
                  className="box-round"
                  checked={todo.completed}
                  onChange={e=>toggleTodo(todo.id, e.target.checked)}
                />
               <span>
                {todo.title}
                </span> 
              </label>
              <button className="btn-danger" onClick={()=>deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
}
