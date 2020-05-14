import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import API_URL from './config'

function App() {
  
  const handleClick = ()=>{
    axios({
      method:"GET",
      url:`${API_URL}/users`,
    }).then((res)=>{
      console.log(res,"kuhfurhfrufhr");
    })
  }
  return (
    <div className="App">
     <button onClick = {(e)=>handleClick()}>Vishnu</button>
    </div>
  );
}

export default App;
