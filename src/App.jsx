import NewTodoForm from "./NewTodoForm";
// import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);

 function addTodo(title){
  setTodos(newTodo=>{
    return [...newTodo , {
      id:crypto.randomUUID(),
      title,
      completed:false
    }]
  })
 }


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
      <NewTodoForm      addTodo={addTodo} />

      <TodoList  todos={todos}/>
    </>
  );
}
