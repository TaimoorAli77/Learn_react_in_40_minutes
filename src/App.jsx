import "./styles.css";
import { useState } from "react";
export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((ntodos) => {
      return [
        ...ntodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });

    setNewItem("");
  };


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
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="new-item">New Item</label>
          <input
            className="input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
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
