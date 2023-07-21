import React from 'react'
import ProductCat from '../ProductCat'
import Services from '../Services'
import Solutions from '../Solutions'
import Testimonials from '../Testimonials'
import Vision from '../Vision'
import styled from 'styled-components'
// import cover from '../img/cover.png';
import video from '../img/video.mp4';
import gif from '../img/arrow.gif';


const indexPage = () => {
  return (
    <>
      <Wrapper className="cover-section">
          <div className="cover">
              
        <div className='coverimg videoContainer hide-for-small-only'>
            <div className="overlay"></div>
            {/* <img src={cover} width="100%" alt="" /> */}
            <video className='videoTag' autoPlay loop muted id='video' style={{backgroundImage: "#000"}}>
                <source src={video} type='video/mp4' />
            </video>
            <div className='best-so' style={{zIndex:"1000"}}>
              <p>Best Solutions</p>
              <h1>For Your</h1>
              <h1>BUSINESS GROWTH</h1>
            </div>
            <div>
              <img src={gif} className='giff' alt="" />
            </div>
        </div>

             <div className="container">
                <ProductCat/>
             </div>
             <Solutions/>
             <Services/>
             <Vision/>
             <Testimonials/>
          </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.giff{
    position: absolute;
    bottom: 120px;
    width: 11%;
    right: 85px;
    z-index: 100;
}
 .best-so{
      /* background: rgb(0 0 0 / 60%); */
      color: #f1f1f1;
   }
   .best-so {
      position: absolute;
      top: 97px;
      /* width: 100%;
      height: 388px; */
      padding-top: 165px;
      padding-left: 84px;
    }
    #video{
      position: relative;
      z-index: -1;
      width: 100%;
    }
    .videoContainer {
    position: relative;
    width: 100%;
    height: 100%;
    //padding: 20px;
    border-radius: 5px;
    background-attachment: scroll;
    overflow: hidden;
}
.videoContainer video {
    min-width: 100%;
    min-height: 100%;
    position: relative;
    z-index: 1;
}
.videoContainer .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    background: #000;
    opacity: 0.5;
}
@media only screen and (max-width: 600px){
  .best-so{
    padding-top: 55px!important;
    padding-left: 22px;
  }
}
`;

export default indexPage
