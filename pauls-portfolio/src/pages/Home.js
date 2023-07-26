import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from '../Typewriter';

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
    <div id='home'>
      <h2 className='hello'>Hello,</h2>
      <Typewriter />
      <h2 className='hello'>Welcome to my portfolio</h2>
      <button className='front-end-btn'>Frontend Developer</button>
      <button className='more'><a href="#about">More about me</a></button>

      <div class="icons">
        {
          icons.map((item) => 
          <a href={item.link} target="_blank">
        <img src={item.image} alt="Social icon"/>
        </a>
          )
        }
    </div>
    </div>
  )
}

export default Home
