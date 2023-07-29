import React from 'react'
import styled from 'styled-components'

function About() {
  // const resume = './cv/IZEKOR PAUL CV.docx'
  const resume = './cv/PaulIzekor cv.pdf'
  const img = './img/profile.jpg'
  const about = `I'm a FRONTEND Developer who loves to make
  things look perfect. I create good and perfect Websites that are responsive
  on all screensizes (small, big and Extra large screen sizes) and that are
  scalable. Coding is a thing i love to do.`
  const profile = `I'm a student of Ambrose Alli University Ekpoma, I've very high intelligence
  on TAILWINDCSS, HTML5, CSS3, VANILLA JAVASCRIPT, TYPESCRIPT, NEXT JS, REACT JS, RESTFUL APIS,
  GITHUB and more.`
  return (
    <Wrapper id='about'>
      <h1>About Me</h1>
      <div className='about-box'>
        <img src={img} alt="my profile image" className='profile-image' />
        <div className='profile-details'>
          <p className="about-intro-text">{about}</p>
          <p className='profile-intro-text'>{profile}</p>
          <div className="profile-buttons">
            <button className="hire-button">
              <a href="#contact">HIRE ME</a>
            </button>
            <button className="cv-button">
              <a href={resume} target='_blank'>DOWNLOAD CV</a>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: rgb(128, 29, 221);
  height: 650px;
  max-width: 1440px;
  margin: 0% auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

h1 {
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 700;
}

.about-box {
  width: 80%;
  align-items: center;
  display: flex;
  padding: 40px;
  background: rgb(34, 33, 33);
}

.profile-details {
  margin-left: 30px;
}

.about-intro-text,
.profile-intro-text {
  font-size: 15px;
  font-weight: 200;
  color: whitesmoke;
  line-height: 25px;
}

.profile-intro-text {
  margin-top: 20px;
}
.profile-image {
  width: auto;
  height: 300px;
  object-fit: contain;
  border-radius: 10px;
}
.prof {
  color: whitesmoke;
  margin-top: 3%;
  margin-bottom: 3%;
}
.profile-text {
  font-size: 20px;
  font-weight: 200;
  color: whitesmoke;
  margin: 0% auto;
  width: 60%;
  line-height: 30px;
}
.profile-buttons {
  width: 70%;
  display: flex;
  margin-top: 5%;
  justify-content: space-between;
}
.hire-button,
.cv-button {
  width: 150px;
  height: 50px;
  font-size: 15px;
  background: whitesmoke;
  border: 2px solid rgb(67, 67, 179);
  border-radius: 5px;
  transition: 1s all ease;
  a {
    text-decoration: none;
    color: black;
  }
}
.hire-button:hover {
  background: rgb(67, 67, 179);
  color: whitesmoke;
  transition: 1s all ease;
}
.cv-button {
  background: rgb(67, 67, 179);
  border: 2px solid silver;
  a {
    color: whitesmoke;
  }
}

@media (max-width: 1023px) {
      width: 100%;
      margin: 0%;
  
  .about-box {
      width: 90%;
      padding: 30px;
  }

  .profile-buttons {
      width: 100%;
  }
}

@media (max-width: 767px) {
      height: auto;

  .about-box {
      flex-direction: column;
      height: auto;
  }
  
  .profile-details {
      margin: 0%;
  }
  .profile-image {
      margin-bottom: 30px;
  }
  .profile-text {
      width: 100%;
  }
}

@media (max-width: 540px) {
  .about-box {
      text-align: center;
  }
  .profile-text {
      font-size: 15px;
  }

  .profile-buttons {
      flex-direction: column;
      margin-top: 5%;
  }

  .hire-button,
  .cv-button {
      width: 100%;
      height: 40px;
      font-size: 12px;
  }

  .cv-button {
      margin-top: 20px;
  }
}

@media (max-width: 400px) {
  .profile-image {
      border-radius: 15px;
  }
}
`

export default About
