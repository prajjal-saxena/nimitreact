import React from 'react';
import team4 from './img/team4.png'
import styled from 'styled-components';
import MetTeam from './components/MetTeam';
import dir from './img/dir.png'

const Nimitteam = () => {
  return (
    <Wrapper className='nimiteam' style={{marginTop: "122px"}}>
       <div className="container">
           <div className="team row d-flex justify-content-between">
              <div className='col-12 col-sm-6 d-flex flex-column justify-content-center order-2 order-md-1'>
                <p>A hard thing is done by figuring out how to start.Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible.You have to have confidence in your ability, and then be tough enough to follow through.</p>
                <p><strong>Upasana Anand (Founder)</strong></p>
              </div>
              <div className='col-12 col-sm-6 text-end order-md-2 order-0'>
                 <img width="80%" src={team4} alt="" />
              </div>
           </div>
       </div>

       <div className="container" style={{marginTop: "86px"}}>
           <div className="team row d-flex justify-content-between">
              <div className='col-12 col-sm-6'>
                 <img width="80%" src={dir} alt="" />
              </div>
              <div className='col-12 col-sm-6 d-flex flex-column justify-content-center'>
                    <p>“Today we are a leading system integrator and an IT infrastructure provider. We believe in tech that works for you, not tech you have to figure out. We work to help you make easier, smart decisions for your growth. Good leadership creates followers while great leadership creates leaders.</p>
                    <p><strong>Ajit Kumar Sinha (Co- Founder)</strong></p>
              </div>

           </div>
       </div>

       <MetTeam/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 
`
export default Nimitteam