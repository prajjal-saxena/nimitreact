import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import  styled  from 'styled-components';

const API = "https://nimittech.com/nimitapi/solution.php";
const Solutions = () => {
  const [sol, setSol] = useState([]);
  
  const fetchData = () =>{
     fetch(API)
        .then(response => {
          return response.json();
        })
        .then(data => {
            setSol(data)
        })
  }

  useEffect(()=>{
     fetchData();
  },[])
  return (
    <>
      <Wrapper className="container mbottom">
      
         <div className="sol">
            {
               sol.map((solu)=>(
                 <div className='sol-content' key={solu.id}>
                  <NavLink to={`/products/${solu.id}`}>
                    <img src={solu.photo} alt="" />
                    <p>{solu.title}</p>
                  </NavLink>
                 </div>
               ))
            }
         </div>
      </Wrapper>
    </>
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
    @media only screen and (max-width: 600px){
      .sol-content{
        width: 100%;
      }
      .sol-content img{
        height: 174px;
      }
    }
`

export default Solutions