import React , {useState} from "react";

function WelcomePage(props){
  
  const [name , setName] = useState('')

  function changeName(evt){
    setName(evt.target.value)
    localStorage.setItem('name', evt.target.value);
  }

  return(
    <div>
      <h2>Welcome to your Task Scheduler</h2>
        <div className="content-div">
        <h4>Enter your name</h4>
        </div>

        <div className="content-div">
        <input className="nameInput" type="text" onChange={changeName} value={name} />
        </div>

        <div className="content-div">
        <button className="continue-button" onClick={props.onClickFunction}> Continue </button>
        </div>

    </div>
  )
}

export default WelcomePage