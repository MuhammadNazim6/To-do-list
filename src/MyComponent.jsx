import React, { useState } from "react";

function MyComponent() {

  const [cars, setCar] = useState([])
  const [year, setCarYear]  = useState(new Date().getFullYear())
  const [make, setCarMake]  = useState('')
  const [ model, setCarModel ] = useState('')
  const  [color, setCarColor] = useState('')


  function handleAddCar(){
    const newCar = { year:year,
                    make:make,
                    model: model,
                    color:color  }
    setCar(c=>[...c , newCar])
    setCarYear(new Date().getFullYear())
    setCarModel('')
    setCarMake('')
    setCarColor('')
      
  }
  function handleRemoveCar(index){
    setCar(c=>(c.filter((_ , i)=> i!== index)))
  }
  function handleCarYear(event){
      setCarYear(event.target.value)
  }
  function handleCarModel(event){
    setCarModel(event.target.value)
  }
  function handleCarMake(event){
    setCarMake(event.target.value)

  }
  function handleCarColor(event){
    setCarColor(event.target.value)
  }
 


  return (
    <div>
      
      <ul>
        {cars.map((c,index)=> <li onClick={()=>handleRemoveCar(index)} key={index}>{c.year} {c.color} {c.make} {c.model}</li> )}
      </ul>

      <input type="number" value={year} onChange={handleCarYear} placeholder="Enter car year"/> <br/>
      <input type="text" value={make} onChange={handleCarMake} placeholder="Enter car make"/>  <br/>
      <input type="text" value={model} onChange={handleCarModel} placeholder="Enter car model"/>  <br/>
      <input type="text" value={color} onChange={handleCarColor} placeholder="Enter car color"/>  <br/><br/>
      <button onClick={handleAddCar}> Add Car</button>
    
    
   </div>
  )
}

export default MyComponent