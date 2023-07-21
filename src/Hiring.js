import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const API = 'https://nimittech.com/nimitapi/hiring.php';

const Hiring = () => {
  const [hire, setHire] = useState([])
  const getFetch = async(url) =>{
     const res = await axios.get(url);
     const product = await res.data;
     setHire(product)
  }

  useEffect(()=>{
     getFetch(API)
  }, [])
  return (
    <Wrapper>
        <div className="container hiringg">
            <h1 className='text-center' style={{textDecoration: "underline"}}>Explore the New Opportunity</h1>
            {
                hire.map((elem)=>(
                    <>
                    <div key={elem.id}>
                        <h2>{elem.post_name}</h2>
                        <p><strong>Position :</strong>{elem.position}</p>
                        <p><strong>Experience :</strong>{elem.experience}</p>
                        <p><strong>Location :</strong>{elem.Location}</p>
                        <p><strong>Eligibility Criteria :</strong>{elem.criteria}</p>
                        <button className="btn btn-success">Contact Us: hr@nimittech.com, 9354375200</button>
                    </div>
                    <hr />
                    </>
                ))
            }
            
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
   
`;
export default Hiring