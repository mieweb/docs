---
title: "Limited Access Users"
date: 2020-03-16T22:39:47.027Z
url: "limited-access-users.md"
author: Jeremia Ploor
id: 1gna_b2P4oKkvDN3s9XIHm9jIWxWXfK6fpQxbjamyJ9g
source: https://drive.google.com/open?id=1gna_b2P4oKkvDN3s9XIHm9jIWxWXfK6fpQxbjamyJ9g
menu:
    main:
        name: "Limited Access Users"
        identifier: "1gna_b2P4oKkvDN3s9XIHm9jIWxWXfK6fpQxbjamyJ9g"
        parent: "1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8"
        weight: 4500
---
There may be a need to allow certain users onto into specific patient's charts but lock the rest of the patient chart population down from their access. An instance could be for an auditor or temporary user who needs limited access to only a specific range of patients, etc.

In another help document named *Locking Individual-Specific Patient Charts.pdf* there is the ability to lock specific patient charts and only grant access to certain users. This help document, however, describes the ability to limit a user to a specific list of patients and not go thru and lock down thousands of individual charts from a user.

The first step would be to set up a Security Role that has the specific allowed functions that are needed for these users. Most would probably have all permissions set to "View only", but you can decide and set which permissions this role is allowed to do. **Important** *– this security role for these user(s) needs to have the security permission* **Limited Access** *set to Yes. If you do not set this, then they will be able to access and see all patient charts. Anyone tied to this security role will be limited access when this is set. The choices are as follows – but the users for this purpose should be set to "yes"…* This permission controls user access to specific patients. A user has access to a patient either through a direct relationship (such as provider to patient or supervisor to employee), or through the department they belong to (such as the nursing department to a patient). The following settings are available:

* <strong>Yes:</strong> The user can access only the specific patients they have a direct relationship with. Relationships are defined in the setting Edit Patients Linked to User under Access Control > Edit User. If the Limited Access field is set to "Yes," it overrides the Restrict Access By Partition setting, and partition restrictions are ignored.
* <strong>No:</strong> The user is not restricted to the relationships defined in Edit Patients Linked to User under Access Control > Edit User.

![](external_files/e4128885255c653382676bafa59b7434.png)

The next step would be to set up and name a specific department to put these users into. That way you can track who these users are and tag them to a specific department outside of the ones you use for internal staff or {{% system-name %}} use.

A username for each individual now needs set up then for them to log into {{% system-name %}} as. You would go to Access Control and add a new user. You would then tag them to the security role and department you have set up and give them a login and password, etc just like you would any other user to access your {{% system-name %}} system.

After you save/submit the user, you need to go back in and click the edit user link on this specific user to get to the Edit Patients Linked to User at the top right corner of the *edit user* screen. This is where you will set which specific patient charts they are limited/allowed to access and all other patient records will be unseen from their view.

![](external_files/912bf4ddd54cf7c42cd32a516d92105b.png)

When you click Edit Patients Linked to User, you will then see the list of patients the user is currently allowed to access. This list is the patients the user is **ALLOWED** to access since they are security of "limited access".

## Link Patients to Users

When you link patients to the specific restricted user, those are the patients they are allowed to search and get into.

You would type in the patient's name and select the patient from the auto-complete. You would set the Role to be *Limited Access User* because that's the role of this user to this patient. Then click the ADD button. Continue to add another patient that this user is allowed to access. When done, click the SUBMIT button to save your work. Any patient listed in this screen that is linked to this specific user is permitted access to their chart. Any patient not listed on this screen for a specific user is restricted from viewing or searching by this limited access user.

{{% info %}}

If the patient's chart is "locked", you cannot link that patient to a user that doesn't have permission to that locked chart. (See other help documentation named [Locking Individual or Specific Charts ](locking-individual-or-specific-charts.md))

{{% /info %}}


![](external_files/7f4c63a456f5108f1737d229252691db.png)
## Remove Patients from User

You can remove patients linked to a specific user. If you remove a patient that means this limited access user will not be able to view/access that specific patient anymore. They will no longer be linked to that patient for accessing.

You can remove any patients by clicking the [-] minus button next to the patient and then they will not be allowed to access the patient. It will put a strikethrough it and then you can click SUBMIT to save your work. That patient will no longer be able to be accessed by the Limited Access user. Any patient listed in this screen that is linked to this specific user is permitted access to their chart. Any patient not listed on this screen for a specific user is restricted from viewing or searching by this limited access user.

![](external_files/ffc4cd9c2d44faf53b4d939db808ee20.png)

If a login was created into your {{% system-name %}} system for a Limited Access User (like an auditor, temporary reason, etc) then make sure you inactivate/delete their login after they are done working with your system or for your practice just like you would any other user that terminates employment with your practice.

