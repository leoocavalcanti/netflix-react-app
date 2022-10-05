import React from 'react'
import "./Header.css"
import netflixlogo from "../assets/netflix-logo.png";
import netflixavatar from "../assets/netflix-avatar.png";


const Header = ({black}) => {


  return (

    <header className={black ? "black" : ""}>
        <div className="header--logo">
            <a href="/">
                <img src={netflixlogo} alt="Logo Netflix"/>
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src={netflixavatar} alt="Avatar"/>
            </a>
        </div>
    </header>
  )
}

export default Header