import React from 'react'
import { Resumedata } from '../ResumeData'
import styled from 'styled-components'

function Resume() {
  return (
    <Wrapper id='resume'>
      <h1>Resume</h1>
      <h2>My Credentals</h2>
      {
        Resumedata?.map((item, i) =>
          <div key={i} className='edu'>
            <p>School: <span>{item.school}</span></p>
            <p>Degree: <span>{item.degree}</span></p>
            <p>Year: <span>{item.year}</span></p>
            {item.button}
          </div>
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
    padding: 80px;
    margin: 0% auto;
    background: rgb(34, 33, 33);
    color: rgb(128, 29, 221);
 h1 {
    margin: 0%;
    font-size: 40px;
    font-weight: 700;
}

h2 {
    color: whitesmoke;
    font-size: 40px;
    font-weight: bold;
}

.edu {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5%;
    p {
      color: whitesmoke;
      font-size: 20px;
      font-weight: bold;
      span {
        color: silver;
        font-size: 17px;
        font-weight: bold;
    }
  }
}

.portfolio-cert {
    background: rgb(128, 29, 221);
    margin-top: 30px;
    width: 160px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
}
.portfolio-cert a {
    text-decoration: none;
    font-weight: bold;
    color: whitesmoke;
}

@media (max-width: 540px) {
  
        padding: 20px;
        margin: 0%;
    
    h2 {
        font-size: 25px;
    }
    
    .edu {
        margin-top: 4%;
    }
    
    .portfolio-cert {
        margin-top: 20px;
        width: 100%;
    }
}
`

export default Resume
