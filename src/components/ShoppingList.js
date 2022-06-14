import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 
const [selectedCategory, setCategory] = useState("All")

  function handleFilter(e){
    setCategory(e.target.value)
    console.log(e.target.value)
    }


  function itemFilter(){
    if(selectedCategory !== "All"){
      return items.filter(item => item.category === selectedCategory)
    }else{
      return items
    }
  }

    
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemFilter().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


//selected category is the category we need to filter and return, use it and interpole it into a filter so that it can be used as the condition in a filter statement

// use state will take in a object 