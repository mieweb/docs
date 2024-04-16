---
id: '1vci5fgu5hsrxU-1mxjjLC5swIPemOhGisO5l6lQLDKc'
title: 'Terminated Provider Configuration Recommendations'
date: '2023-09-12T15:14:39.994Z'
version: 567
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.webchartnow.com/functions/system-administration/system-controls/setting-up-e-prescribers.html'
  - '../../e-sign-electronic-signature/e-sign-all-pending-tab.md'
source: 'https://drive.google.com/open?id=1vci5fgu5hsrxU-1mxjjLC5swIPemOhGisO5l6lQLDKc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Terminated Provider Configuration Recommendations

Per Medical Informatics Engineering, Inc. policy, terminated employee charts, and/or provider charts and user profiles (in access control) should NEVER be reused or recycled. User profiles should be disabled upon employment termination.

1. Update the user profile (in access control) to Login Disabled.
    1. If a client has SSO, the SSO will stop the user from being able to log in.
2. Remove departments at the bottom of the user profile screen (in access control). For example, the prescribers department.
3. Ensure [SureScripts](https://docs.webchartnow.com/functions/system-administration/system-controls/setting-up-e-prescribers.html) is terminated (uncheck checkboxes in user screen of access control)
4. Determine who at the client practice will proxy sign any unsigned documents for the terminated provider. If this individual does not currently have [proxy sign](../../e-sign-electronic-signature/e-sign-all-pending-tab.md) rights, temporarily grant proxy sign security access and remove the access once unsigned documents have been esigned.
5. Disable EPCS, if applicable.
6. Un-Enroll in MIPS, if applicable.
7. Remove user from any E-sign rules no longer needed.
8. End any Schedules created for the terminated provider.
9. Ensure any appointments (past the provider's termination date) are rescheduled with another provider.
10. Remove any Appointment Type Templates, if applicable.
11. Remove any interface translations, if applicable.
12. Deactivate any Print Definitions no longer needed.
13. Update any custom HTML or Word template letterhead, if applicable.
14. Delete any unneeded Libraries, if applicable or if desired.
15. Ensure all tasks assigned to the terminated Provider are completed or reassigned.
16. Remove any Fast Task or Fast Task Events, if applicable.
17. Ensure any open encounters that have the terminated Provider, as the encounter provider, are closed.
18. Notify EH/MIE of any terminated providers and effective dates.
