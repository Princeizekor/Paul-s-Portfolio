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
        <li><Link to="/" onClick={() => setOpen(!open)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(!open)}>About</Link></li>
        <li><Link to="/resume" onClick={() => setOpen(!open)}>Resume</Link></li>
        <li><Link to="/portfolio" onClick={() => setOpen(!open)}>Portfolio</Link></li>
        <li><Link to="/service" onClick={() => setOpen(!open)}>Service</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(!open)}>Contact</Link></li>
      </ul>
      <img onClick={() => setOpen(!open)} src={open !== false ? "./img/icons8-delete-30.png" : "./img/hamburger.png"} alt="open menu" className="hamper" />
    </div>
  )
}

export default Navbar
