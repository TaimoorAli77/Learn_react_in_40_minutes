import React,{useState} from 'react';

const NewTodoForm = ({onSubmit}) => {
  const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(newItem === "" ) return 
         
        onSubmit(newItem)  
        
    
        setNewItem("");
      };
  return (
    <div>
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
    </div>
  );
}

export default NewTodoForm;
