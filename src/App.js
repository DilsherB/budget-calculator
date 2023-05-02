import React, { useState, useEffect } from 'react';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const tasksInLocalStorage = JSON.parse(localStorage.getItem("tasksInLocalStorage"))
    if(tasksInLocalStorage) {
      setItems(tasksInLocalStorage)
    }
  },[]);

  const addItem = (e) => {
    e.preventDefault();
    if(!newItem) {alert('please write to add an item'); return}
    const item = {
      id: items.length + 1,
      text: newItem,
      status: false
    }
    setItems([...items, item])
    localStorage.setItem("tasksInLocalStorage", JSON.stringify([...items, item]))
    setNewItem("")
  }
  
const clearAll = () => {
  const empty = [];
  setItems(empty);
  localStorage.setItem("tasksInLocalStorage", JSON.stringify(empty))
}

  return (
    <div className="container border border-primary rounded text-white"
    style={{background: `url(https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg)`,
            backgroundSize: "cover"
  }}
    >
      {/* header */}
      <div className='header'>
      <h1>Todo App</h1>
      <h3>using React Hooks & Local Storage.</h3>
      {/* form */}
      <form>
        <input style={{border: "1px solid #157DEC"}}
          type="text" 
          value={newItem} 
          onChange={e=>setNewItem(e.target.value)} 
          autoFocus 
          placeholder="What needs to be done?"
          className='btn'
        />
        <button 
          type='submit' 
          onClick={addItem}
          className='btn btn-primary material-icons'
          >
            add
          </button>
      </form>
      <div>You have {
        items.length>1?` ${items.length} tasks`
        : items.length === 1 ? " 1 task" : " 0 tasks to show"
      }</div>
      </div>
      {/* list of items */}
      <ul>
        {items.map(item=> {
          return(
            <li 
            key={item.id} 
            style={{display: "flex", 
                    width: "35%", 
                    margin: "0 auto", 
                    gap: "10px", 
                    textAlign: "left"}}>
              <div style={{display: "flex", 
                          gap: "20px", 
                          width: "90%"}}>
                <span style={{width: "15px", textAlign: "right"}}>{item.id}</span>
                <span>{item.text}</span>
              </div>
              <div style={{display: "flex", 
                          gap: "15px"}}>
                <span 
                style={{width: "15px", textAlign: "center", cursor: "pointer"}} 
                className='material-icons'>
                  edit
                </span>
                <span 
                style={{width: "15px", textAlign: "center", cursor: "pointer"}}
                className='material-icons'>
                  delete
                </span>
              </div>
            </li>)
          })}
      </ul>
      <div className='clear'>
        <button 
        className='material-icons btn btn-primary'
        onClick={clearAll}>
          clear_all
        </button>
      </div>
    </div>
  );
}

export default App;
