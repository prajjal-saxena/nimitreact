import React from 'react';
import azure from './img/azure.png';
import micro from './img/micro-azure.png';

const Microsoftazure = () => {
  return (
    <>
     <section class="azure">
     <img src={azure} alt=""/>
     <div class="container">
        <div class="azure1">
            <div class="azure-content1">
                <img src={micro} alt=""/>
            </div>
            <div class="azure-content1">
                <p>Azure is a public cloud computing platform—with solutions including <strong>Infrastructure as a Service</strong> (IaaS), <strong>Platform as a Service</strong> (PaaS), and <strong>Software as a Service</strong> (SaaS) that can be used for services such as analytics, virtual computing, storage, networking, and much more. It can be used to replace or supplement your on-premise servers.</p>
            </div>
        </div>
        <div>
            <p>Azure is a fast, flexible, and affordable platform, and its pricing and capabilities make it the best public cloud offering on the market. Now let’s take a look at how to put it to work for you.</p>
            <div>
                <h2>Host and Develop Web and Mobile Apps</h2>
                <p>Whether you’re looking for a platform for hosting, developing, or managing a web or mobile app, Azure makes those apps autonomous and adaptive with patch management, AutoScale, and integration for on-premise apps.</p>
            </div>
            <div>
                <h2>Enhance and Implement Backup and Disaster Recovery</h2>
                <p>Azure is a backup and disaster recovery dream tool. Why? Because of its <strong>flexibility, advanced site recovery,</strong> and <strong>built-in integration.</strong></p>
                <p>Tape backup has a time and place, but it has limited abilities as a stand-alone backup and disaster recovery solution. Azure site recovery can enhance your tape backup with offsite replication, minimal onsite maintenance, up to ninety-nine years of data retention, minimal or no capital investment, and minimal operational costs. Azure backup stores three copies of your data in three different locations in the data center, and then another three copies in a remote Azure data center, so you never have to worry about losing data.</p>
            </div>
        </div>

        <div>
            <h2>Distribute and Supplement Active Directory</h2>
            <p>Azure can integrate with your Active Directory to supplement your identity and access capabilities—this gives your DNS a <strong>global reach, centralized management,</strong> and robust security.</p>
            <p>If you have multiple locations or use on-premise apps or cloud apps like Microsoft 365, Active Directory integration with Azure will be the central tool for managing and maintaining access to all of these tools.</p>
        </div>
    </div>
</section>
    </>
  )
}

export default Microsoftazure