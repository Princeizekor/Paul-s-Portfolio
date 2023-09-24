import gsap from 'gsap';
import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Resume() {
  const resume = './cv/PaulIzekor cv.pdf'
  const hng = './cv/HNG9 Certificate_Paul Izekor_certificate[63].pdf'
  const handleLoad = () => {
    window.addEventListener('load', () => {
      window.scroll(0, 0);
    })
  }
  useEffect(() => {
    window.scroll(0, 0);
    handleLoad()
  }, [])

  useEffect(() => {
    gsap.utils.toArray(".resume-scroll").forEach((scrollElement, i) => {
      gsap.fromTo(scrollElement, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        visibility: "visible",
        scrollTrigger: {
          trigger: scrollElement
        }
      })
    })

    gsap.utils.toArray(".resume-scroll-right").forEach((scrollElement, i) => {
      gsap.fromTo(scrollElement, {
        x: -30,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        visibility: "visible",
        scrollTrigger: {
          trigger: scrollElement
        }
      })
    })

    gsap.utils.toArray(".resume-scroll-left").forEach((scrollElement, i) => {
      gsap.fromTo(scrollElement, {
        x: 30,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        visibility: "visible",
        scrollTrigger: {
          trigger: scrollElement
        }
      })
    })

  }, [])
  return (
    <Wrapper>
      <div className='credentials resume-scroll' style={{ visibility: "hidden" }}>
        <h5>My Credentials</h5>
        <p>Here are detailed information about my credentials and my current and past work experience.</p>

        <div className='my-credentials resume-scroll' style={{ visibility: "hidden" }}>
          <h1 style={{ color: 'rgb(128, 29, 221)' }}>Work Experience</h1>
          <div className='experience resume-scroll' style={{ visibility: "hidden" }}>
            <div className='title resume-scroll-right'>
              <h1>Front-End Developer</h1>
              <p>September 2021-present</p>
            </div>
            <div className='writeup'>
              <div className='img'>
                <img src="../img/bi_briefcase.png" alt="" />
              </div>
              <div className='resume-scroll-left'>
                <h1>SELF TAUGHT</h1>
                <div className="line"></div>
                <p>Used alot of online resources, internships and hands on projects to be the Front-End developer
                  I am today. Some of the resources are: Freecodecamp, Codecademy, W3schools, Youtube videos, JavaScript.Info etc.</p>
              </div>

            </div>
          </div>
          <div className='experience ex resume-scroll' style={{ visibility: "hidden" }}>
            <div className='title resume-scroll-right'>
              <h1>Zuri Intern</h1>
              <p>December 2022</p>
            </div>
            <div className='writeup exp'>
              <div className='img'>
                <img src="../img/bi_briefcase.png" alt="" />
              </div>
              <div className='resume-scroll-left'>
                <h1>Zuri</h1>
                <div className="line"></div>
                <p>Two months on a rigorous, fast paced and project based internship to improve on existing skills
                  and learn more about FRONTEND programming. I built several products and was mentored by some really good programmers which made me one of the HNG 9 FINALIST You can view the certificate <a href={hng} target='_blank' rel="noreferrer"><button className='btn'>Here</button></a>.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-credentials cred resume-scroll' style={{ visibility: "hidden" }}>
          <h1 style={{ color: 'rgb(128, 29, 221)' }}>Education</h1>
          <div className='experience resume-scroll'>
            <div className='title resume-scroll-right'>
              <h1>Undergraduate</h1>
              <p>August 2021-present</p>
            </div>
            <div className='writeup'>
              <div className='img'>
                <img src="../img/graduation-cap.png" alt="" />
              </div>
              <div className='resume-scroll-left'>
                <h1>Ambrose Alli University Ekpoma.</h1>
                <div className="line"></div>
                <p>Year 2 student Faculty of Engineering and Technology, Department of Civil Engineering.</p>
              </div>
            </div>
          </div>
          <div className='experience resume-scroll' style={{ visibility: "hidden" }}>
            <div className='title resume-scroll-right'>
              <h1>Responsive Web Design</h1>
              <p>November 17, 2021</p>
            </div>
            <div className='writeup'>
              <div className='img'>
                <img src="../img/graduation-cap.png" alt="" />
              </div>
              <div className='resume-scroll-left'>
                <h1>FreeCodeCamp.org</h1>
                <div className="line"></div>
                <p>You can view the certificate <a href="https://www.freecodecamp.org/certification/Izekorpaul/responsive-web-design" target='_blank' rel="noreferrer"><button className='btn'>Here</button></a>. Learnt the basics to advanced Responsive Web Design.</p>
              </div>
            </div>
          </div>
          <div className='experience ex resume-scroll' style={{ visibility: "hidden" }}>
            <div className='title resume-scroll-right'>
              <h1>Javascript Data<br /> Structures and<br /> Algorithms</h1>
              <p>May 7, 2022</p>
            </div>
            <div className='writeup exp'>
              <div className='img'>
                <img src="../img/graduation-cap.png" alt="" />
              </div>
              <div className='resume-scroll-left'>
                <h1>FreeCodeCamp.org</h1>
                <div className="line"></div>
                <p>Learnt the basics to intermediate Javascript and became very fluent with the language. You can view this Certificate <a href="https://www.freecodecamp.org/certification/Izekorpaul/javascript-algorithms-and-data-structures" target='_blank' rel="noreferrer"><button className='btn'>Here</button></a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row resume-scroll' style={{ visibility: "hidden" }}><a href={resume} target='_blank'><button><i class="fa-solid fa-download"></i> Download CV</button></a></div>
      <div className='navigation'>
        <button className='next resume-scroll-left'><Link to='/projects'><i className="fa-solid fa-arrow-left"></i> <strong>About</strong></Link></button>
        <div></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  max-width: 1540px;
  margin: 0 auto;
  padding: 70px 15px 30px;

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1140px;
  margin: 0 auto 30px auto;
}

