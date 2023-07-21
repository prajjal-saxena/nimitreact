import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const API = "https://nimittech.com/nimitapi/our_services.php";


const Services = () => {
    const [users, setUsers] = useState([])

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
    <Wrapper className='container'>
       <div className="it-mgt-full">
         {
            users.map((curElem) =>{
                return (
                    <div className="it-full" key={curElem.id}>
                        <div className="it-service-mgt">
                            <div className="logoitser">
                                <img src={curElem.link} alt="" />
                            </div>
                            <div className="itserpara"><p>{curElem.title}</p></div>
                            <div className="itserid">0{curElem.id}</div>
                        </div>
                        <div className="it-mgt2">
                            <p>{curElem.description}</p>
                        </div>
                    </div>
                )
            })
         }
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .it-mgt-full {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
   }
   .it-full {
    width: 24%;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 14px;
    padding: 13px;
    background: #cecece66;
   }
   .it-service-mgt {
    display: flex;
    justify-content: space-between;
   }
   .logoitser {
    width: 24%;
   }
   .logoitser img {
    width: 100%;
   }
   .it-mgt2 p {
    text-align: justify;
    font-size: 14px;
    padding-top: 22px;
   }
   .itserpara {
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center
   }
   .itserpara p {
      font-size: 18px;
      text-align: center;
      line-height: 17px;
      font-weight: 800;
   }
   .itserid {
     width: 10%;
     color: #0091be;
     font-size: 27px;
     font-weight: 900;
   }
   @media only screen and (max-width: 600px){
      .it-full{
         width: 100%;
      }
   }
`
export default Services