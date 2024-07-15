import React from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

const App = () => {
  return (
    <div className="App">
      <h1>My MERN App</h1>
      <AddItem />
      <ItemList />
    </div>
  );
};

export default App;
