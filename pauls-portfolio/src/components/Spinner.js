import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Spinner() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  setTimeout(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'auto'
  }, 4000)

  return (
    <Wrapper>
      <img src="./img/Spinner-1s-24px (2).svg" className="spin" />
      <h1 className="welcome">Welcome</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  align-items: center;
  justify-content: center;
  background: rgb(31, 29, 29);
  z-index: 1000000000000000000;
  font-size: 40px;
  font-weight: 700;
.spin {
  width: 300px;
  height: auto;
}
.welcome {
  color: white;
  font-weight: bold;
}
`

export default Spinner
