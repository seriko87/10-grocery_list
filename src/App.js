import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(false);
  const [gloIndex, setGloIndex] = useState(null);
  const [alertStatus, setAlertStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setList([...list, input]);
      setInput("");
      setAlertStatus("Item Added to the List");
    } else {
      setAlertStatus("Please Enter Value");
    }
  };

  const handleEditing = (e) => {
    e.preventDefault();
    let newValue = list.map((item, index) => {
      if (index === gloIndex) {
        return (item = input);
      }
      return item;
    });

    setList(newValue);
    console.log("edit done");
    setEditing(false);
    setInput("");
    setAlertStatus("Value Changed");
  };

  const editItem = (index) => {
    setEditing(true);
    setInput(list[index]);
    setGloIndex(index);
  };

  const deleteItem = (index1) => {
    let newValue = list.filter((item, index) => index !== index1);
    setList(newValue);
    setAlertStatus("Item Deleted");
    setEditing(false);
  };

  useEffect(() => {
    let status = setInterval(() => {
      setAlertStatus("");
    }, 3000);

    return () => {
      clearInterval(status);
    };
  }, [alertStatus]);

  return (
    <main>
      <Alert props={alertStatus} />
      <h1>Grocery Bud</h1>
      <section>
        <form action=''>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='e.g. eggs'
          />
          {editing ? (
            <button onClick={handleEditing}>Edit</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </form>
      </section>
      <div className='list'>
        {list.map((item, index) => {
          return (
            <List
              key={index}
              item={item}
              index={index}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          setList([]);
          setEditing(false);
          setAlertStatus("Empty List!");
        }}
        className='clearAll'
      >
        Clear All
      </button>
    </main>
  );
}

export default App;
