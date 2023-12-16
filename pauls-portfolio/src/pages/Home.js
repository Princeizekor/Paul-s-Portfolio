import React from 'react'
import styled from 'styled-components'
import Type from '../Type'

function Home() {
  const icons = [
    {
      id: 1,
      image: '/img/bx_bxl-facebook.png',
      link: 'https://www.facebook.com/prince.izekor.5/'
    },
    {
      id: 2,
      image: '/img/cib_codesandbox.png',
      link: 'https://www.facebook.com/prince.izekor.5/'
    },
    {
      id: 3,
      image: '/img/ant-design_github-outlined.png',
      link: 'https://github.com/Princeizekor'
    },
    {
      id: 4,
      image: '/img/ant-design_twitter-outlined.png',
      link: 'https://twitter.com/Paullizekor'
    },
    {
      id: 5,
      image: '/img/ant-design_behance-outlined.png',
      link: 'https://www.facebook.com/prince.izekor.5/'
    }
  ]
  return (
    <Wrapper id='home'>
      <h2 className='hello'>Hello,</h2>
      <Type />
      <h2 className='hello'>Welcome To My Portfolio</h2>
      <button className='front-end-btn'>FRONTEND DEVELOPER <img src='/img/verified.png' /></button>
      <a href="#about"><button className='more'>More About Me</button></a>

      <div className="icons">
        {
          icons.map((item, i) =>
            <a href={item.link} target="_blank" key={i}>
              <img src={item.image} key={i} alt="Social icon" />
            </a>
          )
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0% auto;
  height: 650px;
  background-image: url('/img/download (1).png');
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

.hello {
  color: rgb(128, 29, 221);
  font-weight: bold;
  font-size: 40px;
}

.front-end-btn {
  width: 220px;
  color: grey;
  font-size: 14px;
  border: none;
  outline: none;
  border-left: 2px solid white;
  border-right: 2px solid white;
  height: 30px;
  margin-top: 2%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}

.more {
width: 130px;
color: whitesmoke;
background: transparent;
height: 40px;
border: 3px solid rgb(128, 29, 221);
border-radius: 4px;
margin-top: 30px;
transition: 1s all ease;
}

.more:hover {
background-color: whitesmoke;
color: rgb(128, 29, 221);
transition: 1s all ease;
}

.icons {
margin-top: 150px;
display: flex;
justify-content: space-between;
width: 60%;
}

.Typewriter__wrapper, .Typewriter__cursor {
  font-size: 3em!important;
  font-weight: 800!important;
  font-family: 'Poppins', sans-serif;
  color: whitesmoke;
}

@media (max-width: 1023px) {
width: 100%;
margin: 0%;
height: 600px;

.front-end-btn {
font-size: 14px;
}

.more {
margin-top: 2%;
}

.icons {
margin-top: 100px;
}
}

@media (max-width: 767px) {
  width: 100%;
  margin: 0%;
  height: 650px;
  background-image: url('/img/download (2).png');

.front-end-btn {
  margin-bottom: 20px;
}
}

@media (max-width: 540px) {
height: 550px;

.hello {
font-size: 30px;
}

.icons {
margin-top: 100px;
width: 70%;
}
.Typewriter__wrapper, .Typewriter__cursor {
  font-size: 40px!important;
}
}
@media (max-width: 540px) {
  .Typewriter__wrapper, .Typewriter__cursor {
    font-size: 25px!important;
}
.hello {
  text-align: center;
}
}
`

export default Home
