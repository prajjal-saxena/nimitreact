import React from 'react'
import basic from './img/basic.png';
import img365 from './img/img365.png';
import bussstandard from './img/buss-standard.png';
import busspremium from './img/buss-premium.png';
import o365 from './img/o365.png';

const Office365 = () => {
  return (
    <div>
        <section class="office-365">
    <div class="co">
       <img src={o365} alt=""/>
    </div>
    <div class="container">
      <div class="o-365 section-gap-bottom">
        <div class="buss-basic o365basic">
          <h2>Microsoft 365 Business Basic</h2>
          <p></p>
          <p>(Annual subscription–auto renews)<br/>
            GST extra as applicable</p>
          <button class="btn btn-primary">Buy now</button><br/><br/>
          <p><i class="fa fa-check" aria-hidden="true"></i>Chat, call, meet up to 300 attendees</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Web and mobile versions of Office apps</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>1 TB of cloud storage</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Business-class email</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Standard security</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Anytime phone and web support</p>
          <p>Apps and services included</p>
          <img class="plans" src={basic} alt=""/>
        </div>

        <div class="buss-basic o365basic">
          <h2>Microsoft 365 Apps for business</h2>
          <p></p>
          <p>(Annual subscription–auto renews)<br/>
            GST extra as applicable</p>
          <button class="btn btn-primary">Buy now</button><br/><br/>
          <p><i class="fa fa-check" aria-hidden="true"></i>Desktop versions of Office apps with premium features</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>1 TB of cloud storage</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Standard security</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Anytime phone and web support</p>
          <p>Apps and services included</p>
          <img class="plans1" src={img365} alt=""/>
        </div>

        <div class="buss-basic o365basic">
          <h2>Microsoft 365 Business Standard</h2>
          <p></p>
          <p>(Annual subscription–auto renews)<br/>
            GST extra as applicable</p>
          <button class="btn btn-primary">Buy now</button><br/><br/>
          <h2>Everything in Business Basic, plus:</h2>
          <p><i class="fa fa-check" aria-hidden="true"></i>Desktop versions of Office apps with premium features</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Easily host webinars</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Attendee registration and reporting tools</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Manage customer appointments</p>
          <p>Apps and services included</p>
          <img class="plans2" src={bussstandard} alt=""/>
        </div>

        <div class="buss-basic o365basic">
          <h2>Microsoft 365 Business Premium</h2>
          <p></p>
          <p>(Annual subscription–auto renews)<br/>
            GST extra as applicable</p>
          <button class="btn btn-primary">Buy now</button><br/><br/>
          <h2>Everything in Business Standard, plus:</h2>
          <p><i class="fa fa-check" aria-hidden="true"></i>Advanced security</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Access and data control</p>
          <p><i class="fa fa-check" aria-hidden="true"></i>Cyberthreat protection</p>
          <p>Apps and services included</p>
          <img class="plans3" src={busspremium} alt=""/>
        </div>
      </div>
    </div>
</section>
    </div>
  )
}

export default Office365