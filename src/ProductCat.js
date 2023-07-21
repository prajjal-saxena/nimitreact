import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'

const API = "https://nimittech.com/nimitapi/authorised_partner.php";
const ProductCat = () => {
  const [users, setUsers] = useState([])

    const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      
    ]
  };

  const fetchData = () => {

    fetch(API)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
    <>
    <section className='top-sell mbottom'>
     <div className="top-selling">
          <p style={{fontSize: "20px", fontWeight: "800"}}>Top Selling</p>
          <p style={{fontSize: "25px"}}>Product Categories</p>
       </div>
    <Slider {...settings}>
       {
        users.map((item)=>(
          <div className='partner' key={item.id}>
             <img width="100%" src={item.partner} alt="" />
           </div>
        ))
       }  
    </Slider>
    </section>
    </>
  )
}

export default ProductCat