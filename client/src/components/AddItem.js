import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name };
    await axios.post("/api/items", newItem);
    setName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add an item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
