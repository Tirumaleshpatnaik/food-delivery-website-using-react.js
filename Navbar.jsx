import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

  const[btnname,setbtnname]=useState("login")
  return (
    <>
    <div id="header">
        <div id="headcontainer">
            <img id="logo"src="https://th.bing.com/th/id/OIP.sxN9ENzoAmPeH5E0cQEV_gHaHa?rs=1&pid=ImgDetMain" alt="" />

        </div>

        <div id="navlist">

            <ul id="headernames">
                <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              <button id="login" onClick={()=>{
                  // setbtnname("logout")
                  btnname==="login"?setbtnname("logout"):setbtnname("login")
              }}> {btnname}</button>  
            </ul>

        </div>
    </div>

   
    </>
  )
}

export default Navbar