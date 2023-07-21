import React from 'react'
import styled from 'styled-components'

const contactus = () => {
  return (
    <>
    <Wrapper>
<section class="contact-us-content mb-4">
        <div class="container">

            <div class="cont">
                <div class="cont-data">
                    <form action="./send.php" id="form" method='post'>
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" id="from_name" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="city" id="city" aria-describedby="emailHelp" placeholder="City"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="address" id="address" aria-describedby="emailHelp" placeholder="Address"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="contact" id="contact" aria-describedby="emailHelp" placeholder="Contact number"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="email" id="email_id" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" aria-describedby="emailHelp" placeholder="Subject"/>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" id="message" rows="3" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" id="button" value="Send Email">Submit</button>
                    </form>
                </div>
                
          
     
                <div class="cont-map">
                    <iframe width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6503479842672!2d77.31688587430868!3d28.580260486454605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5343fa4859d%3A0xb8a5597e328f54fc!2sNimit%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1683105809139!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                
                </div>
            </div>
        </div>
    </section>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  .cont {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 80vh;
}
iframe{
  height: 80vh;
}
.cont-data {
  width: 51%;
  display: flex;
    flex-direction: column;
    justify-content: center;
}
.cont-map {
  width: 45%;
}
i.fa.fa-times-circle {
  display: block!important;
  width: 100%!important;
  text-align: end!important;
  margin-bottom: 8px!important;
  cursor: pointer;
}
.form-group {
  margin-bottom: 4px;
}
.cont-data {
  width: 51%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
  padding: 40px;
}
.cont-map {
  width: 49%;
}
section.contact-us-content {
    margin-top: 100px;
}
@media (max-width: 700px) {
    iframe {
    height: 40vh;
  }

  .cont{
    height: unset;
  }
  .cont-data{
    width: 100%;
  }
  .cont-map{
    width: 100%;
  }
}
`
export default contactus