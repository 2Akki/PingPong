import { useState } from "react";
function ListComponent({item,DeleteItem,ToggleItemPacked,EditItem}) {
  

  

  return (
   
     <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange ={()=>{ToggleItemPacked(item.id)}}
      />
      <span style={item.packed ? {textDecoration:"line-through"}:{}}>
        {item.quantity} {item.details}
      </span>
      {item.packed?"":<button onClick={()=>{EditItem(item.id)}}>📝</button>}
      <button onClick={()=>{
        DeleteItem(item.id)
      }}>❌</button>

      
    </li>
    
    
  );
}

export default ListComponent;
