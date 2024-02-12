import React, { useState } from 'react';

function ToDoList() {

  const [tasks, setTasks] = useState(['Take a shower', 'Complete the project', 'Book the flight ticket', 'Wash the car'])
  const [newTask, setNewtask] = useState()

  function handleInputTask(event) {
    setNewtask(event.target.value)
 

    
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask])
      setNewtask('')
    }
  }
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }
  function moveTaskUp(index) {
    if (index !== 0) {
      [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]]
      setTasks([...tasks])
    }

  }
  function moveTaskDown(index) {
    if (index !== tasks.length - 1) {
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]]
      setTasks([...tasks])
    }
  }



  return (
    <>
      <h2>To do list</h2>
      <div class="center-div">
        <input
          id="inputTag"
          type='text'
          placeholder='Add a new task...'
          value={newTask}
          onChange={handleInputTask}
        />

        <button className="add-button" onClick={addTask}>Add Task</button>
      </div>
      <div class="content-div">
        <ol>
          
          { tasks.length > 0 ? 
            tasks.map((task, index) =>
              <li key={index}>
                <span className='text'>  {task}  </span>
                <button className='delete-button' onClick={() => deleteTask(index)}><i class="fa-solid fa-trash"></i></button>
                <button className='move-button' onClick={() => moveTaskUp(index)}><i class="fa-solid fa-arrow-up"></i></button>
                <button className='move-button' onClick={() => moveTaskDown(index)}><i class="fa-solid fa-arrow-down"></i></button>
              </li>) : 
              <h3>No tasks available</h3>
          }

        </ol>
      </div>
    </>
  )
}

export default ToDoList