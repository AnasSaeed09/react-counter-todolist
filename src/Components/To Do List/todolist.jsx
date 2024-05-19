import React from 'react'

export default function Todolist() {
    
  return (
    <div className='todolist'>
          <div className='input-layout'>
            <h1>To Do List</h1>
            <input type="text" className="my-input" placeholder='Title'/>
            <span className="add-btn"  >ADD</span>
          </div>
          <div className='tasks-list'>
            <ul className="myUL">
                <li>Hit the gym</li>
                <li>Pay the bill</li>
                <li>Meet someone</li>
                <li>Read a book</li>
            </ul>
          </div>
    </div>
  )
}
