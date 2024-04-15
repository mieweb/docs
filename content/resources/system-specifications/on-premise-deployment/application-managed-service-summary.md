---
id: '1GiUJxGn-GZs2pdNmqNhvzX4LHFO9DUlDccoh3Cxzp5o'
title: 'Application Managed Service Summary'
date: '2020-02-27T20:46:34.562Z'
version: 20
mimeType: 'text/x-markdown'
links:
  - 'https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/index.html'
  - 'https://wiki.centos.org/Manuals/ReleaseNotes/CentOS7'
source: 'https://drive.google.com/open?id=1GiUJxGn-GZs2pdNmqNhvzX4LHFO9DUlDccoh3Cxzp5o'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Terms

* Remote Application Administrators (RAA) – A team of individuals who remotely manage on-premise instances of MySQL
* {{% system-name %}} System – The software application that manages, stores and transmits employee data to and from web-enabled devices.
* Average Response Time (ART) – The Average Response Time (ART) is the amount of time in seconds that the {{% system-name %}} application responds and completes a users request, note that this is not the amount of time the response takes to display on a user's device. {{% system-name %}} strives for an average target sub second response within {{% sys-name %}} , excluding reporting.
* Severity 1 (Sev 1) – An issue is identified as Severity 1 only when supported databases are inaccessible, or if supported databases are slow to respond outside of targeted ART, and no workaround is immediately available.
* Severity 2 (Sev 2) – An issue is identified as Severity 2 when supported databases are not severely impaired.
* Service Level Agreement (SLA) – The Service Level Agreement (SLA) defines the ART and the {{% sys-name %}} rDBA response time to Sev 1 issues.

## Managed Service Levels & Associated Fees

The following Managed Service (MS) Levels are provided by {{% sys-name %}} to operate, maintain and monitor the {{% system-name %}} database(s) on the behalf of the customer when hosted on-premise, on customer hardware. The Service Level Agreement (SLA) is subject to change in order to fit the customer's environment and needs. The fees associated with the MS levels (listed in the table below) are billed monthly and on a per database instance (each running mysql).
<table>
<tr>
<td>Level</td>
<td>Monitoring<br />
(hours x days)</td>
<td>SLA</td>
<td>Monthly Fee<br />
per / instance</td>
</tr>
<tr>
<td>Silver</td>
<td>8x5, excluding US Holidays</td>
<td>120-Minute to Sev 1</td>
<td>$800</td>
</tr>
<tr>
<td>Gold</td>
<td>24x7, all days of the year</td>
<td>60-Minute to Sev 1</td>
<td>$1,000</td>
</tr>
<tr>
<td>Platinum</td>
<td>24x7, all days of the year</td>
<td>30-Minute to Sev 1</td>
<td>$1,200</td>
</tr>
</table>

### Description of MS Levels

#### Silver

The Silver MS level includes:

* Initial setup and configuration of {{% sys-name %}} and instances
* Initial setup and tuning of monitoring servers
* Regular health checks and monitoring
* Proactive system tuning and maintenance
* 60-Minute SLA to (Sev 1) issues
* 8x5 real time monitoring to correct performance, availability, and critical security issues, excluding US Holidays

#### Gold

The Gold MS level includes:

* All of Silver, plus:
* 30-Minute SLA to (Sev 1) issues
* 24x7 real time monitoring to correct performance, availability, and critical security issues
* Includes Backup setup, verification and monitoring

#### Platinum

The Platinum MS level includes:

* All of Silver and Gold, plus:
* 15-Minute SLA to (Sev 1) issues
* 24x7 real time monitoring to correct performance, availability, and critical security issues
* High Availability configuration (includes monitoring, management, and scaling for fast failover to secondary and DR replica servers)

## Requirements of Customers

### Monitoring Server

For {{% system-name %}} to provide the managed service levels described, the following are server requirements of the customer:

* Provide monitoring server:
    * 64bit Linux OS, [Red Hat® Enterprise 7](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/index.html) or [CentOS 7](https://wiki.centos.org/Manuals/ReleaseNotes/CentOS7)
    * 4Gb Ram
    * 4 CPUs
    * Storage
        * 15Gb root
        * 50Gb storage
* Direct VPN access to monitoring server
    * Web Service (HTTPS) enabled via VPN
* SSH access from monitoring server managed database(s)
* Web Accessible (not required)
* Sudo privileges

### Access to Network

![](../application-managed-service-summary.assets/5435dad1898d9a7c925ab725e2970f57.png)
