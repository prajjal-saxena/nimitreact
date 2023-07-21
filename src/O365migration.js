import React from 'react'
import o365migration from './img/o365side.png';
import migration from './img/migration.png';

const O365migration = () => {
  return (
    <>
    <section class="gapmigration section-gap-bottom">
    <div class="co migration-img">
        <img src={o365migration} alt=""/>
    </div>
    <div class="container migra section-gap-bottom">
        <div class="migration">
           <div class="migration-imge">
              <img src={migration} alt=""/>
           </div>
           <div class="migration-content">
              <h1>Migrate your business to Office 365</h1>
              <p>Migrating to Office 365 is becoming increasingly popular with both large and small businesses.</p>
              <p><strong>The Office 365 hybrid migration allows you to integrate Office 365 with your on-premises Exchange servers and your existing directory services.</strong><br/><br/> As a result, you can synchronize and manage user accounts for both environments. With a hybrid migration, you're able to move mailboxes in and out of Exchange Online.</p>            
           </div>
        </div>
    </div>

    <div class="container">
      <h1 class="for-migration">Benefits Of Migrating To Microsoft 365</h1>
      <div class="benefit-migration">
        <div class="migration1">
          <h2>For Small Business</h2>
          <div class="migration-content11">
            <div>
               <h2><strong>Data Security</strong></h2>
               <p>Office 365 is protected via Microsoft Azure Rights Management and has a built-in security system, you can see who has access to your data, also you can remotely manage your data in case you lost your portable device like a tablet or a smartphone.</p> 
            </div>
            <div>
               <h2><strong>Immunity from Disasters</strong></h2>
               <p>Microsoft has architected a resilient environment to maintain their uptime SLA (99.9%) as your data isn’t stored on in-house system and is thus immune to any local crashes and disaster. Keeping your data on cloud makes your business immune to such scenarios.</p> 
            </div>
            <div>
               <h2><strong>Easy Collaboration</strong></h2>
               <p>Whether you are running a SME or large enterprise, working in teams and collaboration among co-workers should be your top priorities. With Skype, Microsoft Team, and SharePoint make the real-time collaboration possible. Your employees can contribute by making changes to your docs.</p> 
            </div>
            <div>
               <h2><strong>Ample of Space</strong></h2>
               <p>Microsoft has architected a resilient environment to maintain their uptime SLA (99.9%) as your data isn’t stored on in-house system and is thus immune to any local crashes and disaster. Keeping your data on cloud makes your business immune to such scenarios</p> 
            </div>
            <div>
               <h2><strong>Offline mode</strong></h2>
               <p>With Office 365 for business, you don’t have to be connected to the Internet. Access your files and emails while working remotely as files are being stored and synced in your metadata, so you will be able to access your files even when you are not online.</p> 
            </div>
            <div>
               <h2><strong>Scalable and Flexible</strong></h2>
               <p>Office 365 is scalable as it has flexible monthly & yearly billing plans that allow you to increase or decrease the number of users according to your needs as your business grows. You can take care of your financials with no unplanned investments and software costs, as you have predictable monthly costs.</p> 
            </div>
          </div>
        </div>
        <div class="migration2">
          <h2>Integrate with other Microsoft Solutions</h2>
          <div class="migration-content11">
             <p>Once we’ve migrated you to Office 365, we can help you integrate your new Office 365 deployment with other Microsoft cloud or on-premises applications. Office 365’s integration with Microsoft Dynamics 365 is among the most used. Integration allows the users of Dynamics CRM, ERP, Power BI, project management and other applications to collaborate in a well-organized and secure way. Office 365 cloud solution integrates with other Microsoft solutions very smoothly, which has been a frequently asked point by enterprises when they considering moving to Office 365 cloud.</p>
             <br/>
             <p>Office 365 also also integrate with Azure Active Directory (Azure AD) so that you can manage user profiles more easily. Office 365 subscription also includes an Azure AD free subscription, allowing you to:</p>
             <ul>
               <li>sync your passwords</li>
               <li>manage other integrated apps more easily</li>
               <li>set up sign-ons with your company’s on-premises environment</li>
               <li>manage accounts and customize your Office 365 subscriptions</li>
             </ul>      
          </div>
        </div>
        
        <div class="migration3">
          <h2>For Large Enterprises</h2>
          <div class="migration-content11">
            <div>
               <h2><strong>Video Conferencing</strong></h2>
               <p>Host online audio/video meetings via one-click screen sharing and HD video conferencing. Dial-in capabilities on all your devices allow access to online conferencing even in areas with no Internet connection.</p> 
            </div>
            <div>
               <h2><strong>Complete Office Suite</strong></h2>
               <p>Office 365 comes with all the latest Office applications for each user who is able to install Office on 5 Macs and PCs, 5 different tablets (Windows, iPad, and Android), and 5 smartphones.</p> 
            </div>
            <div>
               <h2><strong>Advanced Security</strong></h2>
               <p>Access to documents and email restricted to specific people, which prevents other from accessing your important data. Encryption and data loss prevention feature so your content is always safe across all Office 365 platforms.</p> 
            </div>
            <div>
               <h2><strong>Collaboration & Teamwork</strong></h2>
               <p>Microsoft Teams connects all your teams and provide access to chat, documents, teammates and office tools so you can easily assign new tasks, track old ones and access work-related resources.</p> 
            </div>
            <div>
               <h2><strong>Analytics Tools</strong></h2>
               <p>Business & enterprises who wants to visualize and analyze data with the help of interactive reports and live reports dashboards can benefit greatly from using Microsoft MyAnalytics and Power BI Pro.</p> 
            </div>
            <div>
               <h2><strong>Advanced Control</strong></h2>
               <p>Enterprise-class business email allows you access to Outlook that features 50 GB mailbox per user, attachment size up to 150 MB. Archiving & retention, unlimited storage, data loss prevention (DLP) and policies for additional compliance enforcement.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
    </>
  )
}

export default O365migration