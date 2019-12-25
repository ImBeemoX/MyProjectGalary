import React from 'react';
import './App.css';
import Project from './components/project';
import reactlogo from './logos/React.png'
import mylogo from './logos/Logo.JPG'

function App() {
  return (
    <div className="App">
       <img className = "icon" src = {mylogo}/>
       <li className = "li"> 
       <Project title = "Toy World" lang = "Swift" description = "Demo of a swift shopping app" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       </li>

    </div>
  );
}

export default App;
