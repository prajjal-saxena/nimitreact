import React from 'react'
import styled from 'styled-components';
import vision from './img/vision.png';
import setting from './img/setting.png'

const Vision = () => {
  return (
    <Wrapper style={{background: `url('${vision}')no-repeat`}}>
        <div className="container">
            <div className="vision-content">
                <div className="vision vision1">
                    <p style={{fontSize: "9px", letterSpacing: "2px"}}><span><img src={setting} alt="" /></span>WHO WE ARE</p>
                    <h2 style={{fontSize: "20px", fontWeight: "800"}}>Who We Are & What We Do</h2>
                    <p>Nimit Technologies is a bridge between business needs and the world of Technologies. We see ourselves as preferred IT solutions partner. Our clients are our business partners and we listen to them, Identify-Integrate-Support High quality, affordable IT Solutions in Hardware, Software, Services, Mobility, Cloud Solutions, Flexibility and an attitude of Sewa.</p>
                </div>
                <div className="vision vision2">
                    <h2 style={{fontSize: "20px", fontWeight: "800"}}>OUR VISION</h2>
                    <p>Nimit Technologies is an IT Start-up company; where people came with ideas and a zeal to implement them, come together. A place where individuals are able to take success and failures in their stride. A platform where people challenge their own limits and extend their horizons.</p>
                </div>
                <div className="vision vision3">
                    <p style={{fontSize: "9px", letterSpacing: "2px"}}><span><img src={setting} alt="" /></span>THE ONE</p>
                    <h2 style={{fontSize: "20px", fontWeight: "800"}}>Trust Vision</h2>
                    <p> Nimit Technologies Private Limited is your technology Solution Provider and the Microsoft Partner Network (MPN) Member & (CSP) Microsoft Cloud Solution Provider.</p>
                    <p> Nimit Technologies Private Limited has been catering to the Indian market and hence, “Delivery of Time, Delivery of Quality” has been the mantra which has brought the company to where it stands today.</p>
                </div>
                <div className="vision vision4">
                    <h2 style={{fontSize: "20px", fontWeight: "800"}}>OUR MISSION</h2>
                    <p>Our mission is to provide "Affordable Tailor made Solutions and Deliver Cost Effective IT Services at Your Doorstep‍".</p>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   .vision-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 92px 8px;
    }
    .vision {
        width: 22%;
        padding: 21px;
        border: 2px solid #e5e5e5;
        border-radius: 10px;
    }
    .vision p{
        text-align: justify;
    }
    .vision1, .vision3{
        background: rgb(255 175 35 / 30%);
    }
    .vision2, .vision4{
        background: rgb(30 156 226 / 16%);
        margin-top: 47px;
    }
    @media only screen and (max-width: 600px){
       .vision{
         width: 100%;
       }
    }
`

export default Vision