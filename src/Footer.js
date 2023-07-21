import React from 'react';
import logo from './img/logo.png'
import styled from 'styled-components';
import fb from './img/fb.png';
import linkdin from './img/linkedin.png';
import tweet from './img/twitter.png';
import qr from './img/qrcode.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
      <div className='footer row'>
        <div className='foot footer1 col-12 col-md-3'>
          <img src={logo} alt="" />
        </div>
        <div className='foot footer2 col-12 col-md-3'>
           <p><span style={{marginRight: "5px",fontSize:"22px"}}>&#129170;</span><Link to="/">Home</Link></p>
           <p><span style={{marginRight: "5px",fontSize:"22px"}}>&#129170;</span>About Us</p>
           <p><span style={{marginRight: "5px",fontSize:"22px"}}>&#129170;</span>Contact Us</p>
        </div>
        <div className='foot footer3 col-12 col-md-3'>
           <p>IT Solutions</p>
           <ul>
             <li><Link to="/hardware">Hardware</Link></li>
             <li><Link to="/hardware">Network & Security</Link></li>
             <li><Link to="/hardware">Software Licensing</Link></li>
             <li><Link to="/hardware">Backup & Recovery</Link></li>
             <li><Link to="/hardware">Video & Conferencing</Link></li>
           </ul>
        </div>
        <div className="foot footer4 col-12 col-md-3">
           <p>IT Services</p>
           <ul>
             <li><Link to="/it-infrastructure">IT Infrastructure</Link></li>
             <li><Link to="/it-infrastructure">Data & Migration</Link></li>
             <li><Link to="/it-infrastructure">Software Licensing</Link></li>
             <li><Link to="/it-infrastructure">Backup & Recovery</Link></li>
             <li><Link to="/it-infrastructure">Video & Conferencing</Link></li>
           </ul>
        </div>
        
      </div>


      <div className='footer row'>
        <div className='foot footer1 col-12 col-md-3'>
        <p>IT Securities</p>
           <ul>
             <li><Link to="/hardware">Fortinet</Link></li>
             <li><Link to="/hardware">Web Firewall</Link></li>
             <li><Link to="/hardware">Securities Audits</Link></li>
             <li><Link to="/hardware">Threat Migration</Link></li>
             <li><Link to="/hardware">SSL</Link></li>
             <li><Link to="/hardware">Acronis</Link></li>
             <li><Link to="/hardware">Sophos Central</Link></li>
             <li><Link to="/hardware">Kaspersky</Link></li>
           </ul>
        </div>
        <div className='foot footer2 col-12 col-md-3'>
        <p>Cloud Solution</p>
           <ul>
             <li><Link to="/hardware">Google Workspace</Link></li>
             <li><Link to="/hardware">Office-365</Link></li>
             <li><Link to="/hardware">O365 Migration</Link></li>
             <li><Link to="/hardware">Zoho Workspace</Link></li>
             <li><Link to="/hardware">SSL</Link></li>
             <li><Link to="/hardware">Acronis</Link></li>
             <li><Link to="/hardware">Sophos Central</Link></li>
             <li><Link to="/hardware">Kaspersky</Link></li>
           </ul>
        </div>
        <div className='foot footer3 col-12 col-md-3'>
           <p>Development</p>
           <ul>
             <li><Link to="/hardware">Website Development</Link></li>
             <li><Link to="/hardware">Website Designing</Link></li>
             <li><Link to="/hardware">Mobile & IOS Development</Link></li>
             <li><Link to="/hardware">Wordpress Development</Link></li>
           </ul>
        </div>
        <div className="foot footer5 col-12 col-md-3">
        <img src={qr} alt="" />
            <p><a href="https://nimittech.com/vacancy/form.php" style={{color:'#f1f1f1', fontSize: '36px'}}>Career</a></p>
        </div>
      </div>


      <hr />
 
      <div className="container pb-3">
         <div className="row justify-content-center">
            <div className="col-1">
               <img width="100%" src={fb} alt="" />
            </div>
            <div className="col-1">
               <img width="100%" src={linkdin} alt="" />
            </div>
            <div className="col-1">
               <img width="100%" src={tweet} alt="" />
            </div>
         </div>
      </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
    background: rgb(96 106 110 / 65%);
    color: #fff;
   .footer{
     padding: 50px 10px;
   }
`;

export default Footer