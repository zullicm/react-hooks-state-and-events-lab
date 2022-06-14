import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)
  function handleCart(){
    setCart(!cart)
  }

  const inCart = cart ? "in-cart" : ""
  

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
