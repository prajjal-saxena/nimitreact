import React from 'react'
import Atempo from './img/atempo.png';
import Atemposite from './img/atempo-site.png';

const AtempoLiveNavigator = () => {
  return (
    <>
<section class="azure atempo">
    <img src={Atempo} alt=""/>
    <div class="container">
        <div class="azure1">
            <div class="azure-content1">
                <img src={Atemposite} alt=""/>
            </div>
            <div class="azure-content1 section-gap-bottom">
                <p>We have a reputation for high-level technical expertise in data management needs including protecting and migrating very large unstructured data volumes (Bank & Finance, Life Sciences, Industry, Media & Entertainment)</p>
            </div>
        </div>
        <div class="section-gap-bottom">
            <ul>
                <li>Back up mission-critical data</li>
                <li>Restore data as and when needed</li>
                <li>Maintain data integrity</li>
                <li>Move data affordably between storage locations for short or long-term storage in complete security</li>
                <li>Provide clear analytical dashboards to ensure data storages are managed efficiently and cost effectively</li>
            </ul>
        </div>
        <div>
            <h2 class="text-align">USE CASES</h2>
            <h2>Data Management</h2>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>File Archiving and Data Moving Solution</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Storage and NAS Migrations</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Storage and NAS Synchronizations</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Cloud Migration, Reverse Cloud, Cloud-to-Cloud</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>HPC and Big Data</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Backup for Large File Storages, Object, Cloud & NAS</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Media & Entertainment – Data Workflow Integrations</p>
        </div>

        <div>
            <h2>Data Protection</h2>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Microsoft 365 Protection</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Laptop and Desktop Protection</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Disaster Recovery & Business Continuity</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Enterprise Operating System Protection</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Data Protection Appliances</p>
        </div>

        <div>
            <h2>Storage</h2>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Large Data Storage Management Solutions</p>
        </div>

        <div class="section-gap-bottom">
            <h2>Endpoint And Workstation</h2>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>On-Prem Endpoint Protection</p>
            <p><i class="fa-ch fa fa-check-square-o" aria-hidden="true"></i>Cloud Backup</p>

        </div>
    </div>
</section>
    </>
  )
}

export default AtempoLiveNavigator