.row button {
  font-size: 16px;
  padding: 6px 12px;
  color: #fff;
  background: rgb(67, 67, 179);
  border: 2px solid silver;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all .3s ease-out 0s;
}

.row button:hover {
 background-color: rgba(109,32,197,.8431372549019608);
 border: 2px solid rgba(109,32,197,.8431372549019608);
}

.credentials {
  max-width: 1140px !important;
  margin: 0 auto;
  padding: 50px 0 0 0 !important;
}

.credentials h5 {
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
  color: #A9A9A9;
}

.credentials p {
  color: #A9A9A9;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
}

.my-credentials {
  padding: 80px 0 0 0;
}

.cred {
  padding: 50px 0 0 0 !important;
}

.my-credentials h1 {
  font-size: 30px;
  font-weight: 600;
  margin: 0 0 24px 0 !important;
  padding: 0 !important;
  text-align: center;
}

.experience {
  display: flex;
  justify-content: space-between;
  height: 250px;
  padding: 20px 0 0 0;
}

.title {
  width: 40%;
  padding: 0px 60px 20px 1px;
}

.title p, .title h1 {
  text-align: right !important;
  color: #A9A9A9;
  font-weight: 500;
}

.title h1 {
  margin: 0 0 0px !important;
  font-size: 20px;
  font-weight: 700;
}

.title p {
  font-size: 16px;
  margin: 0 0 16px;
  line-height: 30px;
}

.writeup p, .writeup h1 {
  text-align: left !important;
  font-weight: 500;
  color: #A9A9A9;
}

.writeup {
  width: 60%;
  text-align: left !important;
  border-left: 1px solid #A9A9A9;
  padding: 0px 1px 20px 60px;
  position: relative;
}

.writeup h1 {
  margin: 0 0 8px !important;
  font-size: 20px;
  font-weight: 700;
}

.writeup p {
  font-size: 16px;
  margin: 0 0 16px;
  line-height: 30px;
}

.line {
  width: 40px;
  height: 2px;
  background: white;
  margin: 0 0 24px;
}

.img {
  position: absolute;
  left: 0;
  position: absolute;
  left: -35px;
  top: -20px;
  background-color: #000000;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.exp {
  border-left: none !important;
}

@media screen and (max-width: 1200px) {
  
      padding: 70px 30px 0px;
  .row {
      max-width: 960px;
  }
  .credentials {
      max-width: 960px !important;
      padding: 20px 0 0 0 !important;
  }
  .my-credentials {
      padding: 50px 0 0 0;
  }
}
@media screen and (max-width: 767px) {
  .row {
      max-width: 400px;
  }
  
      padding: 70px 30px 0px;
  .credentials {
      max-width: 460px !important;
      padding: 0px 0px 0 20px !important;
  }
  .my-credentials {
      padding: 20px 0 0 0;
  }
  .credentials h5 {
      font-size: 25px;
  }
  .credentials p {
      font-size: 14px;
      line-height: 25px;
  }
  .experience {
      flex-direction: column;
      height: max-content;
      position: relative;
      padding: 0 !important;
      margin: 20px 0 0 0 !important;
      border-left: 1px solid #A9A9A9;
  }
  .title {
      width: 100%;
      padding: 0px 1px 20px 35px !important;
      margin-top: -15px;
  }
  .writeup {
      width: 100%;
      padding: 0px 1px 20px 35px !important;
      position: static !important;
      border: none;
  }
  .title h1, .title p {
      text-align: left !important;
  }
  .my-credentials h1 {
      font-size: 23px;
      margin: 0 0 40px 0 !important;
  }
  .writeup h1 {
      margin: 0 0 8px 0 !important;
  }
  .title h1 {
      margin: 0 !important;
      font-size: 16px;
  }
  .writeup p {
      font-size: 14px;
      line-height: 25px;
  }
  .writeup h1 {
      margin: 8 !important;
      font-size: 16px;
  }
  .title p {
      font-size: 14px;
  }
  .ex {
      border: none;
  }
  .img {
      left: -25px;
      top: -20px;
      width: 50px;
      height: 50px;
  }
  .img img {
      width: 20px;
  }
  .cred {
      padding: 40px 0 0 0 !important;
  }
}
`

export default Resume
