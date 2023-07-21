import React, {useEffect} from 'react'
import '../App.css'
import logo from '../img/logo.png'
import fb from '../img/fb.png';
import ld from '../img/linkedin.png';
import twitter from '../img/twitter.png';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const Navbarrr = () => {
  
  useEffect(() => {
    window.addEventListener("scroll", function(){
      var header = document.querySelector(".navbar");
      if(header.classList.toggle("fixed", window.scrollY > 20)){
         header.style.top = "0px";
      }
      else{
         header.style.top = "34px";
      }
    }) 
    });
  return (
    <>
  <Wrapper>
  <div className="contact-upper container">
     <div className='contact1 cont2'>
        <Link to='/contact'><p><span style={{marginRight:"10px"}}><strong><i className="fa fa-phone" aria-hidden="true"></i></strong></span><strong>CONTACT US</strong></p></Link>
     </div>
     <div className='contact1'>
        <p><span style={{marginRight:"10px"}}><strong><i className="fa fa-envelope" aria-hidden="true"></i></strong></span>marketing@nimittech.com</p>
     </div>
     <div className='contact1 logoimg'>
        <p className=''><img width="50%" src={fb} alt="" /></p>
        <p className=''><img width="50%" src={ld} alt="" /></p>
        <p className=''><img width="50%" src={twitter} alt="" /></p>
     </div>  
  </div> 

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} href="/" to="/" className='navlog'><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={NavLink} href="/" to="/" style={{color:"#f1f1f1", padding: "10px"}}>HOME</Nav.Link>
            <NavDropdown title="IT SOLUTIONS" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} href="/hardware" to="/hardware">Hardware</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/hardware">Network Security</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/hardware">Software Licensing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/hardware">Backup & Recovery</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/hardware">Video Conferencing</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown  style={{color:"#f1f1f1"}} title="IT SERVICES" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} href="/it-infrastructure" to="/it-infrastructure">IT Infrastructure</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-infrastructure" to="/it-infrastructure">Data & Migration</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-infrastructure" to="/it-infrastructure">Software Licensing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-infrastructure" to="/it-infrastructure">Backup & Recovery</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-infrastructure" to="/it-infrastructure">Video Conferencing</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown  style={{color:"#f1f1f1"}} title="IT SECURITIES" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} href="/it-securities" to="/it-securities">Fortinet</NavDropdown.Item>
                <NavDropdown.Item as={NavLink}href="/it-securities" to="/it-securities">Web Firewall</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-securities" to="/it-securities">Securities Audits</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-securities" to="/it-securities">Threat Migration</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-securities" to="/it-securities">SSL</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-securities" to="/it-securities">Acronis</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-securities" to="/it-securities">Sophos Central</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/it-securities" to="/it-securities">Kaspersky</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  style={{color:"#f1f1f1"}} title="CLOUD SOLUTIONS" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} href="/google-workspace" to="/google-workspace">Google Workspace</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/office-365" to="/office-365">Office- 365</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/o365-migration" to="/o365-migration">O365 Migration</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/zoho" to="/zoho">Zoho Workspace</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/dropbox">Dropbox Business</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/microsoft-azure">Microsoft Azure</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/acronis">Acronis</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/atempo-live-navigator" to="/atempo-live-navigator">Atempo Live Navigator</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{color:"#f1f1f1"}} title="DEVELOPMENT" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} href="/web-development" to="/web-development">Website Development</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/web-development" to="/web-development">Website Designing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hardware" to="/hardware">Mobile & IOS Development</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/web-development" to="/web-development">Wordpress Development</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown  style={{color:"#f1f1f1"}} title="CAREER" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} href="/meet-our-team" to="/meet-our-team">Meet Our Team</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/life-at-nimit" to="/life-at-nimit">Life At Nimit</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} href="/hiring" to="/hiring">Hiring</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>

  {/* <nav collapseOnSelect className="navbar navbar-expand-lg">
        <div className="container-fluid container navib">
        <Link className="navbar-brand" to="/"><img className='logonimit' src={logo} alt=""/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="main_nav"  aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
          <li className="nav-item active"> <Link className="nav-link" to="/">HOME  |</Link> </li>
            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">IT SOLUTIONS  |</a>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/hardware">Hardware  &raquo;</Link> 
                  <ul className="submenu dropdown-menu">
                    <li><Link className="dropdown-item" to="/hardware">Laptop</Link></li>
                    <li><Link className="dropdown-item" to="/hardware">Workstation</Link></li>
                    <li><Link className="dropdown-item" to="/hardware">Server</Link>
                     
                    </li>
                    <li><Link className="dropdown-item" to="/hardware">Storage</Link></li>
                    <li><Link className="dropdown-item" to="/hardware">Printer</Link></li>
                    <li><Link className="dropdown-item" to="/hardware">UPS</Link></li>
                    <li><Link className="dropdown-item" to="/hardware">Peripherals</Link></li>
                  </ul>
                </li>
                <li> <Link className="dropdown-item" to="/network-security">Network & Security  &raquo;</Link>
                  <ul className="submenu dropdown-menu">
                    <li><Link className="dropdown-item" to="/network-security">Cisco</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Aruba</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Ruckus</Link>
                    </li>
                    <li><Link className="dropdown-item" to="/network-security">D-Link</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Netgear</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Sophos</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Sonicwall</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Paloalto</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Fortinet</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Symantec</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Kasperkey</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">K7</Link></li>
                    <li><Link className="dropdown-item" to="/network-security">Quickheal Sacorro</Link></li>





                  </ul>
                </li>
                <li><Link className="dropdown-item" to="/software-licensing">Software Licensing  &raquo;</Link>
                  <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to="/software-licensing">Microsoft</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Adobe</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Autodesk</Link>
                       
                      </li>
                      <li><Link className="dropdown-item" to="/software-licensing">Oracle</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">VMware</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Redhat</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Citrix</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Autodesk</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Symantec</Link></li>

                    </ul>
                </li>
                <li><Link className="dropdown-item" to="/backup-recovery">Backup & Recovery  &raquo;</Link>
                  <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to="/backup-recovery">On Premises</Link></li>
                      <li><Link className="dropdown-item" to="/backup-recovery">Cloud Solution</Link></li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="/video-conference">Video & Conferencing  &raquo;</Link>
                    <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to="/video-conference">Cisco</Link></li>
                      <li><Link className="dropdown-item" to="/video-conference">Polycom</Link></li>
                    </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown" id="myDropdown">
              <Link className="nav-link" to="/it-infrastructure" data-bs-toggle="dropdown">IT SERVICES  |</Link>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/it-infrastructure">IT Infrastructure  &raquo;</Link> 
                  <ul className="submenu dropdown-menu">
                    <li><Link className="dropdown-item" to="/it-infrastructure">Networking</Link></li>
                    <li><Link className="dropdown-item" to="/it-infrastructure">Hardware Software Management</Link></li>
                    <li><Link className="dropdown-item" to="/it-infrastructure">DC Colocation</Link>
    
                    </li>
                    <li><Link className="dropdown-item" to="/it-infrastructure">Architectural Management</Link></li>
                    <li><Link className="dropdown-item" to="/it-infrastructure">Cloud Services</Link></li>
                  </ul>
                </li>
                <li> <Link className="dropdown-item" to="/data-migration">Data & Migration  &raquo;</Link>
                  <ul className="submenu dropdown-menu">
                    <li><Link className="dropdown-item" to="/data-migration">On Premise to cloud</Link></li>
                    <li><Link className="dropdown-item" to="/data-migration">cloud to on premise</Link></li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="/software-licensing">Software Licensing  &raquo;</Link>
                  <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to="/software-licensing">Microsoft</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Adobe</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Autodesk</Link>
                       
                      </li>
                      <li><Link className="dropdown-item" to="/software-licensing">Oracle</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">VMware</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Redhat</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Citrix</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Autodesk</Link></li>
                      <li><Link className="dropdown-item" to="/software-licensing">Symantec</Link></li>

                    </ul>
                </li>
                <li><Link className="dropdown-item" to="/backup-recovery">Backup & Recovery  &raquo;</Link>
                  <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to="/backup-recovery">On Premises</Link></li>
                      <li><Link className="dropdown-item" to="/backup-recovery">Cloud Solution</Link></li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="/video-conference">Video & Conferencing  &raquo;</Link>
                    <ul className="submenu dropdown-menu">
                      <li><Link className="dropdown-item" to="/video-conference">Cisco</Link></li>
                      <li><Link className="dropdown-item" to="/video-conference">Polycom</Link></li>
                    </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown" id="myDropdown">
              <Link className="nav-link" to="/it-securities" data-bs-toggle="dropdown">IT SECURITIES  |</Link>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/it-securities">Fortinet</Link></li>
                <li> <Link className="dropdown-item" to="/it-securities">Web Firewall</Link></li>
                <li> <Link className="dropdown-item" to="/it-securities">Securities Audits</Link></li>
                <li> <Link className="dropdown-item" to="/it-securities">Threat Migration</Link></li>
                <li> <Link className="dropdown-item" to="/it-securities">SSL</Link></li>
                <li> <Link className="dropdown-item" to="/it-securities">Acronis</Link></li>
                <li> <Link className="dropdown-item" to="/it-securities">Sophos Central</Link></li>
                <li> <Link className="dropdown-item" to="/it-securities">Kaspersky</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">CLOUD SOLUTIONS  |</a>
              <ul className="dropdown-menu">
                <li> <a className="dropdown-item" href="#">Google Workspace</a></li>
                <li> <a className="dropdown-item" href="#">Office - 365</a></li>
                <li> <a className="dropdown-item" href="#">O365 Migration</a></li>
                <li> <a className="dropdown-item" href="#">Zoho Workspace</a></li>
                <li> <a className="dropdown-item" href="#">Google Workplace</a></li>
                <li> <a className="dropdown-item" href="#">Dropbox Business</a></li>
                <li> <a className="dropdown-item" href="#">Microsoft Azure</a></li>
                <li> <a className="dropdown-item" href="#">Acronis</a></li>
                <li> <a className="dropdown-item" href="#">Google Workspace</a></li>
                <li> <a className="dropdown-item" href="#">Atempo Live Navigator</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">DEVELOPMENT  |</a>
              <ul className="dropdown-menu">
                <li> <a className="dropdown-item" href="#">Website Development</a></li>
                <li> <a className="dropdown-item" href="#">Website Designing</a></li>
                <li> <a className="dropdown-item" href="#">Mobile & IOS Development</a></li>
                <li> <a className="dropdown-item" href="#">Wordpress Development</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">CAREER</a>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/meet-our-team">Meet our team</Link></li>
                <li> <Link className="dropdown-item" to="/life-at-nimit">Life at nimit</Link></li>
                <li> <Link className="dropdown-item" to="/hiring">Hiring</Link></li>
                
              </ul>
            </li>
          </ul>
        </div>
        </div>
 
        </nav>
        */}
        </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
   .contact-upper {
      display: flex;
      justify-content: space-between;
   }
   .contact1 {
      width: 18%;
    }
    .logoimg{
      display: flex;
      justify-content: space-around;
    }
    /* .videofull{
      width: 100%;
    } */
    .navbar-toggler{
      background: #0091be!important;
    }
   
`
export default Navbarrr
