import './App.css';
import React from 'react'

import Header from './components/Header';
import Dropdown from './components/Dropdown';


function App() {
  
  const author = "Paul Beard"
  const dropDown = {
    title: 'List1',
    options: [
      {
        id: 1,
        label: 'first option'
      },
      {
       id: 2,
        label: 'second option'
      },
      {
        id: 3,
        label: 'third option'
      }
    ]
  }

  return (
    <div className="App">
      <Header name = {author}/>
      <Dropdown title = {dropDown.title} options = {dropDown.options} /> 
    </div>
  );
}

export default App;
