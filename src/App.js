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
       <Project title = "Colour Switch" lang = "Swift" description = "A simple Swift game using SpriteKit" image = {reactlogo}/>
       <Project title = "Scrape opgg" lang = "Python" description = "Scrape opgg to get information of players" image = {reactlogo}/>
       <Project title = "Zombie game" lang = "p5.js" description = "A simple zombie game" image = {reactlogo}/>
       <Project title = "Personal Expenses" lang = "Flutter" description = "An app to track your money transactions" image = {reactlogo}/>
       <Project title = "Yelp" lang = "ReactNative" description = "An app used for searching restaurants nearby using Yelp API" image = {reactlogo}/>
       </li>

    </div>
  );
}

export default App;
