  import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
  import styled from 'styled-components'

  const API = "https://nimittech.com/nimitapi/meet_our_team.php";

  const MetTeam = () => {

    const [team, setTeam] = useState([])

    const fetchData = () =>{
       fetch(API).then(response=>(
         response.json()
       )).then(data=>(setTeam(data)))
    }
  
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
      useEffect(()=>{
        fetchData();
      })
    return (
      <Wrapper className="container" style={{marginTop: "74px", marginBottom: "45px"}}>
          <h2 className='text-center' style={{marginBottom: "32px"}}>Meet Our Team Member</h2>
          <Slider {...testimo} className="testimonial">
                  {
                       team.map((elem)=>(
                        <>
                        <div className="team1 text-center">
                          <img width="80%" style={{height: "189px",margin: "auto"}} src={elem.photo} alt="" />
                          <p>{elem.name}</p>
                          <p>{elem.post}</p>
                        </div>
                        </>
                    ))
                  }
              </Slider> 
      </Wrapper>
    )
  }

  const Wrapper = styled.section`
     .team1{
      width: 95%;
      box-shadow: #e5e5e5 0px 0px 10px 0px;
      margin-bottom: 20px;
      border-radius: 10px;
      padding-bottom: 26px;
     }
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
          background: #0091be;
      }

      @media only screen and (max-width: 600px){
        .testimonial .slick-list{
           margin-left: 57px !important;
        }
        .slick-list {
            width: 72%!important;
        }
        .testimonial p{
          font-size: 9px!important;
        }
        .test-content {
          padding: 6px;
        }
      }
  `;
  export default MetTeam
