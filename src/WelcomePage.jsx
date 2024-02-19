import React , {useState} from "react";

function WelcomePage(props){
  
  const [name , setName] = useState('')

  function changeName(evt){
    setName(evt.target.value)
    localStorage.setItem('name', evt.target.value);
  }

  return(
    <div >
      <div className="welcome-heading">
      <h2>Welcome to your Task Scheduler</h2>
    </div>
        <div className="content-div">
        <input id="nameInput" placeholder='What should we call you???' type="text" onChange={changeName} value={name} />
        </div>

        <div className="content-div">
        <button className="continue-button" onClick={props.onClickFunction}> Continue </button>
        </div>

    </div>
  )
}

export default WelcomePage