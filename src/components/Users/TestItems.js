import React, { useState } from 'react';
 
function TestItems() {
 
  const [items, setItems] = useState([]);
 
  // handle click event of the button to add item
  const addMoreItem = () => {
    setItems(prevItems => [...prevItems, {
      id: prevItems.length,
      value: getRandomNumber()
    }]);
console.log('itens',items);
  }
 
  // generate 6 digit random number
  const getRandomNumber = () => {
    return Math.random().toString().substring(2, 8);
  }
 
  return (
    <div>
      <h3>useState with an array in React Hooks - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      
      <button onclick={addMoreItem}>Add More</button>
      
      <label>Output:</label>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}
 
export default TestItems;
