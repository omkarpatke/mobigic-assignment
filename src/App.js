import './App.css';
import React , { useState } from 'react';

function App() {
  const [ rows , setRows ] = useState(0);
  const [ columns , setColumns ] = useState(0);
  const [ arr , setArr ] = useState([]);
 

  let gridStyle = {
      'display': 'grid',
      'gridTemplateColumns': `repeat(${columns}, 18rem)`,
      'gridTemplateRows': `repeat(${rows}, 2rem)`,
      'gap':'5px',
      'padding': '2rem 4rem',
      'marginTop': '5rem',
      'placeContent':'center'
  }

  let searchInputStyle = {
    'marginTop': '3rem',
    'padding': '7px 20px',
    'borderRadius': '5px',
  }

  let itemStyle = {
    'border':'1px solid black',
  }

  function clickHandler(){
    if(rows){
      for(let i = 0 ; i < rows*columns ; i++){
          setArr(prev => [...prev , i])
      }
    }
  }

  function resetHandler(){
    setArr([]);
    setColumns(0);
    setRows(0);
  }

  function searchHandler(searchInput){
     let gridContainer = document.querySelector('.grid');
     let inputs = gridContainer.childNodes;
     for(let i = 0 ; i < inputs.length ; i++){
        if(searchInput.length >= 1){
        if(inputs[i].value === searchInput){
          inputs[i].style.color = 'red'
        }
       }else{
        inputs[i].style.color = 'black'
       }
     }
  }

  
  return (
    <div className="App">
      <div className="inputs">
        <label htmlFor='m'>
        Enter The Number of rows
        <input type="number" id='m' value={rows} onChange={(e) => setRows(e.target.value)} />
        </label>
        <label htmlFor='n'>
        Enter The Number of Column
        <input type="number" id='n' value={columns} onChange={(e) => setColumns(e.target.value)} />
        </label>
        <button onClick={clickHandler}>show grid</button>
        <button onClick={resetHandler}>Reset</button>
      </div>

        <input type="search" style={searchInputStyle} maxLength='1' placeholder='Search' onChange={(e) => searchHandler(e.target.value)} />
      
      <div className="grid" style={gridStyle}>
        {arr && arr.map(row => (
          <input type="text" key={row} maxLength='1' style={itemStyle} />
        ))}
      </div>
    </div>
  );
}

export default App;
