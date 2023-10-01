// import logo from './logo.svg';
import "./App.css";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import LogoComponent from "./components/LogoComponent.js";
import StatusComponent from "./components/StatusComponent";
import { useState } from "react";
function App() {
  const [ItemsObject, SetItemsObject] = useState([
   
  ]);
  const [IsEditButton, SetIsEditButton] = useState(false);
  const [EditId, SetEditId] = useState(null);
  const [sortBy, setSortBy] = useState("input");

  // let sortedItems;

  // if (sortBy === "input");

  // if (sortBy === "description") {
  //   SetItemsObject(ItemsObject.slice().sort((a, b) =>
  //     a.description.localeCompare(b.description)
  //   ));
  // }
  // if (sortBy === "packed") {
  //   SetItemsObject(ItemsObject.slice().sort((a, b) => Number(a.packed) - Number(b.packed)));
  // }
  function SetItem(obj) {
    if (obj != null) {
      SetItemsObject((i) => [...i, obj]);
    }
  }
  function UpdateItem(obj) {
    let newObject = ItemsObject.map((i) => {
      if (i.id === obj.id) {
        i.id = obj.id;
        i.details = obj.details;
        i.quantity = obj.quantity;

        return i;
      }
      return i;
    });

    SetIsEditButton(false);
    SetEditId(null);
  }

  function DeleteItem(id) {
    SetItemsObject((item) => item.filter((i) => i.id !== id));
  }
  function EditItem(id) {
    ItemsObject.map((i) => {
      if (i.id === id) {
        SetEditId(id);
        SetIsEditButton(true);
        return i;
      }
      return i;
    });
  }
  function ToggleItemPacked(id) {
    SetItemsObject((i) =>
      i.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }



  
  return (
    <div className="app">
      <LogoComponent />
      <FormComponent
        SetItemsObject={SetItem}
        IsEditButton={IsEditButton}
        ItemsObject={ItemsObject}
        EditId={EditId}
        UpdateItem={UpdateItem}
      />
      <div className="list">
        <ul>
          {ItemsObject.map((i) => {
            return (
              <ListComponent
                item={i}
                DeleteItem={DeleteItem}
                ToggleItemPacked={ToggleItemPacked}
                key={i.id}
                EditItem={EditItem}
              ></ListComponent>
            );
          })}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button
            onClick={() => {
             const  confirm = window.confirm('Are you sure you want to Delete the list')
             if(confirm) {
              SetItemsObject([]);
             }
            }}
          >
            Clear list
          </button>
        </div>
      </div>
      <StatusComponent ItemsObject={ItemsObject} />
    </div>
  );
}
export default App;
