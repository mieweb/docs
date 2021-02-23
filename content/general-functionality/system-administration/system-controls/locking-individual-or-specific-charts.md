---
title: "Locking Individual or Specific Charts"
date: 2020-02-27T20:19:45.825Z
url: "general-functionality/system-administration/system-controls/locking-individual-or-specific-charts.html"
version: 43
id: 15f1ifjt8uLBTe__5LgBJ4JW4-pgR8Hl1Jm6z90CREMA
source: https://drive.google.com/open?id=15f1ifjt8uLBTe__5LgBJ4JW4-pgR8Hl1Jm6z90CREMA
menu:
    main:
        name: "Locking Individual or Specific Charts"
        identifier: "15f1ifjt8uLBTe__5LgBJ4JW4-pgR8Hl1Jm6z90CREMA"
        parent: "1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8"
        weight: 4530
---
A user with security can lock patient chart records which then can only be accessed by allowed users. If an individual patient's chart is locked from your view, it will state that in highlight on the E-Chart search screen. If you are allowed to access a locked patient's chart, you will not even see the **Locked** notification since it is not locked to you, the logged in user.

![](../../../external_files/48fd747c5c24c73f0fcd2ac237a5d3ac.png)

When you are locked from a patient's chart and click to get into that patient's chart, it will tell you that you do not have access and it will not open the patient's chart.

![](../../../external_files/4c5c9d9c0193d4daa771d4f19c92c980.png)

## Lock a Chart

You can lock a patient's chart if you have security permission to *Manage Patient Access*, then you can access the **Patient Restrictions** tab found in the Control sidemenu tab.

![](../../../external_files/a1f36adb998810d93bc98922778a3334.png)

The *Patient Restrictions* tab is where you set restrictions on patient charts.

![](../../../external_files/1ea93e63ce76443eba8657376f4e5d23.png)

When you are in the Patient Restrictions tab, it will list a section named *Patient Access List*. This is the list of patient charts that are locked. It also lists the number of Users that have *access* to that chart. Meaning those are the only users that can get into that patient's chart. Everyone else is locked from it.

You may want to lock a patient's chart for an example of a physician's wife being seen or something like that.

![](../../../external_files/5ad5df554ca794038a8135bb73171157.png)

The Options column gives the user the ability to edit lock or remove lock for a patient's chart that is already locked. If you need to "lock" a patient's chart not listed here, you would click the Add New Lock link (follow steps on subsequent pages in this help guide).

## Edit Lock

![](../../../external_files/c8420030911f84b1bb9a46a8e48ccf78.png)

When you click "Edit Lock" link you can see which {{% system-name %}} users are allowed to access the locked chart for that specific patient you selected. You will see the User's Name, the date someone set them to be "allowed" to access that chart and not be locked out of it, and you will see any reason comments.

![](../../../external_files/23f95c01b7e94569f510650331007d25.png)

If someone has access to the locked chart and you want them to now be locked out of it, you can simply click the [ - ] minus button in the options column on their username. Then click SUBMIT to save your work. The user will be removed from the "allowed users" list and will not be able to access that patient's chart anymore.

If you need to add a user to be *allowed* into that patient's locked chart, you simply begin typing in their last or first name or login name in the *Username* field and the system will autocomplete to give you choices. Select the user that is to be allowed to access this locked patient's chart. Type in the reason, then click ADD button. Continue to add more users that are allowed to access this locked patient's chart. When done click the SUBMIT button to save your work.

Once you submit your work, your screen will refresh back to the Patient Restrictions page and the list will be updated.

## Remove Lock

![](../../../external_files/9fda88129c99f963fa9188e2640513d6.png)

When you click the "Remove Lock" link that means you want to remove the lock on this specific patient's chart. You will be unlocking it and all users will have access to that patient's chart. When you click remove lock it will ask you a confirmation question.

![](../../../external_files/668bf12b4f04660064fea5d195ee7857.png)

When you confirm, it will tell you that you have successfully unlocked the patient's chart and it will refresh back to Patient Restrictions module and the patient will no longer be listed as being a "locked chart".

## Add New Lock

If you need to lock a patient's chart and set a limited number of users to be able to access that locked patient chart, you would click the Add New Lock link.

![](../../../external_files/7352f89762e11713a3b20426bc5b01b1.png)

First you need to type in the name of the patient's chart you wish to lock. The system will autocomplete and give you selections. Select the specific patient you need to lock. You can then continue on the same screen to set the specific staff ( {{% system-name %}} users) that are allowed to access this locked chart, leaving the rest of the staff/users being locked out of the patient's chart. Begin typing in the last name, first name or login name of the staff/users that are allowed to get into this patient's chart. Type a reason, click ADD button and continue to add more users/staff that are allowed access. When done, click the SUBMIT button to save your work.

![](../../../external_files/41ed4ee021a7229b664bc2569eeef9d0.png)

You can add or remove more staff/users to/from a locked chart at any time by the edit lock links (steps noted on previous page of this help document). Any users who are not allowed to work in a patient's locked chart will see the notification **Locked** on their patient search screen or the error message that they don't have permission to access if trying to get directly into the patient's chart.

Users can still index to a locked patient's chart and search for patient's in reports, etc that are locked charts, but it gives the notification of (LOCKED) beside it.

![](../../../external_files/32caa1dc8266150c8409c7d5e6f04848.png) ![](../../../external_files/5f5232e518599d3f1b0691ab1f800c8d.png)

