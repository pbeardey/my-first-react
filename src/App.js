import './App.css';
import React from 'react'

import Header from './components/Header';
import Dropdown from './components/Dropdown';


function App() {
  
  const name = "Paul Beard"
  const dropDown = {
    title: 'List1',
    options: ['first', 'second', 'third']
  }

  return (
    <div className="App">
      <Header name = {name}/>
      <Dropdown title = {dropDown.title} options = {dropDown.options} /> 
    </div>
  );
}

export default App;
