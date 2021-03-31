//import the hook you want to use
import React, {useState} from 'react'


export default function App() {
  //ALWAYS returns an array with 2 values. CurrentState and function. Pass useState() what you want the initial state to be.
  const [count, setCount] = useState(1)
  //If you have multiple things in your state, use multiple useState()s
  const [color, setColor] = useState('blue')

  //Can also pass useState a function as an inital value. Used for 'complex' inital values. Only gets run the first time you render
  // const [count, setCount] = useState(() => {
  //   console.log("this will only show up once")
  //   return 1
  // })

  function decrementCount(){
    //INCORRECT way to update a value
    // setCount(count-1)

    //always use the "function version"
    setCount(previousCount => previousCount -1)
    setColor('red')
  }

  function incrementCount(){
    setCount(previousCount => previousCount +1)
    setColor('blue')
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

//can only use hooks inside of function components - NOT classes
//hooks must always execute in the same order (CANNOT put them in 'if' statements)
//if you use an object inside of your state - useState({count: 4, color: blue}) - you must you the spread operator when updating your state - ...
