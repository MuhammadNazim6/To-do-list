import React , {useState} from "react"
import WelcomePage from './WelcomePage'
import ToDoList from "./ToDoList"

function App() {
   const [welcome , setWelcome] = useState(localStorage.getItem('welcomeBoolean'))
   const [name , setName] = useState(localStorage.getItem('name'))

   function toggleWelcome(){
      localStorage.setItem('welcomeBoolean',true)
      setWelcome(true)
      setName(localStorage.getItem('name'))
   }

   function setWelcomeFalse(){
      setWelcome(false)
   }
   return (
      <>  

     { !welcome || welcome == false ?( <WelcomePage onClickFunction={toggleWelcome}/> ) :( <ToDoList name={name} setWelcomeFalse={setWelcomeFalse}/>)}

      </>
   )
}

export default App
