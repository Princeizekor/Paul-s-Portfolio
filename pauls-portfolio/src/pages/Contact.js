import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Contact() {
  const ContactData = [
    {
      id: 1,
      name: 'WHATSAPP ME',
      detail: 'Click to send me a Whatsapp message',
      link: 'https://wa.me/qr/6SVGOAZCP63JF1',
      img: '/img/whatsapp-logo-png-hd-2.png'
    },
    {
      id: 2,
      name: 'EMAIL ME AT',
      detail: 'Click to Email me',
      link: 'mailto:izekorpaul0@gmail.com',
      img: '/img/carbon_email.png'
    },
    {
      id: 3,
      name: 'CALL ME AT',
      detail: 'Phone: +2348124688722',
      link: 'Tel:08124688722',
      img: '/img/ic_round-call.png'
    }
  ]
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
    <Wrapper id="contact">
      <h1>Contact</h1>
      <h2 className="contact-title">I'd Love To Hear From You</h2>
      <p className="discuss">I'm always open to discussing web development and programming in general.</p>
      <div className="hire">
        {
          ContactData.map((item, i) =>
            <div className="contact-detail" key={i}>
              <a href={item.link} target="_blank">
                <img src={item.img} alt="whatsapp image" />
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </a>
            </div>
          )
        }
      </div>
      <hr style={{backgroundColor: 'black', width: '90%', margin: '0% auto'}}/>
      <div className="links">
        <div className="icons-footer">
          <div className="name">
            &copy; Paul Izekor
          </div>
          {
            icons.map((item) =>
              <Link to={item.link} target="_blank">
                <img src={item.image} alt="Facebook icon" />
              </Link>
            )
          }
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.footer`
  color: rgb(128, 29, 221);
  text-align: center;
  padding: 40px 0px 0px 0px;
  max-width: 1440px;
  margin: 0% auto;
  height: auto;
 h1 {
  margin: 0%;
  font-size: 40px;
  font-weight: 700;
}

.contact-title {
  font-size: 40px;
  font-weight: 400;
  color: whitesmoke;
}
.discuss {
  color: silver;
}
.hire {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 70px;
  justify-content: space-between;
}

.contact-detail {
  a {
    text-decoration: none;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    margin-top: 2%;
  }
  img {
    margin-bottom: 2%;
    width: 50px;
    height: 50px;
  }
}

.links {
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 70px;
}

.name {
  color: whitesmoke;
}
.icons-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 767px) {
      width: 100%;
      margin: 0%;

  .hire {
      width: 100%;
      padding: 50px;
  }
  
  .links {
      padding: 50px;
  }
}

@media (max-width: 560px) {
      padding: 20px 0px 0px 0px;
  
  .contact-title {
      font-size: 20px;
  }

  .hire {
      width: 100%;
      padding: 30px;
      flex-direction: column;
  }
  
  .contact-detail {
      margin-top: 35px;
  }
}
`

export default Contact
