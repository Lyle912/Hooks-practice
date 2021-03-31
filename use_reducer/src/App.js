//import the hook you want to use
import React, { useReducer } from "react";

export default function App() {
  //takes 2 values - a function to do to our state, and an inital value
  //returns 2 value. the state, and a function called "dispatch" - used to update our state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //takes 2 values. current state, and an action (passed from DISPATCH). returns the new updated state
  function reducer(state, action) {
    //use a SWITCH statement to swtich between different options (types)
    switch (action.type) {
      case "decrement":
        return { count: state.count - 1 };
      case "increment":
        return { count: state.count + 1 };
      //good practice to have a default state in case something goes wrong (invalid action)
      default:
        return { state };
    }
  }

  function decrementCount() {
    //call DISPATCH to access our reducer. Pass it a type so it know what you want to do
    dispatch({ type: "decrement" });
  }

  function incrementCount() {
    //call DISPATCH to access our reducer. Pass it a type so it know what you want to do
    dispatch({ type: "increment" });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

//Similar to useState() but allows you to handle more complex states
