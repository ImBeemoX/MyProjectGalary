import React from 'react';
import './App.css';
import mylogo from './logos/Logo.JPG'
import Projects from './components/projects'
import Introduction from './components/Introduction'
import Navigationbar from './components/navigationbar'

function App() {
  return (
    <div className="App">
      <img className = "icon" src = {mylogo}/>
       <Navigationbar/>
       <Introduction/>
       <Projects/>
    </div>
  );
}

export default App;
