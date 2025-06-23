---
id: '1RHp0GCOeed1f4pcdngKoeFLYHYfi1ZzkKVkSPLRcAl8'
title: 'Emergency Access for Limited Access Users'
date: '2025-06-23T16:39:21.722Z'
version: 88
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1RHp0GCOeed1f4pcdngKoeFLYHYfi1ZzkKVkSPLRcAl8'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
When access to a chart is restricted, the system provides a means for appropriately authorized users to "have emergency access" for emergency situations.

The security setting of **Limited Access** is what drives this along with the security settings of **Allow Emergency Access to Charts** and/or** Allow Unrestricted Pat Search**.

![](../emergency-access-for-limited-access-users.assets/590445ccf116f1beb4c608e1b6d2b0fc.png)

![](../emergency-access-for-limited-access-users.assets/350430518cffdb9aa99c563a3ea988ac.png)

![](../emergency-access-for-limited-access-users.assets/16e0ab3b5dcc1a36b21db864c063550f.png)

## Limited Access

This permission controls user access to specific patients. A user has access to a patient either through a direct relationship (such as provider to patient or supervisor to employee), or through the department they belong to (such as the nursing department to a patient).

If the Limited Access security is set to **Yes:** This restricts the user to only have access to specific patients that are flagged as ‘their' patients. It restricts users from having access to any patients not in their list. Ex: Dr Jones is set as the attending physician for his patients. Therefore if he is set to ‘Limited Access=Yes' then he can only search and work in the patients that list him as the attending physician. This setting also affects the super doc search results. No emergency access can be given with this set to Yes. The user can access only the specific patients they have a direct relationship with. Relationships are defined in the setting Edit Patients Linked to User under Access Control > Edit User. If the Limited Access field is set to "Yes," it overrides the Restrict Access By Partition setting, and partition restrictions are ignored.

If the Limited Access security is set to **No:** this doesn't restrict the user from access to any patients. User has rights to all patients unless it's locked and a user doesn't have security for locked patients. No emergency access is needed since user is not limited access. The user is not restricted to the relationships defined in Edit Patients Linked to User under Access Control > Edit User.

### Allow Emergency Access to Charts

In emergency situations, a user may need access to patient information that is normally restricted. This field determines if a user can access a patient that they do not normally have access to for a limited time (the amount of time is configurable under System Settings). If either of the fields Limited Access or Restrict Access by Partition are set to "Yes," the Allow Emergency Access to Charts setting is used to search and access patients that are normally restricted to a user or department. Audit logs are stored for all patients accessed through this setting.

If Allow Emergency Access to Charts is set to **Yes:** The user can view a restricted chart for a limited time after confirming that access is required for each patient that is requested.

If Allow Emergency Access to Charts is set to **No:** The user cannot access restricted patients.

### Allow Unrestricted Pat Search

This permission enables a user to search for (but not necessarily access) any patient, regardless of Limited Access or Partition Restriction settings.

If Allow Unrestricted Pat Search is set to **Yes**: The user can search for any patient, regardless of Limited Access or Partition Restrictions settings.

If Allow Unrestricted Pat Search is set to **No**: The user can only search for patients that are accessible based on Limited Access or Partition Restrictions settings.

## Limited Access: Emergency

When a user is set to Limited Access, when they work in {{% system-name %}} and search for patients, they only see the matching specific patients that are ‘their' patients.

However, when the user has Allow Emergency Access set to Yes, they will always see the **[] Show Restricted Accounts** check-box in the patient and document searches.

![](../emergency-access-for-limited-access-users.assets/007418830d63545363a5d4c89837c953.png)

If they need to search and find a patient outside their limited access and it may be an emergency situation, they can checkmark the **[] Show Restricted Accounts**

![](../emergency-access-for-limited-access-users.assets/5fb2411c9ddbceae7b5c296b68f6fe79.png)

When it is check-marked, they can search for a patient or a document and see all matching search results. If the user has the Allow Unrestricted Pat Search setting set to Yes, it will show that the account or document is *restricted*, but they can get into it if need be for an emergency.

![](../emergency-access-for-limited-access-users.assets/051e06d4d96f22b703b4ee769474c4aa.png)

If the user needs to get into the patient's account and are usually ‘restricted' from it, they can click the MR# to advance into the patient's account. The user will see a warning that they do not have access to this patient, **but** since they have emergency Limited Access security level, they can click here to gain emergency access to the patient's chart.

![](../emergency-access-for-limited-access-users.assets/408777ee7d2622456f292923caf28010.png)

Once they click here to gain emergency access, it will pop-up another dialog box to confirm they want to continue to gain entry via emergency access. Click Yes to proceed.

![](../emergency-access-for-limited-access-users.assets/2da4315920dd7c761be05b0dea6cf7e7.png)

Once the user continues into the restricted patient's chart, but has emergency access to it, the user will see a banner at the top notifying them that they are in EMERGENCY ACCESS ENABLED mode and their session to work in this patient's chart expires in a set amount of time. The banner contains how much time is remaining until the record will become locked.

![](../emergency-access-for-limited-access-users.assets/e1d5c8839dd91db79a444825b1b3bb46.png)

The time the session expires is usually set to 2 hours, but it is a system setting that the practice can change (or contact your MIE Implementer). Emergency Access sessions for your practice can be set to a different amount of time other than the standard 2 hours. The system setting is set by ‘seconds'. The normal 2 hour default is set as 7200 seconds in the system setting, but again system wide it can be changed to any amount determined by the practice.

![](../emergency-access-for-limited-access-users.assets/3ffea28eb22f21d64ae9fbf67d9a9ccf.png)

The user can access that same patient's account they gained emergency access to until their session expires. They can get out and work in other charts and come back to it up until their session expires.

When the emergency session expires the chart becomes locked. If the session expires, and you go to click to continue to work in that patient's chart it will take you back to the ‘Access Denied' screen. If you need more time you'll have to gain emergency access again.

![](../emergency-access-for-limited-access-users.assets/2615b58fac9d764b0a6680c437d417ce.png)

Users with Emergency Limited Access security can see the **[] Show Restricted Accounts** optional check-box in Simple Patient Search, Detailed Patient Search, & Document Search modes to gain emergency access.
