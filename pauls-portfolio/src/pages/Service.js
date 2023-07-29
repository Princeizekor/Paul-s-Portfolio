import React from 'react'
import { ServiceData } from '../ServiceData'
import styled from 'styled-components'

function Service() {
    return (
        <Wrapper id="service">
            <h1>Service</h1>
            <h2 className='skill'>What Can I Do For You?</h2>
            <div className="card-wrapper">
                {
                    ServiceData.map((item, i) =>
                        <div key={i} className='cards'>
                            <img src={item.image} alt="card image" />
                            <h2>{item.title}</h2>
                            <hr width="100px" color="white"></hr>
                            <p>{item.detail}</p>
                        </div>
                    )
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    padding: 50px;
    height: auto;
    margin: 0% auto;
    background-color: rgb(10, 10, 10);

 h1 {
    color: rgb(128, 29, 221);
    margin: 0%;
    font-size: 40px;
    font-weight: 700;
}

.skill {
    color: whitesmoke;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 4%;
}

.card-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 40px;
}

.cards {
    background: rgb(34, 33, 33);
    width: 30%;
    height: 280px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
    transition: 0.3s all ease;
    &:hover {
        transform: translateY(5%);
        transition: 0.3s all ease;
    }
    img {
        margin-top: 5%;
    }
    h2 {
        font-size: 15px;
        margin-top: 5%;
    }
    hr {
        margin-top: 5%;
    }
    p {
        margin-top: 5%;
        font-size: 15px;
        font-weight: 400;
    }
}

@media (max-width: 1023px) {
        width: 100%;
        padding: 50px;
        margin: 0%;
    
    .card-wrapper {
        padding: 25px;
        gap: 50px;
    }
    
    .cards {
        width: 45%;
        padding: 20px;
        img {
            margin-top: 4%;
        }
    }
}

@media (max-width: 767px) {
        width: 100%;
        margin: 0%;
    
    .card-wrapper {
        padding: 20px;
        gap: 30px;
    }
    
    .cards {
        width: 45%;
        height: 280px;
    }
}

@media (max-width: 540px) {
    .card-wrapper {
        flex-wrap: unset;
        flex-direction: column;
        gap: 30px;
        padding: 0;
    }
    
    .cards {
        width: 100%;
        height: 280px;
    }

    .skill {
        font-size: 20px;
    }
}
`

export default Service
