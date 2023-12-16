import React from 'react'
import { PortfolioData } from '../PortfolioData'
import styled from 'styled-components'

function Portfolio() {
  return (
    <Wrapper id='portfolio'>
      <h1>Portfolio</h1>
      <h2 className='work'>Check Out Some Of My Work</h2>
      {
        PortfolioData.map((item, i) =>
          <div key={i} className='jobs'>
            <div className="job-img-wrapper">
              <img className="job-image" src={item.img} alt="website image" />
            </div>
            <div className="job-text">
              <h2 className="page-name">{item.name}</h2>
              <h2 className="page-tools">{item.skill}</h2>
              <p className="page-detail">{item.detail}</p>
              <a href={item.link} target='_blank'><button className="page-button">
                VIEW PAGE
              </button></a>
            </div>
          </div>
        )
      }
      <h2 style={{ color: 'whitesmoke' }}><a href="https://github.com/Princeizekor" style={{ color: 'rgb(128, 29, 221)' }}>And many more</a> click on the link to visit my github repository </h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
  height: auto;
  margin: 0% auto;
  padding: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
h1 {
  color: rgb(128, 29, 221);
  margin: 0%;
  font-size: 40px;
  font-weight: 700;
}

.work {
  color: whitesmoke;
  font-size: 40px;
  font-weight: 500;
}

.jobs {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.job-img-wrapper {
  width: 40%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  background: rgb(34, 33, 33);
}
.job-image {
  width: 100%;
  object-fit: contain;
}

.job-text {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  width: 50%;
}
.page-name {
  font-size: 25px;
  font-weight: 500;
  color: rgb(128, 29, 221);
  margin-bottom: 30px;
}
.page-tools {
  color: grey;
  margin-bottom: 30px;
}
.page-tools,
.page-detail {
  font-size: 15px;
  font-weight: 200;
  margin-bottom: 30px;
}
.page-button {
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
  &:hover {
    background: rgb(67, 67, 179);
    color: whitesmoke;
    transition: 1s all ease;
  }
}


@media (max-width: 1023px) {
      width: 100%;
      margin: 0%;
      padding: 50px;

  .job-img-wrapper {
      width: 500px;
      height: 300px;
  }
  
  .jobs {
      width: 100%;
      margin-top: 30px;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
  }
  .job-text {
      width: 100%;
  }
}

@media (max-width: 767px) {
      width: 100%;
      margin: 0%;

  .jobs {
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 30px;
      justify-content: center;
  }
}

@media (max-width: 540px) {
  .job-img-wrapper {
      padding: 10px;
      width: 100%;
      height: 100%;
  }
  .job-image {
      width: 100%;
  }
  .work {
      font-size: 25px;
  }
  .page-button {
      width: 100%;
      height: 40px;
      font-size: 12px;
  }
}
`

export default Portfolio
