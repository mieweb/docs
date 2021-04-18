---
title: "Emergency Access for Limited Access Users"
date: "2020-02-27T20:19:38.892Z"
url: "general-functionality/system-administration/system-controls/emergency-access-for-limited-access-users.html"
version: 31
id: "1RHp0GCOeed1f4pcdngKoeFLYHYfi1ZzkKVkSPLRcAl8"
source: "https://drive.google.com/open?id=1RHp0GCOeed1f4pcdngKoeFLYHYfi1ZzkKVkSPLRcAl8"
menu:
    main:
        name: "Emergency Access for Limited Access Users"
        identifier: "1RHp0GCOeed1f4pcdngKoeFLYHYfi1ZzkKVkSPLRcAl8"
        parent: "1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8"
        weight: 4500
---
When access to a chart is restricted, the system provides a means for appropriately authorized users to "have emergency access" for emergency situations.

The security setting of **Limited Access** is what drives this along with security setting of **Allow Emergency Access to Charts**.

![](emergency-access-for-limited-access-users.images/image1.png)

![](emergency-access-for-limited-access-users.images/image2.png)

## Limited Access

This permission controls user access to specific patients. A user has access to a patient either through a direct relationship (such as provider to patient or supervisor to employee), or through the department they belong to (such as the nursing department to a patient).

If the Limited Access security is set to **Yes:** This restricts the user to only have access to specific patients that are flagged as ‘their' patients. It restricts users from having access to any patients not in their list. Ex: Dr Jones is set as the attending physician for his patients. Therefore if he is set to ‘Limited Access=Yes' then he can only search and work in the patients that list him as the attending physician. This setting also affects the super doc search results. No emergency access can be given with this set to Yes. The user can access only the specific patients they have a direct relationship with. Relationships are defined in the setting Edit Patients Linked to User under Access Control > Edit User. If the Limited Access field is set to "Yes," it overrides the Restrict Access By Partition setting, and partition restrictions are ignored.

If the Limited Access security is set to **No:** this doesn't restrict the user from access to any patients. User has rights to all patients unless it's locked and a user doesn't have security for locked patients. No emergency access is needed since user is not limited access. The user is not restricted to the relationships defined in Edit Patients Linked to User under Access Control > Edit User.

### Allow Emergency Access to Charts

In emergency situations, a user may need access to patient information that is normally restricted. This field determines if a user can access a patient that they do not normally have access to for a limited time (the amount of time is configurable under System Settings). If either of the fields Limited Access or Restrict Access by Partition are set to "Yes," the Allow Emergency Access to Charts setting is used to search and access patients that are normally restricted to a user or department. Audit logs are stored for all patients accessed through this setting.

If Allow Emergency Access to Charts is set to **Yes:** The user can view a restricted chart for a limited time after confirming that access is required for each patient that is requested.

If Allow Emergency Access to Charts is set to **No:** The user cannot access restricted patients.

## Limited Access: Emergency

When a user is set to Limited Access ‘emergency' level, when they work in {{% system-name %}} and search for patients, they only see the matching specific patients that are ‘their' patients.

However, when the user has ‘emergency' Limited Access security, they will always see the **[] Show Restricted Accounts** check-box in the patient and document searches.

![](emergency-access-for-limited-access-users.images/image3.png)

If they need to search and find a patient outside their limited access and it may be an emergency situation, they can checkmark the **[] Show Restricted Accounts**

![](emergency-access-for-limited-access-users.images/image4.png)

When it is check-marked, they can search for a patient or a document and see all matching search results. It will show that the account or document is *restricted*, but they can get into it if need be for an emergency.

![](emergency-access-for-limited-access-users.images/image5.png)

If the user needs to get into the patient's account and are usually ‘restricted' from it, they can click the MR# to advance into the patient's account. The user will see a warning that they do not have access to this patient, **but** since they have emergency Limited Access security level, they can click here to gain emergency access to the patient's chart.

![](emergency-access-for-limited-access-users.images/image6.png)

Once they click here to gain emergency access, it will pop-up another dialog box to confirm they want to continue to gain entry via emergency access. Click Yes to proceed.

![](emergency-access-for-limited-access-users.images/image7.png)

Once the user continues into the restricted patient's chart, but has emergency access to it, the use will see a banner at the top notifying them that they are in EMERGENCY ACCESS ENABLED mode and their session to work in this patient's chart expires in a set amount of time. The banner contains how much time is remaining until the record will become locked.

![](emergency-access-for-limited-access-users.images/image8.png)

The time the session expires is usually set to 2 hours, but it is a system setting that the practice can change (or contact your MIE Implementer). Emergency Access session for your practice can be set to a different amount of time other than the standard 2 hours. The system setting is set by ‘seconds'. The normal 2 hour default is set as 7200 seconds in the system setting, but again system wide it can be changed to any amount determined by the practice.

![](emergency-access-for-limited-access-users.images/image9.png)

The user can access that same patient's account they gained emergency access to until their session expires. They can get out and work in other charts and come back to it up until their session expires.

When the emergency session expires the chart becomes locked. If the session expires, and you go to click to continue to work in that patient's chart it will take you back to the ‘Access Denied' screen. If you need more time you'll have to gain emergency access again.

![](https://lh6.googleusercontent.com/Hr8k2xH6IOkwHWFCtYM_o7tNZygm2dDCFSLImMrVJdGSA7xH-bsxRl_zzO_adloEMQACfFrFS7RPpqIRtTfl2jdX7ML0vlj31Vn76SBI9x6nao5eVk3wc2eH_SlnpNRSlwypF7ryTcfL2JFt7A)

Users with Emergency Limited Access security can see the **[] Show Restricted Accounts** optional check-box in Simple Patient Search, Detailed Patient Search, & Document Search modes to gain emergency access.

