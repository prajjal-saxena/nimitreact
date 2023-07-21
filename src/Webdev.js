import React from 'react';
import humanwebdev from './img/humanwebdev.png';
import grpDev from './img/grp-dev.png';
import grpDev1 from './img/grp-dev1.png';
import grpDev2 from './img/grp-dev2.png';


const Webdev = () => {
  return (
    <>
<section class="web-development conte cont-secu">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,96L40,106.7C80,117,160,139,240,128C320,117,400,75,480,58.7C560,43,640,53,720,74.7C800,96,880,128,960,128C1040,128,1120,96,1200,96C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>    <div class="container">

    <div class="container">
        
        <div class="we-dev sol-content">
            <div>
                <img src={humanwebdev} alt=""/>
            </div>
            <div>
                <h1>CREATIVE WEB DEVELOPMENT</h1>
                <p>The web development professionals study the requirements and build the code. In the process, they optimize the business value of their client firms, offering alternative solutions. High-quality websites offer sophistication and aesthetic appeal, which have a deep impact on the thought process of customers.            </p>
                <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i><strong>Web Friendly :</strong> A user-friendly website not only offers recognizable links—it uses links throughout its pages to help move visitors around to similar content. We provide the web friendly website for our clients.</p>
                <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i><strong>Interaction :</strong> A truly effective website design engages your visitors immediately and continues to hold their attention through EVERY page, as well as inﬂuences them to contact you. This is called 'conversion', and is probably your website's ultimate goal. We provide the interaction website.</p>
            </div>
        </div>
    </div>

    <div class="container section-gap-bottom">
        <h1 class="text-align">Showcase Your Products And Services</h1>
        <div class="web-content d-flex text-align">
            <div>
                <h2>New Websites</h2>
                <p>Combining a great user experience with essential functionality and the latest SEO techniques, we’ll design and build your website, delivering an intuitive user interface (UI) and an exceptional user experience (UX).</p>
            </div>
            <div>
                <h2>Rebranded Websites</h2>
                <p>Refreshing your website with a modern look and feel and data-driven features, we’ll build a scalable, secure, mobile-friendly, and feature-packed site amplifying your brand and increasing engagement.</p>
            </div>
        </div>
    </div>
    <div class="container text-align">
        <h1 class="">Website Delivering Result - See What we' ve Done</h1>
        <div class="web-group">
            <h1><a href="http://www.nimittech.com/" target="_blank"><em>NIMIT</em></a></h1>
            <img class="up-down" src={grpDev} alt=""/>
        </div>
        <div class="web-group">
            <h1><a href="http://nsc.ind.in/" target="_blank"><em>Nidhi Sharma & Company</em></a></h1>
            <img class="up-down" src={grpDev1} alt=""/>
        </div>
        <div class="web-group">
            <h1><a href="http://pleco.co.in/" target="_blank"><em>PLECO</em></a></h1>
            <img class="up-down" src={grpDev2} alt=""/>
        </div>
    </div>
    <div class="container">
       <div class="afford">
          <div>
             <i class="maintain fa fa-wpexplorer" aria-hidden="true"></i>
             <h2>Maintenance Of Website</h2>
             <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Friendly, personal service.</p>        
             <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Testing after every edit.</p>
             <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Full Backup copy of your website.</p>
          </div>
          <div>
             <i class="maintain fa fa-pencil-square-o" aria-hidden="true"></i>
             <h2>Efficient Execution</h2>
             <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Enjoy on-time, every-time execution with a proven</p>
             <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Repeatable process and reliable turnarounds</p>
          </div>
          <div>
             <i class="maintain fa fa-binoculars" aria-hidden="true"></i>
             <h2>Keep Your Website up-to-date</h2>
             <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Content editing can be accomplished with updated information, such as special offers, product changes, pricing changes, new product and services announcements</p>
             <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Employee information changes and all those things that keep your visitors properly informed.</p>
          </div>
          <div>
            <i class="maintain fa fa-usd" aria-hidden="true"></i>
            <h2>Affordable Pricing</h2>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Take advantage of experienced UI and UX developers at competitive</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Prices aligned with your budget</p>
          </div>
       </div>
    </div>
    </div>
</section>
    </>
  )
}

export default Webdev