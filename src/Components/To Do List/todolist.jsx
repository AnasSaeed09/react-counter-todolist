import React, { useState, useEffect } from 'react';
import './todolist.css';
import Header from '../Common/header';

export default function Todolist() {
   
  //  useState: To store the date with a given state
    const [tasks, setTasks] = useState([]);
    const [inputs, setInput] = useState('');
   
    // useEffect : To handle side effects or to fetch data from DOM
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('tasks')) || []; // Storing tasks in local storage of your browser
        setTasks(storedList);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    //Func to Add new input value to setTasks
    const handleTasks = () => {
        if (inputs.trim() === '') {          // Checks if input value == empty
            alert("Field must be filled !");
            return;
        }
        const newTasks = { text: inputs, checked: false }; // creating object with two properties
        setTasks([...tasks, newTasks]);  // Storing object in tasks array
        setInput('');  // Setting the input value == empty or ''
    };
         
        // Function to add checked to Lists
    const handleToggleTasks = (index) => { 
      
        const newTasks = tasks.map((task, i) =>
          // If key === index -> checked = true
            i === index ? { ...task, checked: !task.checked } : task 
        );
        setTasks(newTasks);
    };
         // Func to remove lists 
    const handleRemoveTasks = (index) => {
      // .filter() is used , to get a new array where i != index . where index or key is the id of list you wish to remove
      // Meaning all enteries except the given index list, be moved to new array stored in addTasks 
        const addTasks = tasks.filter((_, i) => i !== index); 
        setTasks(addTasks);
    };

    return (
        <>
            <Header />
            <div className='to-do-list'>
                <div className="header">
                    <h1>To Do List</h1>
                </div>
                <div className="user-input">
                    <input
                        type="text"
                        value={inputs}
                        id="input-field"
                        placeholder="Title"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <span className="add-btn" onClick={handleTasks}>ADD</span>
                </div>
                <div className="task-list">
                    <ul id="myUL">
                        {/* <!-- List items will be populated here --> */}
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                className={task.checked ? 'checked' : ''} // If checked ='true' ->  className='checked'
                                onClick={() => handleToggleTasks(index)}  // To make checked : 'true'
                            >
                                {task.text}
                                <span
                                    className='close-btn'
                                    onClick={(e) => {
                                        e.stopPropagation();      // To stop the event bubble phase or from triggering handleToggleTasks()
                                        handleRemoveTasks(index);
                                    }}
                                >
                                    &times;
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
