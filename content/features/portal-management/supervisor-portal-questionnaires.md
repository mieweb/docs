---
id: '1QgZBsXYK6JVCFQ87zZ4HDjAm4HAj505DgW1ighx9Xjc'
title: 'Supervisor Portal Questionnaires'
date: '2025-08-07T18:28:42.108Z'
version: 115
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/portal-management/supervisor-portal-setup/'
source: 'https://drive.google.com/open?id=1QgZBsXYK6JVCFQ87zZ4HDjAm4HAj505DgW1ighx9Xjc'
wikigdrive: 'v2.16.0'
---
The **Supervisor Portal** can be configured to allow supervisors to submit questionnaires on behalf of their direct subordinates. When a questionnaire is submitted from the supervisor portal, the document created from that questionnaire will reside in the selected employee's chart. This feature may be particularly helpful for supervisors where their employees may not have a computer as part of their job and/or need to initiate an action or submit job task information to the clinical examiner for medical evaluation. Examples of questionnaires that can be configured for supervisors to submit on behalf of their subordinates include: Incident Report (report of work related injuries), Incident Investigation, Animal Exposure Questionnaire, and Request an Appointment. Supervisors may submit questionnaires on behalf of their subordinates in {{% system-name %}} databases on release 202503 or newer.

## Completing a Questionnaire

1. Navigate to the Supervisor Portal <strong>Message Center</strong>

![](./supervisor-portal-questionnaires.assets/237baffc363cecd4559e53df051b0600.png)

2. Select the <strong>Send a Message</strong> button.

![](./supervisor-portal-questionnaires.assets/7db8b1a96695de21da85f089d0a95182.png)

3. Select the questionnaire/message that needs to be completed.

![](./supervisor-portal-questionnaires.assets/f8bc2c0fef74161b1142eb2f3db85724.png)

4. Select the subordinate/employee for which this questionnaire is being completed, then click the <strong>Begin</strong> button. <em>Note: if the supervisor has more than 10 direct reports, the employee list will display as an autocomplete instead of individual radio buttons for each employee</em>.

![](./supervisor-portal-questionnaires.assets/b5e5779a48b0c810e66a98100731dd75.png)

5. Complete the questionnaire, then click the <strong>Submit</strong> button at the bottom of the page. If the questionnaire was added in error, click the red <strong>Cancel</strong> option. If the questionnaire has been configured to save as a work in progress, the <strong>Save for later</strong> option will display to the left of the <strong>Cancel</strong> option. Any questionnaires that have been saved for later will display as in progress questionnaires on the supervisor portal until completed and submitted by the supervisor.

![](./supervisor-portal-questionnaires.assets/1e0070b4ec4b969d07f3882d50fdb479.png)

## Configuration Requirements

### Supervisor Relationship

Employees/subordinates must have a direct relationship to the supervisor in order for the supervisor to schedule or complete questionnaires for subordinates. Supervisor Hierarchy is not currently respected on the supervisor portal. Supervisors may only perform actions for direct reports. Supervisors must also only have a Supervisor contact relationship to the employee and NOT a portal user relationship.

![](./supervisor-portal-questionnaires.assets/2220119649ac41c125e2f650d168e468.png)

### Supervisor Document Chart Tab

Supervisor Portal Questionnaire associated document types must display in the Supervisor Documents chart tab. If a questionnaire is added to the portal and corresponding document type is not associated to the Supervisors Document tab, then end users may receive errors when submitting the questionnaire and they will not be able to view completed documents after submission.

![](./supervisor-portal-questionnaires.assets/e9fc1130716d43aac6c4de7825c6c86e.png)

### Flowsheet Configuration Tips

Supervisors are not allowed to add or update patient admin data, which includes demographics. Flowsheets must not contain patient admin variables.

![](./supervisor-portal-questionnaires.assets/5409e698bbc631dda6ff75a8b39002c1.png)

For more information on Employer/Supervisor scheduler configuration options, see [Supervisor Portal Setup](https://docs.enterprisehealth.com/functions/portal-management/supervisor-portal-setup/) in the online help directory.
