//import the hook you want to use
import React, { useEffect, useState } from "react";

export default function App() {
  //used for fetch section
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  //used for window section
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  //Fires every single time application renders
  useEffect(() => {
    console.log("this will log every re-render");
  });

  //IF given a 2nd argument (array), useEffect will only fire when a value in that array changes. If passed an empty array, will only run onMount
  useEffect(() => {
    console.log("this will only log when resourceType changes");

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  //If passed an empty array, will only run onMount.
  useEffect(() => {
    console.log("this will only log onMount");
    //Our event listener is added as soon as the window mounts
    window.addEventListener("resize", handleResize);
    //return is called whenever window is un-mounted. Very good practice to not slow down your program
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWith(window.innerWidth);
  };

  return (
    <div>
      {/* used for window section */}
      <div>{windowWidth}</div>
      {/* used for fetch section */}
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <p>{JSON.stringify(item)}</p>;
      })}
    </div>
  );
}

//similar to ComponentDidMount. Used to handle side effects
//Anytime you have a side effect, use useEffect!
