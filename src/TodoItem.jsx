import React from 'react'

const TodoItem = ({completed , id , title , toggleTodo , deleteTodo}) => {
  return (
    <div>
      <li>
              <label htmlFor="list">
                <input
                  type="checkbox"
                  className="box-round"
                  checked={completed}
                  onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <span>{title}</span>
              </label>
              <button
                className="btn-danger"
                onClick={() => deleteTodo(id)}
              >
                Delete
              </button>
            </li>
    </div>
  )
}

export default TodoItem
