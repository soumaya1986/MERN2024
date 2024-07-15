import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get("/api/items");
      setItems(res.data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Item key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
