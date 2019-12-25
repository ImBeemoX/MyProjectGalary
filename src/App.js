import React from 'react';
import './App.css';
import Project from './components/project';
import reactlogo from './logos/React.png'

function App() {
  return (
    <div className="App">
      <header>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       <Project title = "haha" lang = "React" description = "haha" image = {reactlogo}/>
       
       
      </header>
    </div>
  );
}

export default App;
