//import the hook you want to use
import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export default function App() {
  //takes 2 values - a function to do to our state, and an inital value
  //returns 2 value. the state, and a function called "dispatch" - used to update our state
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  //const [newTodo, addTodo] = useState()

  //takes 2 values. current state, and an action (passed from DISPATCH). returns the new updated state
  function reducer(todos, action) {
    //use a SWITCH statement to swtich between different options (types)
    switch (action.type) {
      case "add_todo":
        return [...todos, newTodo(action.payload.name)];
      case "complete_todo":
        return todos.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, complete: !todo.complete }
            : todo;
        });
      case "delete_todo":
        return todos.filter((todo) => todo.id !== action.payload.id);
      //good practice to have a default state in case something goes wrong (invalid action)
      default:
        return todos;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

  function handleSubmit(event) {
    event.preventDefault();
    //call DISPATCH to access our reducer. Pass it a type so it know what you want to do
    //can also pass in a "payload" in order to pass variables. payload is an object that contains all needed variables
    dispatch({ type: "add_todo", payload: { name: name } });
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      {todos.map((todo) => {
        //make sure you return
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

//Similar to useState() but allows you to handle more complex states
//Instead of needing a "handle" function for each action, you just need 1 reducer function
