import React from 'react';
import Acroniss from './img/acronis.png';
import Acrosite from './img/acro-site.png';

const Acronis = () => {
  return (
    <>
     <section class="azure">
    <img src={Acroniss} alt=""/>
    <div class="container">
        <div class="azure1">
            <div class="azure-content1">
                <img src={Acrosite} alt=""/>
            </div>
            <div class="azure-content1">
                <p>Acronis is a data protection software vendor that spun off as a separate company from Parallels in Singapore and became an independent company in 2003. Incorporated in Switzerland five years later, the company offers backup, disaster recovery (DR) and file sync-and-share products across virtual, physical, cloud and mobile environments. Operating in more than 145 countries, Acronis claims to have more than 500,000 business customers and 5 million consumer customers.</p>
            </div>
        </div>
        <div>
            <div>
                <h2>Acronis AnyData Engine</h2>
                <p>Acronis offers products for enterprises, SMBs and consumers. The vendor bases many of its products on the Acronis AnyData Engine, which was released in 2014 to handle virtual and physical server protection.</p>
            </div>
            <ul>
                <p>Acronis products running on the AnyData Engine include the following features:</p>
                <li>Several forms of data migration, including virtual to virtual, virtual to physical, physical to virtual, and physical to physical.</li>
                <li>Built-in compression and deduplication to reduce storage space and bandwidth usage.</li>
                <li>Built-in AES-256-level encryption that can be applied to data as desired.</li>
                <li>Full disk and virtual machine (VM) Using snapshots, an entire disk drive or VM can be stored for backup and recovery; protected systems do not need to be offline during backup.</li>
            </ul>
            <p>In addition, Universal Restore, built into Acronis backup and recovery products, enables backups to be restored to a dissimilar system -- for example, from physical to virtual. Like many backup vendors, Acronis also has an instant recovery feature.</p>
        </div>
        <div>
            <h2>Top enterprise offerings</h2>
            <p><strong>Acronis Backup</strong> for business protects data on virtual, physical, cloud and mobile platforms regardless of size or location, according to the vendor. With disk-imaging backup, a business can capture backup images of its entire system, files or data. The business can store backups to storage devices, including local disks, network storage and the cloud.</p>
        </div>
    </div>
</section> 
    </>
  )
}

export default Acronis