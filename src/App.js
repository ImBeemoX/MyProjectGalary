import React from 'react';
import './App.css';
import mylogo from './logos/Logo.JPG'
import Projects from './components/projects'

function App() {
  return (
    <div className="App">
       <img className = "icon" src = {mylogo}/>
       <Projects/>
    </div>
  );
}

export default App;
