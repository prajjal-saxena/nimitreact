import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const API = "https://nimittech.com/nimitapi/life_at_nimit.php";

const LifeNimit = () => {
  const [sol, setSol] = useState([]);

  const getLife = async(url) =>{
     const res = await axios.get(url);
     const result = await res.data;
     setSol(result);
  }

  useEffect(()=>{
     getLife(API);
  },[])
  return (

    <div className='container'>

        <Wrapper className="container mbottom">
            <div className="celebration" style={{marginTop: "138px"}}>
                <h1>Events, Functions, Celebration And Much More</h1>
                <div className="sol cele">
                    {
                        sol.map((solu)=>(
                        <div className='sol-content cele-content hol' key={solu.id}>
                        <NavLink to={`/celebration/${solu.id}`}>
                            <img src={solu.photo} alt="" />
                            <p>{solu.title}</p>
                        </NavLink>
                        </div>
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    </div>
  )
}
const Wrapper = styled.section`
    .sol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .sol-content {
        width: 24%;
    }
    .sol-content img {
        width: 100%;
    }
    .sol-content p {
        background: #000000ab;
        color: #f1f1f1;
        position: relative;
        top: -23px;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 800;
    }
    .cele{
        justify-content: space-around!important;
    }
    .cele-content{
        width: 40%!important;
    }
    .cele-content img{
        height: 318px;
    }
    @media only screen and (max-width: 600px){
      .sol-content{
        width: 100%!important;
      }
      .sol-content img{
        height: 174px;
      }
    }
`
export default LifeNimit