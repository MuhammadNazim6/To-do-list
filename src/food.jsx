import React , {useState} from "react";

function MyFoodComponent(){

  const[foods , setFood] = useState(['Apple','Mango' ,'pizza'])

  function handeleAddFood(){

    const newFood = document.getElementById('newFoodId').value
    document.getElementById('newFoodId').value = ''
    if(newFood!==''){
          setFood(f=>[...f , newFood])
    }
  }

  function removeFood(index){
    setFood(foods.filter((_,i)=>i !== index))
  }

  return(
    <div>
      <h1>Fruits and Foods</h1>
      <ul>
     { foods.map((fud,index)=> <li key={index} onClick={()=>removeFood(index)}> {fud} </li> )}
      </ul>

      <input id="newFoodId" type="text" />
      <button onClick={handeleAddFood}>Add Food</button>
    </div>
  )
}

export default MyFoodComponent