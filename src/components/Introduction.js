import React from 'react'
import '../App.css'
import mylogo from '../logos/Logo.JPG'

const Introduction= () => {
    var intro = "Hi, my name is Yichuan Wang, a self-motivated developer who is dedicate to build reliable and maintainable projects for different platforms such as IOS, Android and Windows. I also have strong passion of developing professional websites using React.";
    return(
        <div className = 'introduction'>
        <img className = "icon" src = {mylogo}/>
        <p1 className = 'introduction-font'>{intro}</p1>
        </div>
    )
}

export default Introduction