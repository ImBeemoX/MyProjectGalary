import React from 'react';
import './App.css';
import mylogo from './logos/Logo.JPG'
import Projects from './components/projects'
import Introduction from './components/Introduction'
import Navigationbar from './components/navigationbar'

function App() {
  return (
    <div className="App">
      
       <Navigationbar/>
       <img className = "icon" src = {mylogo}/>
       <Introduction/>
       <Projects/>
    </div>
  );
}

export default App;
