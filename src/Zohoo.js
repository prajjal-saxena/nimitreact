import React from 'react';
import zoho from './img/zoho.png';
import zohomo from './img/zohomo.png';
import zohocrm from './img/zohocrm.png';

const Zohoo = () => {
  return (
    <>
      <section class="azure">
    <img src={zoho} alt="" class="section-gap-bottom"/>
    
    <div class="container">
      <div class="zohomo">
        <div>
          <img src={zohomo} class="up-down" alt=""/>
        </div>
        <div class="section-gap-bottom zoho-privacy">
           <p>Zoho Mail is an excellent email service that is clean, fast, and offers better protection against fake emails.</p>
           <p>Zoho Mail's data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Benefit from secure email hosting that supports encryption both at rest and in transit, along with S/MIME message encryption.</p>
           <p>Zoho Mail's email, internal client-focused communications (the streams function and “comment-on/share-emails” functionality) is amazing! Every small business will require email and some sort of office productivity suite, and there are multiple options available. Zoho Mail starts with free 5GB of storage for up to five mailboxes, plus 1GB of cloud storage.</p>
        </div>
      </div>

      <div class="section-gap-bottom">
        <h2>Unparalleled security and privacy</h2>
        <p>Zoho Mail's data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Benefit from secure email hosting that supports encryption both at rest and in transit, along with S/MIME message encryption.</p>
        <p>Zoho Mail's powerful Control Panel is the admin's go-to place for all settings, configuration, and customization. Add users, manage group aliases, set up policies to moderate business email content, and more.</p>
      </div>
    </div>

    <div class="container">
      <div class="zohocrm">
        <h2>ZOHO CRM</h2>
        <img src={zohocrm} alt=""/>
          <p>Integrate the power of CloudTalk’s virtual phone system with Zoho CRM and add call center features to your business CRM. CloudTalk offers virtual phone numbers (160+ countries), system integration with 25+ popular tools, and  & 100+ advanced call center features like a click-to-call feature, call recordings, smart dialer, and much more.</p>

      </div>
    </div>
</section> 
    </>
  )
}

export default Zohoo