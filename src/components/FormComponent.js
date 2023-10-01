import { useState,useEffect } from "react";

function FormComponent({ SetItemsObject,IsEditButton,ItemsObject,EditId,UpdateItem}) {
  const [Quantity, setQuantity] = useState(1);
  const [Details, setDetails] = useState("");
  const [CurrentEditId, setCurrentEditId] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [NewItems, setNewItems] = useState(ItemsObject)
  
  useEffect(() => {
    
      let obj = NewItems.map(i=>{
        if(i.id ===EditId){
          setCurrentEditId(i.id);
 
           setDetails(i.details)
          
            setQuantity(i.quantity)
          return i;
        }
       
      })
   
  }, [EditId]);
  function onSubmitEnter(e) {
    
    e.preventDefault();
    if (Quantity !== 0 && Details !== "") {
      const Item = { details: Details, quantity: Quantity, id: Date.now(),packed:false};
      SetItemsObject(Item);
    }
    
  }

  function onEditEnter(e) {
    e.preventDefault();
    const Item = { details: Details, quantity: Quantity, id:EditId};
  
    UpdateItem(Item)
    setCurrentEditId("");
 
    setDetails("")
   
     setQuantity(0)
  }

  return (
    <form className="add-form" onSubmit={onSubmitEnter}>
      <h3>Write what you need for your😍trip.</h3>
      <select
        value={Quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={Details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      ></input>
      {IsEditButton? <button type="submit" onClick={onEditEnter}>Edit</button>:<button type="submit" onClick={onSubmitEnter}>Submit</button>}
      
    </form>
  );
}

export default FormComponent;
