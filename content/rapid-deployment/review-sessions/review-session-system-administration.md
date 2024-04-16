---
id: '1KbfDIufXFOMWhWGi_FSMXVX5DlsH90F-7fucLDSMCec'
title: 'Review Session - System Administration'
date: '2020-02-27T21:26:12.492Z'
version: 61
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
  - 'https://whatsmybrowser.org'
  - 'https://www.ssllabs.com/ssltest/viewMyClient.html'
  - 'http://docs.enterprisehealth.com'
  - 'http://docs.webchartnow.com'
  - 'https://system/?f=admin&s=plugins&tabmodule=admin&tabselect=Plugins'
  - 'https://system/?f=activeX&file=WebChartActiveX.msi'
  - 'https://system/?f=activeX&file=miecontrols.cab'
  - '../../functions/system-administration/system-controls/system-plugins.md'
  - 'http://www.alternatiff.com'
  - '../../functions/system-administration/system-controls/multilingual-feature.md'
  - 'https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings'
  - 'https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control'
  - '../../functions/system-administration/system-controls/secure-email-to-whitelisted-domain-s.md'
  - 'https://system/?f=admin&s=pat&subfunc=activity_log&tabmodule=reports&t=Utilization'
  - '../../functions/system-administration/security/my-settings.md'
  - '../../functions/system-administration/security/security-role-settings.md'
  - '../../functions/system-administration/security/compare-security-roles.md'
  - 'https://www.mieweb.com/wiki/System_Administration'
  - '../../functions/system-administration/system-controls/user-provider-and-department-management.md'
  - '../../functions/system-administration/system-controls/language-tab-create-new-help-bubble-text.md'
source: 'https://drive.google.com/open?id=1KbfDIufXFOMWhWGi_FSMXVX5DlsH90F-7fucLDSMCec'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>System Administration Demonstration</strong>
* <strong>Overview</strong>
* <strong>System Configuration</strong>
    * <strong>Browser Requirements</strong>
    * <strong>ActiveX Controls</strong>
    * <strong>Language Translations</strong>
    * <strong>Scheduled Jobs</strong>
    * <strong>Secure Email Setup</strong>
    * <strong>Single Sign-On (SSO)</strong>
    * <strong>Audit & Activity Logs</strong>
    * <strong>Settings/Preferences</strong>
        * <strong>Security Role Settings</strong>
        * <strong>System Settings</strong>
* <strong>Resources</strong>

## Overview

The System Administration module is designed to help medical practices control and monitor what happens behind the scenes of their EHR. With it comes essential tools for managing and overseeing user access, system setup, and general operations of the {{% system-name %}} system. Users are also given some autonomy with the ability to customize any personal preferences from their [My Settings tab](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) of the **Control Panel**. This allows each user to personalize their views, schedules, and overall organization to align with their role or workflow.

As a matter of principle, {{% system-name %}} ensures its products meet the national security and privacy standards, making them HIPAA compliant and secure. In other words, system administrators can control access to the various components of the system, as well as user abilities, such as adding/modifying data, prescribing medications, or documenting exams, for example. With role-based access control, the system administrator can easily allow or limit access to provider schedules, PHI, chart data and results, as well as to various other system features.

Security role permissions can be established and customized for an entire department (e.g., Physicians, Scheduling, Medical Records) or individual users. Additionally, user activity can be easily monitored using the tools of the System Administration module. Custom reports can be created based on chart name, document ID, date, user or event, and server activity logs are also available and kept in real-time, if necessary. Important activities such as user login, access to patient charts, creation or deletion of charts or encounters, and user logout are all displayed as they happen.

For added security, any repeated failed attempts by a user to log into the {{% system-name %}} system will lock the user out of the system until the account is reset by the system administrator. Additional EHR security measures include username/password requirements and an application timeout setting, logging any user out after a period of inactivity.

{{% info %}}
If an error should occur within a custom interface of the {{% system-name %}} system, an email is automatically sent to the {{% system-name %}} technical support department reporting the error.
{{% /info %}}

## System Configuration

### Browser Requirements

All up-to-date browsers with strong TLS cipher strength (at least 1.2) and continued manufacturer support are supported when using the {{% system-name %}} system. If unsure of the browser being used, visit https://whatsmybrowser.org, or if the browser is known, but the current SSL/TLS capabilities are unknown, visit the [Qualys SSL Client Test](https://www.ssllabs.com/ssltest/viewMyClient.html). Otherwise, feel free to contact the MIE Helpdesk with any questions or concerns.

