---
id: '19WO9_gjSofplsd2pn11Y7OiNOIKuyVHk5yumdEaBJHM'
title: 'Review Session - Fax Manager'
date: '2024-05-21T16:23:14.323Z'
version: 43
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control'
  - 'https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager'
  - 'https://system/?f=admin&t=faxman'
  - '../../functions/fax-manager/fax-manager-tab-outbound-faxing.md'
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
  - '../../functions/system-administration/security/my-settings.md'
  - '../../functions/document-management/scanning-and-indexing/batched-documents-printing-faxing-burning.md'
  - '../../functions/fax-manager/outbound-faxing-email-notifications-of-sent-failed-faxes.md'
  - '../../functions/fax-manager/faxing-documents.md'
  - 'https://mieweb.webex.com/mieweb/ldr.php?RCID=512d4a650f5972363795065eb10926cb'
source: 'https://drive.google.com/open?id=19WO9_gjSofplsd2pn11Y7OiNOIKuyVHk5yumdEaBJHM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Fax Manager Demonstration</strong>
    * <strong>Fax Individual Documents</strong>
    * <strong>Batch Faxing</strong>
    * <strong>Prescription Faxing (and Setting Preferred Pharmacy)</strong>
* <strong>Overview</strong>
* <strong>Sending Faxes</strong>
    * <strong>Fax Dialogue Window</strong>
    * <strong>Fax Manager</strong>
    * <strong>System-Delivered Email Notifications</strong>
* <strong>System Configuration</strong>
    * <strong>Load Fax Coversheet(s)</strong>
    * <strong>Departments & Users</strong>
    * <strong>My Settings Preferences</strong>
* <strong>Resources</strong>

## Overview

The {{% system-name %}} Fax Manager is a tool designed to streamline outbound faxing. Printing and faxing can be done manually, or automatically, depending on the configured system rules and Fax Manager setup.

{{% system-name %}} tracks all documents printed or faxed from the system, including several details, such as fax number, documents sent (and by whom), number of pages, transmission date/time, and fax status. Additionally, clients can build Print Definitions so that multiple forms or documents may be grouped together and printed or faxed, simultaneously. Custom configurations for Print Definitions, secure email, auto-routing transmissions, DataSend rules, and Direct setup, are available as add-on services, and will be scoped and billed separately.

Standard functionality for the Fax Manager includes:

* Print & fax history
* Batch faxing
* Prescription faxing (excludes controlled substances)
* A dashboard for auditing and managing fax transmissions
* Pre-loaded Print Definitions

## Sending Faxes

Faxing information from the {{% system-name %}} system can be done on an individual basis, or as a batch, which allows users to select several documents to fax at once, if necessary. Similar to the {{% system-name %}} Print feature, the Fax Manager is designed to retain histories of all sent and failed faxes, among other things.

### Fax Dialogue Window

To open a Fax Dialogue window and fax a document, simply click **Fax** when in the specific document needing sent.

![](../review-session-fax-manager.assets/1b93115a94906eb0eeddd4d6cce11da6.png)

Or if several documents are being sent and a fax batch is needed, simply indicate which documents need added to the batch using the **Batch** links from the Documents chart tab list view. Once all documents have been batched, click the **Fax** link from the Batch toolbar, found at the top of the screen.

![](../review-session-fax-manager.assets/76ff0c7cfbe585841b413848920fa269.png)

Clicking any of these links will open a standard Print Dialogue window, which includes a *Fax* section. This window and section may also be accessed by clicking a **Print** link from anywhere in the system and simply changing the *Sent To* selection to **Fax**. The window will update accordingly.

#### Modes

The Fax section of the Print Dialogue window has various fields to be filled out, dependent upon the *mode* selected (i.e., User, Manual, or Chart).

![](../review-session-fax-manager.assets/dc52d54d5c3e2dd65dacd2c7bbf67ae8.png)

**User**: The *User* mode displays any established departments and users, so that users may fax directly from the {{% system-name %}} system to internal departments/users, reducing printing costs and streamlining the faxing process.

**Manual**: The *Manual* mode is used when faxing to an outside resource, or individual/location, that does not already exist in the {{% system-name %}} system. Manual mode can be used anytime, to fax anyone. Simply type in the **Name** of the outside resource being faxed. To fax the same document(s) to multiple individuals or locations, finish typing in the **Fax #** with area code, and click the **Add** button. This will populate the first recipient at the top of the section and allow additional recipients to be added, as needed. To remove a recipient, simply click the **X** button.

![](../review-session-fax-manager.assets/12e7a479fc28d1f7f6361450520620b0.png)

{{% tip %}}
To enter an international number, simply type a plus sign ![](../review-session-fax-manager.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png) followed by the international number. The plus sign will disable automatic formatting in the Fax # field, therefore if it is not included before the number, standard US formatting will still be applied (###) ###-####.
{{% /tip %}}

