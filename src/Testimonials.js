import React, {useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import testimonialData from './testimonialdata';
import testback from './img/it-solution.jpg';
import black from './img/black.jpg'

const Testimonials = () => {
    const [state] = useState(testimonialData);

    const testimo = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
         
        ]
      };
  return (
    <>
      <Wrapper style={{background: `url('${testback}') no-repeat center center`}}>
         <div className="container">
            <Slider {...testimo} className="testimonial">
                {
                    state.map((curElem)=>(
                        <div className='test1' key={curElem.id}>
                            <div className="test-content" style={{background: `url('${black}') no-repeat`,color: "#f1f1f1"}}>
                                <span><i className="fa fa-quote-left" style={{color: "#cb6a2f"}} aria-hidden="true"></i></span>
                                <p style={{textAlign:"center"}}>{curElem.title}<span><i className="fa fa-quote-right" style={{position: "relative", top: "7px",marginLeft: "13px",color: "#cb6a2f"}} aria-hidden="true"></i></span></p>
                                <p style={{textAlign:"end"}}>{curElem.name}</p>
                            </div>
                            <div style={{width: "20px", height: "20px", transform: "rotate(136deg)",position: "relative",bottom: "10px",display:"block",margin:"auto",background: `url('${black}') no-repeat`}}></div>
                        </div>
                    ))
                }
            </Slider> 
         </div>
      </Wrapper> 
    </>
  )
}

const Wrapper = styled.section`
   .test1{
      padding: 12px;
   }
   .test-content {
        border: 1px solid #000;
        padding: 23px;
        border-radius: 8px;
        /* background: rgb(206 206 206); */
        position: relative;
        z-index: 99;
    }
   .testimonial .slick-next {
    right: 40px;
    left: auto;
   }
   .testimonial .slick-prev {
      left: 20px;
   }
   .testimonial .slick-list{
    margin-left: 100px!important;
    padding-top: 37px!important;
   }
   .testimonial .slick-slide > div {
        transform: scale(0.8);
        transition: transform .3s cubic-bezier(.4,0,.2,1);
    }
    .testimonial .slick-center > div {
       transform: scale(1.2);
    }
    .testimonial .slider__item > img {
        width: 100%;
        height: auto;
    }
    .testimonial .slick-prev:before, .slick-next:before{
        background: transparent;
    }

    @media only screen and (max-width: 600px){
      .testimonial .slick-list{
         margin-left: 57px !important;
      }
      .slick-list {
          width: 72%!important;
      }
      .testimonial p{
        font-size: 9px;
      }
    }
`

export default Testimonials