Also important to consider is the use of ActiveX controls, used exclusively in Internet Explorer (IE) browsers. When using an IE platform, ActiveX controls must remain up-to-date. These controls are not only used for many things (e.g., uploading dictations, controlling scanners, interfacing with Microsoft Word, uploading/viewing DICOM files, controlling camera and video capture), but without current and updated ActiveX controls, users of IE browsers may become easy targets of security breaches. With that said, IE 10 or higher (IE 11 recommended) is required for all ActiveX components. However, the vast majority of {{% system-name %}} content is viewable without the need to load software or even ActiveX controls onto a PC.

Lastly, do not forget to update the trusted sites list for each workstation expecting to access {{% system-name %}} help documentation. In order to ensure all documentation will display correctly and be available for viewing, add either http://docs.enterprisehealth.com or http://docs.webchartnow.com, depending on your system build. This can be done using the browser's Internet Options menu.

### ActiveX Controls

As noted, certain modules, load screens, and functionalities require ActiveX controls, or additional plugins, in order to operate and perform correctly. Therefore, those interested in using the scanning and indexing functionality, dictation controls, video and camera capture, or the like, must use IE 10 or higher, with ActiveX controls installed. These plugins need installed, because they are necessary extensions to the associated programs.

When in the **Control Panel**, a [Plugins tab](https://system/?f=admin&s=plugins&tabmodule=admin&tabselect=Plugins) is available, to help guide the installation process along. Here, administrators may access the necessary plugins and installation files. This page can also be used to determine if a specific control is supported in the current browser, or to access and install the relevant plugins, directly. This can be performed individually, or all at once, using a CAB file.

{{% info %}}
The installation of ActiveX controls requires modifications be made to the system registry. Because of this, it is necessary for administrators to have appropriate access and permissions to the operating system (OS), so installation can be performed successfully. All of the ActiveX controls associated with {{% system-name %}} are digitally signed by MIE, in accordance with Microsoft security policies.
{{% /info %}}

All ActiveX controls can be upgraded or installed from the [Plugins](https://system/?f=admin&s=plugins&tabmodule=admin&tabselect=Plugins) Control Panel tab. This can be managed with the WebChart Plugin Installer for Windows, or a single CAB file, which can be used for alternative operating systems, if necessary. If using a Windows OS, simply click the [Download WebChart plugin Installer for Windows](https://system/?f=activeX&file=WebChartActiveX.msi) link from the upper-right corner of the page. This will provide the MSI file (Windows Installer package), which can be used to easily invoke the Windows Installer to install the containing files. This helps facilitate installations across a managed network.

Also in the upper-right corner of the Plugins page, there is a link to [Download all controls in a single CAB file](https://system/?f=activeX&file=miecontrols.cab). Clicking this will compress all of the necessary plugin files into a single CAB file for easy installation. Depending on the operating system being used and method of installation being employed, either a CAB or MSI file can be provided, so loading/deploying all necessary ActiveX controls can be done locally, or en masse, as appropriate to the operating system(s) being used and network management processes.

Troubleshooting ActiveX functions will be a necessary component of support for the {{% system-name %}} deployment. User rights, network settings, proxy servers, and third-party plugins and controls can all pose potential problems in the operation of ActiveX controls. Disabling and enabling installed IE add-ons, or even deleting and reinstalling a control, may be necessary as part of the necessary troubleshooting and ongoing maintenance. A brief description of each plugin is provided, below. However, for more detailed information, see our [System Plugins](../../functions/system-administration/system-controls/system-plugins.md) documentation.

* <strong>AlternaTIFF</strong> (alttiff) - This control is used for viewing TIFF (.tiff, .tif) images within IE browsers. The alternatiff plugin is used not only for printing from IE browsers, but also for indexing scanned content in {{% system-name %}} systems, by way of writing files to the local temporary folder (i.e., the folder given by the GetTempPath Windows API function). The rarely-used <em>Set Wallpaper</em> feature tries to write a file under the local application data folder (CSIDL_APPDATA). More information regarding the AlternaTIFF control can be found atle at http://www.alternatiff.com.
* <strong>VidCap Control</strong> (vidcapc) - This plugin controls video capture and file upload, allowing users to capture images from a webcam or upload images from disk into {{% system-name %}} . This writes files to the local temporary folder and supports various formats.
* <strong>Scan Plug-in</strong> (scancontrol) - The MIE Scan Plug-in provides control for TWAIN-compliant scanning devices, enabling scanning and indexing of documents directly into charts. This control writes files to the local temporary folder.
* <strong>DICOM Viewer</strong> (miedcmview) - The MIE DICOM Viewer plugin allows users to view DICOM format studies within the web browser. This writes files to the local temporary folder.
* <strong>Sketch Control</strong> (miesketch) - This plugin allows users to draw or sketch images and upload those as documents. This writes files to the local temporary folder.
* <strong>Dictation Control</strong> (mieplayer) - The Dictation Control plugin allows users to record and playback WAV files recorded in the {{% system-name %}} system. Playing and uploading ULAW-formatted voice files is supported with this plugin. This writes to a spooler folder that can be configured by the user, as needed. By default, the spooler folder is located at <em>C:\dictation</em>.
* <strong>Binary File Control</strong> (miebinfileedit) - The Binary File Control plugin allows for uploading and downloading file types, as well as forms editing, single-document uploads, and Excel file editing. This control writes to <em>\files\webchart\miebinfileedt</em>.
* <strong>Word Control</strong> (mieword) - The Word Control plugin provides the {{% system-name %}} system direct access to Microsoft (MS) Word for the creation, editing, and uploading of documents. Because {{% system-name %}} has an a HTML rich text editor, MS Word is not required for word processing; however, users accessing MS Word templates do require a local copy of MS Office. This plugin writes to _%UserProfile%\WebChart\MIEWord_.
* <strong>Welch Allyn Vitals & CardioPerfect Control</strong> (wavitals/wavitals2 and cardiocontrol) - Proprietary controls provided by Welch Allyn for interoperability with Welch Allyn Spirometers and Spot Vitals Monitors. These controls are obtained through USB connection with the respective device.
* <strong>Download MIE SSL App</strong> - This is a link found in the upper-right corner of the [Plugins](https://system/?f=admin&s=plugins&tabmodule=admin&tabselect=Plugins) Control Panel tab. Though not a plugin, the MIE SSL App is required for accessing HTTPS connections. This supplies a type communication channel between the web browser and the {{% system-name %}} system, and is required for Electronic Prescribing Controlled Substance (EPCS) workflows.
* <strong>E-Token Signature App</strong> - These links are provided according to the browser being used. The E-Token Signature App is used for signing messages with a USB cryptographic token. This, too, supplies a type of communication authentication, and is required for EPCS workflows.

It is important to determine who is expected to maintain the network. Verify the users needing admin permissions for downloading controls and any initial-use requirements (e.g., download or update ActiveX controls after upgrades). If the necessary users do not have the required admin permissions, be sure to schedule time with the Deployment Specialist, so all plugin controls can be deployed and maintained on an ongoing basis, as well as according to any potential future upgrades, establishing the best plan to ensure plugin controls are updated accordingly. What this means is that upon upgrading to a new release candidate (RC), varying plugin controls may change. Plan and define a policy, per se, regarding upgrades and plugin controls, to ensure any requirements prior to and after an upgrade are addressed, as appropriate.

{{% tip %}}
When logged into the {{% system-name %}} system, copying and pasting ?f=wcversion to the end of the URL and hitting the Enter key will load a page displaying all of the plugin versions available from the {{% system-name %}} system. These are **NOT** the versions installed on the workstation.
{{% /tip %}}

### Language Translations

{{% system-name %}} currently supports translations of nine (9) different languages: English, Chinese (simplified), Dutch, Indonesian, Portuguese, Russian, Spanish, Thai, and Vietnamese. Available translations are not complete, and user input is required for custom layouts and any changes made to the {{% system-name %}} system. Furthermore, MIE cannot attest to the full accuracy of translations, as differing interpretations and vocabulary are used across the various countries.

{{% info %}}
{{% system-name %}} is only capable of translating left-to-right (LTR) languages.
{{% /info %}}

After defining the list of countries and languages the {{% system-name %}} system will need to accommodate, it is best to first enable these languages using the instructions provided in the [Multilingual Feature](../../functions/system-administration/system-controls/multilingual-feature.md) help documentation. Once done, it is recommended that clients begin translations from scratch; however, translation services and vendors are available, such as Language Scientific, who helps clients establish the appropriate translations for their medical and scientific needs. Otherwise, clients utilizing the existing databases are expected to not only review the available translations for accuracy, but also add and update additional translations, which can drastically increase the client-side level of effort needed.

{{% tip %}}
To assist with translation efforts, MIE can provide an export of all observations in the database, allowing for translations to be paired and easily updated, accordingly.
{{% /tip %}}

Additionally, any clients anticipating the use of the {{% system-name %}} system across multiple countries and languages will want to ensure discovery around all workflows, according to the locality and language. Not to mention, time zones will need to be discussed and configured, which can be done from either the [System Settings](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings) or the individual [Access Control](https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control) settings.

### Scheduled Jobs

As a means to automate varying types of system maintenance and necessary workflows, {{% system-name %}} often has recurring scheduled (or cron) jobs that are set to run periodically, on set dates, times, or intervals. It is important that any necessary scheduled/cron jobs are established and set up, prior to any Go-Live dates. Review any possible scheduled jobs needed for performing, reporting, or auditing requirements and ensure all are set up in the {{% system-name %}} system.

### Secure Email Setup

Email notifications can be generated a couple of different ways in the {{% system-name %}} system, including manually (by a user) or automatically, through programmed, time-based cron jobs. These scheduled jobs not only trigger various processes, but they can also be programmed to generate and send specific emails, as needed. That said, much of this available email functionality is controlled by system settings, custom reports, and scheduled jobs. Therefore, functionality will vary by client.

Secure emails can be sent to specific employees/patients, or supervisors/staff, to notify of pending appointments, health-related needs, or follow-ups. Additionally, emailing can be configured for emailing other, outside domains, if necessary. This would require an established secure connection (e.g., VPN, TLS, etc.). Please contact your Deployment Specialist for more information regarding set up, or for more general information, see the [Secure Email to Whitelisted Domains](../../functions/system-administration/system-controls/secure-email-to-whitelisted-domain-s.md) documentation.

{{% info %}}
The ability to send documents via Direct HISP does not rely on this setup. Also, domains such as Gmail or Hotmail would not be appropriate, here. Only domains capable of establishing a secure connection with MIE can be whitelisted.
{{% /info %}}

It should be noted that secure email is needed when emailing protected health information (PHI). This ensures HIPAA compliance. And though this provides a layer of security, there are sometimes even more stringent requirements needing considered. For example, those organizations which require Transport Layer Security (TLS) before accepting anything into their networks. In cases such as these, MIE can work to establish a TLS, or secure email encryption with the client. This will require open communication between the network resources, in order to exchange the necessary keys.

{{% info %}}
Setting up a TLS encryption is an additional charge.
{{% /info %}}

If secure email is not configured for a client, that client will not be able to provide PHI in email correspondences. However, there is the option to have scheduled/cron jobs trigger the necessary emails; only, instead of providing the information directly in the body of the email, a hyperlink will be embedded in the body, which users will be able to click and log into the {{% system-name %}} system to view the information.

TLS is a tedious configuration prone to failure, and when failure occurs, there may be very little visibility to end users. The preferred method is to use RedMine to upload any PHI to MIE for triage, or helpdesk issues, and all emails generated in {{% system-name %}} should not contain PHI.

{{% info %}}
Only a base set of storage types are supported for use with the secure email functionality. For example, lab results, injection records, and the like are not supported storage types, at this time.
{{% /info %}}

For clients interested in using the {{% system-name %}} secure email functionality, first review the list of current email templates and scheduled jobs. Determine which email layouts, alerts, reminders and notifications need customized, edited, or disabled based on requirements, workflow needs, and content of the text. Time will also need provided for discussing and verifying the host of the email server.

### Single Sign-On (SSO)

Single Sign-On (SSO) is the industry standard being used to access sensitive data and protected health information. SSO enables users to access all {{% system-name %}} services by simply signing in one time and granting access through an established login trust. To take advantage of the SSO benefits and expedite the implementation process, various discussions between the client, MIE, and the established network contacts will be needed to determine what environments require SSO (e.g., production database, the migration database, QA database, etc.), as well as to review the associated details and requirements involved.

SSO is a requirement for clients that have purchased an HR Interface. Details pertaining to the interface, particularly the anticipated timeline/frequency (e.g., real-time, hourly, nightly, weekly, etc.) of running scheduled jobs for chart and user creation, will need discussed, and any excluded users (e.g., executives, pre-placement, department-specific roles, etc.) from the HR feed will need to be noted, to ensure SSO access to the {{% system-name %}} system and/or portal(s).

For clients managing individual user logins and passwords, it is important to review the applicable system settings for logins and passwords, so the appropriate system settings can be configured, as needed. Simply navigate to the [System Settings](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings) of the **Control Panel**, and search separately for the keywords **password** and **login**, configuring the system settings, as appropriate.

### Audit & Activity Logs

The System Administration module tracks user activity and movement throughout the {{% system-name %}} system. Server activity logs are kept in real-time, and custom reports can be created based on chart name, document ID, date, user, or event. Sensitive, or important, activities such as user login, accessing charts, creation/deletion of charts or encounters, and user logouts are all displayed as they happen. For added security, any repeated failed attempts by a user to log into the {{% system-name %}} system will lock the user out of the system until the account is reset by the system administrator.

For some of the best results, spend time reviewing the **Activity Log** chart tab within a chart, and determine if visibility needs restricted from specific users. Also, navigate to the **Reports** sidemenu, and run the [Activity Log Report](https://system/?f=admin&s=pat&subfunc=activity_log&tabmodule=reports&t=Utilization), found under the **Utilization** tab. Once satisfied, spend time considering if an emergency access, or Break The Glass, feature is needed for any specific users, and whether or not a Break The Glass reporting tool will be necessary.

### Settings/Preferences

Depending on the security permissions granted, specific users can have the ability to manage settings and preferences system-wide, for others, or just for themselves. To edit these settings and preferences, users with the necessary permissions, may navigate to [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) in the **Control Panel**, and manage the options, as needed. Be sure to review all security roles and individual settings, to ensure only those needing access to the System Admin functionality have access.

For more information, see the [My Settings](../../functions/system-administration/security/my-settings.md) help documentation.

#### Security Role Settings

As noted, the {{% system-name %}} system is equipped with role-based access control security features, allowing system administrators to determine what access is available to which users. This means system administrators can allow or limit staff access to many things, such as charts, patient information, lab results, as well as the various {{% system-name %}} security functions and configuration features.

Security roles can be defined for an entire department (e.g., Physicians, Medical Records, Billing, etc.) or individually. For this reason, it is important to review all user security settings for individual users, as well as role-based positions and departments, needing access to the varying functionality, as needed.

For more detailed information, check out the [Security Role Settings](../../functions/system-administration/security/security-role-settings.md) and [Compare Security Roles](../../functions/system-administration/security/compare-security-roles.md) help documentation.

#### System Settings

There are several system settings available for system administrators. It is recommended that a review of all of the relevant system settings occur with the Deployment Specialist, so any questions pertaining to workflows and system configuration can be addressed. To begin viewing all of the system settings pertaining to system administration, simply perform keyword searches from the [System Settings](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings) tab of the **Control Panel**. This provides a view of all the available system settings that may need enabled, disabled, edited, or set with a specific value, according to the client workflows. Most system settings are enabled or disabled, by default; however, other system settings can be added by the Implementation department as needs arise.

## Resources

[System Administration Public Wiki](https://www.mieweb.com/wiki/System_Administration)

### Help Documentation

* [User/Provider & Department Management](../../functions/system-administration/system-controls/user-provider-and-department-management.md)
* [System Plugins](../../functions/system-administration/system-controls/system-plugins.md)
* [My Settings](../../functions/system-administration/security/my-settings.md)
* [Compare Security Roles](../../functions/system-administration/security/compare-security-roles.md)
* [Security Role Settings](../../functions/system-administration/security/security-role-settings.md)
* [Multilingual Feature](../../functions/system-administration/system-controls/multilingual-feature.md)
* [Language Tab-Create New Help Bubble Text](../../functions/system-administration/system-controls/language-tab-create-new-help-bubble-text.md)
* [Secure Email to Whitelisted Domains](../../functions/system-administration/system-controls/secure-email-to-whitelisted-domain-s.md)