**Chart**: The *Chart* mode allows faxing to numbers stored in any {{% system-name %}} charts. Any chart with a fax number provided may be selected for faxing, giving users the ability to fax documents to specific individuals, or any entity, based on the chart type (e.g., Patient, PO, EO, EPM, etc). Using the **Name** field, begin typing the last name or organization name, or if the MRN is known, begin the entry with a question mark 
![](../review-session-fax-manager.assets/d603ce4a70fa197b582397e49ee3c2c7.png)
 and continue entering the MRN. If a name or organization does not appear for autocomplete, that indicates a fax number has not been provided in the chart.

{{% info %}}
The {{% system-name %}} system automatically remembers the last person/dept faxed, based on the logged-in user.
{{% /info %}}

#### Additional Fields

**From**: Only users with the security permission *Allow Setting of FAX From* set to **Yes** will be able to utilize this field and its dropdown. This allows users to choose the Call Station Identifier (CSI). The CSI notates where the fax is coming from, and this value is part of the fax header. To change the security permission for a user, simply navigate to the **Control Panel** and open the [Access Control tab](https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control). Search for the appropriate user, customize their security setting, and save, providing a reason for the change. When the *Allow Setting of FAX From* security setting is enabled, a dropdown will show any locations with fax numbers created within {{% system-name %}} , pulling from the [Locations Manager](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager). If the user does not have the proper security granted to change the From field, the user's location will be used, by default.

**Priority**: The *Priority* field allows users to set a priority to an outbound fax. This field defaults to **Normal**. Changing the selection to **Urgent** will trigger the fax to be sent ahead of others in the fax spool. Selecting **Low** will hold the outbound fax in the queue until all *Normal* and *Urgent* priority faxes are sent.

Users may also preview the coversheet and all pages of the fax by clicking the **Preview** button. If previewing the fax, simply click the **Send Fax** after reviewing the pages, or **Cancel Fax**, if the fax needs changes before being sent.

### Fax Manager

The [Fax Manager](https://system/?f=admin&t=faxman) provides a dashboard for users with the proper security permissions to view and manage fax transmissions. For instance, users with the *View Outgoing Faxes* security setting set to **All Users** will be able to view all outbound faxes, along with their statuses and intended destinations, among other things. For more information on viewing and managing faxes, see the [Fax Manager Tab](../../functions/fax-manager/fax-manager-tab-outbound-faxing.md) help documentation.

### System-Delivered Email Notifications

{{% system-name %}} has a feature that will notify users of successful or failed fax transmissions. This feature is enabled, by default; however users must have a valid email address provided in their user account in order to receive any email notifications.

![](../review-session-fax-manager.assets/23d47364761b5e4b495111458c55bc7a.png)

The *Friendly e-mail to user upon successful fax* system setting is user-specific, meaning the user sending the fax will be the recipient of the system-delivered email notification. Though the Fax Manager is always available for viewing failed and successful faxes, all email notifications send immediately, upon completion or failure.

Additionally, a [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) preference drives what email notifications the logged-in user will receive. The **Send Fax Notifications** preference is defaulted to *Both*, but can be updated *Send*, *Failed*, or *None*. Every user has the ability to set their own preference.

**Both**: An email notification is sent for each successful and unsuccessful fax.

**Send**: An email notification is sent for every successful fax.

**Failed**: An email notification is sent when the fax is unsuccessful (fails to transmit).

**None**: No email notifications for *any* faxes sent.

## System Configuration

### Load Fax Coversheet(s)

In order for a fax coversheet to be available within {{% system-name %}} , some configuration and setup is required. A Deployment Consultant will work with the client to load any of the necessary fax coversheets into the system. Once all coversheets have been loaded into the system, users may simply select the appropriate one by using the dropdown provided in the **Cover** field of the Fax Dialogue window.

### Departments & Users

When utilizing the Fax Manager, it is important to define all necessary Departments and establish who are the most commonly faxed departments and/or facilities (e.g., labs, hospitals, referral groups, etc.). Ensure fax numbers are provided on all appropriate login-disabled users and necessary departments.

### My Settings Preferences

Depending on the security permissions granted, specific users can have the ability to manage settings and preferences system-wide, for others, or just for themselves. To edit these settings and preferences, users with the necessary permissions, may navigate to [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) in the **Control Panel**, and manage the options, as needed. It is important responsibility to understand the implications of editing and changing specific preferences, so be sure to review all security roles and individual settings, to ensure only those needing permission to modify Fax Manager preferences are granted the ability. The following settings are the most commonly changed user preferences, when using the Fax Manager:

* Default Coversheet
* Default Fax Comment
* Remember Last Faxed
* Send Fax Notifications

For more information, see the [My Settings](../../functions/system-administration/security/my-settings.md) help documentation.

## Resources

### Help Documentation

* [Batched Documents-Printing or Faxing or Burning](../../functions/document-management/scanning-and-indexing/batched-documents-printing-faxing-burning.md)
* [Email Notification of Sent or Failed Faxes](../../functions/fax-manager/outbound-faxing-email-notifications-of-sent-failed-faxes.md)
* [Fax Manager Tab](../../functions/fax-manager/fax-manager-tab-outbound-faxing.md)
* [Faxing Documents](../../functions/fax-manager/faxing-documents.md)

### Training Videos

* [Print/Fax](https://mieweb.webex.com/mieweb/ldr.php?RCID=512d4a650f5972363795065eb10926cb) (00:13:43)
