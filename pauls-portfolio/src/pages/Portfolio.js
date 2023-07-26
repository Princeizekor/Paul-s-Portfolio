import React from 'react'
import { PortfolioData } from '../PortfolioData'

function Portfolio() {
  return (
    <div id='portfolio'>
      <h1>Portfolio</h1>
      <h2 className='work'>Check out some of my work</h2>
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
              <button className="hire-button">
                <a href={item.link} target='_blank'>VIEW PAGE</a>
              </button>
            </div>
          </div>
        )
      }
      <h2 style={{ color: 'whitesmoke' }}><a href="https://github.com/Princeizekor" style={{ color: 'rgb(128, 29, 221)' }}>And many more</a> click on the link to visit my github repository </h2>
    </div>
  )
}

export default Portfolio
