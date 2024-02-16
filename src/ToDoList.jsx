import React, { useState } from 'react';
console.log(localStorage.getItem("myTodoLists"));
function ToDoList(props) {


  const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem("myTodoLists")
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  const [newTask, setNewtask] = useState()

  function handleInputTask(event) {
    setNewtask(event.target.value)
 
  }
  function addTask() {
    if (newTask.trim() !== "") {
      
      setTasks([...tasks, newTask])
      localStorage.setItem("myTodoLists", JSON.stringify([...tasks, newTask]));
      console.log(localStorage.getItem("myTodoLists"))

      setNewtask('')

    }
  }
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
    localStorage.setItem("myTodoLists", JSON.stringify(tasks.filter((_, i) => i !== index)));
  }
  function moveTaskUp(index) {
    if (index !== 0) {
      [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]]
      setTasks([...tasks])
      localStorage.setItem("myTodoLists", JSON.stringify([...tasks]));

    }

  }
  function moveTaskDown(index) {
    if (index !== tasks.length - 1) {
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]]
      setTasks([...tasks])
      localStorage.setItem("myTodoLists", JSON.stringify([...tasks]));

    }
  }

  function removeUser(){
    localStorage.removeItem('name');
    localStorage.removeItem('welcomeBoolean');
    localStorage.removeItem('myTodoLists');
    props.setWelcomeFalse()
  }

  return (
    <>
      <h2>{props.name}'s To do list</h2>
      <div className="center-div">
        <input
          id="inputTag"
          type='text'
          placeholder='Add a new task...'
          value={newTask}
          onChange={handleInputTask}
        />

        <button className="add-button" onClick={addTask}>Add Task</button>
      </div>
      <div className="content-div">
        <ol>
          
          { tasks.length > 0 ? 
            tasks.map((task, index) =>
              <li key={index}>
                <span className='text'>  {task}  </span>
                <button className='delete-button' onClick={() => deleteTask(index)}><i className="fa-solid fa-trash"></i></button>
                <button className='move-button' onClick={() => moveTaskUp(index)}><i className="fa-solid fa-arrow-up"></i></button>
                <button className='move-button' onClick={() => moveTaskDown(index)}><i className="fa-solid fa-arrow-down"></i></button>
              </li>) : 
              <h3>No tasks available</h3>
          }

        </ol>
      </div>
      <p className='removeUser' onClick={removeUser}> <i className="fas fa-user-times"></i> Remove existing user </p>
    </>
  )
}

export default ToDoList