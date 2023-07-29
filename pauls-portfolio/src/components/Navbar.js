import React, { useState } from 'react'
import styled from 'styled-components'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <a href="#">
        <h1>P<span>IZ.</span></h1>
      </a>
      <ul className="dropDown" style={open !== false ? { left: 0 } : { left: '-100%' }}>
        <li onClick={() => setOpen(!open)}><a href="#home" >Home</a></li>
        <li onClick={() => setOpen(!open)}><a href="#about" >About</a></li>
        <li onClick={() => setOpen(!open)}><a href="#resume" >Resume</a></li>
        <li onClick={() => setOpen(!open)}><a href="#portfolio" >Portfolio</a></li>
        <li onClick={() => setOpen(!open)}><a href="#service" >Service</a></li>
        <li onClick={() => setOpen(!open)}><a href="#contact" >Contact</a></li>
      </ul>
      <img onClick={() => setOpen(!open)} src={open !== false ? "./img/icons8-delete-30.png" : "./img/hamburger.png"} alt="open menu" className="hamper" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 50px;
  position: sticky;
  top: 0%;
  background: black;
  z-index: 1;

.none {
  display: none;
  justify-content: space-between;
}
.block {
  display: flex;
}
a {
  text-decoration: none;
  h1 {
    margin-top: 0%;
    color: white;
    font-size: 30px;
    span {
      color: rgb(128, 29, 221);
    }
  }
}

.dropDown {
  display: flex;
  li {
    padding: 0px 50px 10px 0px;
    list-style-type: none;
    a {
      text-decoration: none;
      color: whitesmoke;
      &:focus {
        color: rgb(128, 29, 221);
        border-bottom: 2px solid rgb(128, 29, 221);
      }
    }
  }
}

.hamper {
  display: none;
}

@media (max-width: 767px) {
      padding: 20px;

  h1 {
      font-size: 30px;
  }

  .dropDown {
    li {
      padding: 0px 10px;
      a {
        font-size: 18px;
    }
  }
  }
}

@media (max-width: 540px) {
  .dropDown {
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 80px;
      left: 0%;
      right: 0%;
      bottom: 0%;
      background-color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
      li {
        font-size: 50px;
        font-weight: 900;
        letter-spacing: 10px;
        padding-right: 0;
        list-style-type: none;
        a {
          text-decoration: none;
          color: whitesmoke;
      }
    }
  }

  .hamper,
  .closehamper {
      display: block;
      position: absolute;
      right: 5%;
  }
}
`

export default Navbar
