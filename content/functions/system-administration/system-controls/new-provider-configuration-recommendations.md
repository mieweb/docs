---
id: '1R681IN5AuI7tQTdTOaVQsJX2N8l292859LsMM_S_YH4'
title: 'New Provider Configuration Recommendations'
date: '2022-11-04T15:52:02.402Z'
version: 231
lastAuthor: 'Alice Uhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/open?id=1CofebAnz02InLwE8PxHVRFBfvRbzoSjBajFEk9RjaJ0'
  - 'https://docs.webchartnow.com/functions/system-administration/system-controls/setting-up-e-prescribers.html'
source: 'https://drive.google.com/open?id=1R681IN5AuI7tQTdTOaVQsJX2N8l292859LsMM_S_YH4'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
---


Per Medical Informatics Engineering, Inc. policy, all new providers should be created with a new, unique employee chart with a linked user profile, and a unique provider chart. Employee and/or Provider charts and user profiles should NEVER be reused or recycled for any reason.

1. For clients with HR or Demographic feeds, a patient/employee chart and user profile should automatically be created for you. Do not add a new employee chart or user profile manually.
   1. If SSO is in place, update the user profile (in access control) created by the feed to include the primary department and security role.  Also update the user profile to link the user to any other department(s). (The bottom half of the user profile screen.) Do not add or attempt to manage a password within the application.
   2. If SSO is NOT in place, search for the user profile (in access control) and update the primary department and security role. Create a temporary password, which will expire ‘today', so that when the user logs in, they will be prompted to create their own unique password. Provide the new provider their login and temporary password verbally or send the login and password information in separate emails to the user.
2. For clients that do not have an HR or Demographic feed. Create a ‘patient chart', which will then automatically create the user profile within access control.
   1. Search for the user profile and update the primary department and security role. Also update the profile to link the user to any other department(s). (The bottom half of the user profile screen.)  
   2. Create a temporary password, which will expire ‘today', so that when the user logs in, they will be prompted to create their own unique password. Provide the new provider their login and temporary password verbally or send the login and password information in separate emails to the user.
3. If using ‘Provider Charts', run the "Make Provider Chart For Users" report (Reports>Utilization) to create a provider chart for the prior patient/employee chart in earlier steps.
   1. Once the Provider chart is created, complete applicable data in the Provider Chart.
   2. Link the provider chart to any applicable Provider Organization (clinic location) Charts.
   3. If the new provider is certified to complete DOT Exams, complete the Medical Examiners data in the "Other Data" section of the Provider chart.
   4. It is important to keep Provider (P) charts separate from their individual patient/employee chart.
4. Send the provider the [ePrescribe Verification](https://drive.google.com/open?id=1CofebAnz02InLwE8PxHVRFBfvRbzoSjBajFEk9RjaJ0) Form to complete
   1. Update data collected on the user profile when received.
   2. Load provider signature.
   3. Submit verification to [Surescripts](https://docs.webchartnow.com/functions/system-administration/system-controls/setting-up-e-prescribers.html).
5. Enable EPCS, if applicable.
6. If provider is an NP, PA: assign overseeing provider, if applicable.
7. Enroll in MIPS, if applicable.
8. Add or update any applicable E-sign rules.
9. Add or update any applicable Fast Tasks and/or Task List Event Rules.
10. Add or any applicable Print Definitions.
11. Add new Schedules.
12. Add new or applicable Appointment Type Templates.
13. If the client has any custom letterheads, either in HTML or Word, update provider information.
14. Notify any 3rd party interfaces of the new provider, if applicable.
15. Review translation tables for any new interface translations that may need added.
16. Create any new libraries, if applicable.
17. Create any new macros, if applicable.
18. Review and pre-set any "My Setting" preferences, if applicable.
19. Notify EH/MIE of any new providers and effective dates.


