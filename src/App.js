import './App.css';
import React, { useState } from 'react';
import BoxComponent from './components/BoxComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  const [allBoxes, setallBoxes] = useState([])



  const addNewBox = (box) => {
    console.log(box);
    const addNewBox = [...allBoxes]
    addNewBox.push(box);
    setallBoxes(addNewBox)
  }

  return (
    <div className="App">
      <BoxComponent addNewBox={addNewBox}/>
      <DisplayComponent allBoxes={allBoxes}/>
    </div>
  );
}


export default App;
