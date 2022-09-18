import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.css'

const NavigationBar = () => {
    return (
        <div className="navigation-container">
           <Link to={"/"}>
           <div className="logo-div">
                <img src="https://www.freeiconspng.com/thumbs/palm-tree-png/palm-tree-png-picture-4.png" alt="logo" />
                <h1> Gabes Bon Plans</h1>
            </div>
            </Link> 
            <ul className="nav-list">
                <Link to={"/"}><li className="nav-list-item">Home</li></Link>
                <Link to={"Restaurant"}><li className="nav-list-item">Restaurant</li></Link>
                <Link to={"Hotel"}><li className="nav-list-item">Hotel</li></Link>
                <Link to={"Gym"}><li className="nav-list-item">Gym</li></Link>
                <Link to={"About"}><li className="nav-list-item">About</li></Link>
                <Link to={"Contact"}><li className="nav-list-item">Contact</li></Link>
            </ul>
        </div>
    )
}

export default NavigationBar