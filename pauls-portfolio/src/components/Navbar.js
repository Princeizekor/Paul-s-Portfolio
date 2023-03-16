import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <a href="#">
        <h1>P<span className="logo">IZ.</span></h1>
      </a>
      <ul className="list" style={open !== false ? { left: 0 } : { left: '-100%' }}>
        <li onClick={() => setOpen(!open)}><a href="#home" >Home</a></li>
        <li onClick={() => setOpen(!open)}><a href="#about" >About</a></li>
        <li onClick={() => setOpen(!open)}><a href="#resume" >Resume</a></li>
        <li onClick={() => setOpen(!open)}><a href="#portfolio" >Portfolio</a></li>
        <li onClick={() => setOpen(!open)}><a href="#service" >Service</a></li>
        <li onClick={() => setOpen(!open)}><a href="#contact" >Contact</a></li>
      </ul>
      <img onClick={() => setOpen(!open)} src={open !== false ? "./img/icons8-delete-30.png" : "./img/hamburger.png"} alt="open menu" className="hamper" />
    </div>
  )
}

export default Navbar
