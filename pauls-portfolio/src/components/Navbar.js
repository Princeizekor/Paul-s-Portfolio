import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <Link href="#">
        <h1>P<span className="logo">IZ.</span></h1>
      </Link>
      <ul className="list" style={open !== false ? {height: '100vh', left: 0} : {left: '-100%', overflow: 'hidden'}}>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="#about" >About</Link></li>
        <li><Link to="/resume" >Resume</Link></li>
        <li><Link to="/portfolio" >Portfolio</Link></li>
        <li><Link to="/service" >Service</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>
      <img onClick={() => setOpen(!open)} src={open !== false ? "./img/icons8-delete-30.png" : "./img/hamburger.png"} alt="open menu" className="hamper" />
    </div>
  )
}

export default Navbar
