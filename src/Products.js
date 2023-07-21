import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';


const API = "https://nimittech.com/nimitapi/solution.php"

const Products = () => {
  const [state, setState] = useState([]);
  const {id} = useParams();

  const getProduct = async(url) =>{
     const res = await axios.get(url);
     const product = await res.data;
     return setState(product[0].status)
  }

  useEffect(()=>{
     getProduct(`${API}?id=${id}`);
  },[])
  return (
    <Wrapper className="container mbottom">
      
         <div className="sol">
            {
               state.map((solu)=>(
                 <div className='sol-content' key={solu.id}>
                    <img src={solu.link} alt="" style={{height: "203px"}}/>
                    <p>{solu.name}</p>
                 </div>
               ))
            }
         </div>
      </Wrapper>
  )
}
const Wrapper = styled.section`
    .sol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 129px;
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
    @media (max-width: 700px){
        .sol-content {
            width: 50%;
        }
    
    }
    @media (max-width: 456px){
        .sol-content{
            width: 100%;
        }
    }

`

export default Products